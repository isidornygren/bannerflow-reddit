import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { PostService } from '../services/post.service';
import { Child, Post } from '../types/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post$: Observable<{ post: Post; comments: ReadonlyArray<Child> }> | undefined;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      mergeMap((queryParams) =>
        this.postService.fetchPost(
          queryParams.get('subreddit')!,
          queryParams.get('id')!,
          queryParams.get('title')!
        )
      ),
      map((root) => ({
        post: root[0].data.children?.[0].data,
        comments: root[1].data.children.map((comment) => comment),
      }))
    );
  }
}
