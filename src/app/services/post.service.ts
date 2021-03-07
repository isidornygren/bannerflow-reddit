import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  fetchPost(subreddit: string, id: string, title: string): Observable<RootObject[]> {
    return this.http.get<RootObject[]>(`https://www.reddit.com/r/${subreddit}/comments/${id}/${title}.json`);
  }
}
