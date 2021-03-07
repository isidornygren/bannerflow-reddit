import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchPost', () => {
    it('should properly build the fetch url', () => {
      const httpMock = TestBed.inject(HttpTestingController);

      service.fetchPost('shaggy', '1337', 'scooby').subscribe();

      httpMock.expectOne('https://www.reddit.com/r/shaggy/comments/1337/scooby.json');
    });
  });
});
