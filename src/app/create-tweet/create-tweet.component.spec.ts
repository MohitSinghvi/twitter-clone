import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTweetComponent } from './create-tweet.component';
import { TwitterService } from '../twitter.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CreateTweetComponent', () => {
  let component: CreateTweetComponent;
  let fixture: ComponentFixture<CreateTweetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTweetComponent],
      providers:[TwitterService],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CreateTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
