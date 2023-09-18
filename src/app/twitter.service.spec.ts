
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TwitterService } from './twitter.service';

describe('TwitterService', () => {
  let service: TwitterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TwitterService]
    });

    service = TestBed.inject(TwitterService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a tweet', () => {
    const token = '1234';
    const text = 'Test tweet text';
    const dummyResponse = { message: 'Tweet created successfully' };

    service.createTweet(token, text).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpTestingController.expectOne('http://127.0.0.1:10000/create');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ text, token });

    req.flush(dummyResponse);
  });

  it('should delete a tweet', () => {
    const token = '1234';
    const id = '12345';
    const dummyResponse = { message: 'Tweet deleted successfully' };

    service.deleteTweet(token, id).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpTestingController.expectOne('http://127.0.0.1:10000/delete');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ id, token });

    req.flush(dummyResponse);
  });

  it('should get OAuth token', () => {
    const code = '1234';
    const dummyResponse = { token: '1231224' };

    service.getOauthToken(code).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpTestingController.expectOne('http://127.0.0.1:10000/getTwitterOauth');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ code });

    req.flush(dummyResponse);
  });
});
