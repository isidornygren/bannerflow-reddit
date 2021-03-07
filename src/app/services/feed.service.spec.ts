import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FeedService } from './feed.service';

describe('FeedService', () => {
  let service: FeedService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FeedService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchSubredditFeed', () => {
    it('should properly build the fetch url without any params', () => {
      service.fetchSubredditFeed('shaggy').subscribe();

      httpMock.expectOne('https://www.reddit.com/r/shaggy.json');
    });

    it('should properly build the fetch url with multiple params', () => {
      service.fetchSubredditFeed('shaggy', { limit: 12, before: 'something', after: 'else'}).subscribe();

      httpMock.expectOne('https://www.reddit.com/r/shaggy.json?limit=12&before=something&after=else');
    });
  })
});
