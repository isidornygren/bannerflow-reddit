import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Feed } from '../types/feed';
import { Observable } from 'rxjs';

export interface FeedParams {
  limit?: number;
  count?: number;
  before?: string;
  after?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  fetchSubredditFeed(subreddit: string, params?: FeedParams): Observable<Feed> {
    const paramString =
      params &&
      '?' + Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&') || '';

    return this.http.get<Feed>(
      `https://www.reddit.com/r/${subreddit}.json${paramString}`
    );
  }
}
