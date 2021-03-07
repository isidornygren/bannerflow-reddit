import { Component, OnInit } from '@angular/core';
import { Feed } from '../types/feed';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedService } from '../services/feed.service';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

const DEFAULT_LIMIT = 10;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  subreddit: string | null = null;

  // Keep count of how many posts have historically been shown in the feed,
  // as well as how many posts are currently displayed in the feed.
  count: number = 0;
  currentAmount: number = 0;

  limitValues = [5, 10, 15, 20, 25];
  limit: number = 0;

  feed$: Observable<Feed> | undefined;

  constructor(
    private feedService: FeedService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onChangeDisplayAmount(value: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        limit: value,
      },
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.subreddit = data.subreddit;
    });

    this.route.queryParams.subscribe((data) => {
      this.limit = parseInt(data.limit) || DEFAULT_LIMIT;
    })

    this.feed$ = combineLatest([
      this.route.queryParams,
      this.route.params,
    ]).pipe(
      map(([queryParams, params]) => [
        {
          ...queryParams,
          limit: queryParams.limit || DEFAULT_LIMIT,
        },
        params.subreddit,
      ]),
      mergeMap(([queryParams, subreddit]) =>
        this.feedService.fetchSubredditFeed(subreddit, queryParams).pipe(
          tap((feed) => {
            console.log(feed);
            this.currentAmount = feed.data.children.length;
            if (queryParams.before) {
              this.count = +(queryParams.count || 0) - 1;
            } else {
              this.count = +(queryParams.count || 0) + this.currentAmount;
            }
          })
        )
      )
    );
  }
}
