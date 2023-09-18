import { Component } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent {
  tweetContent: any;
  tweetId: any;
  oauthToken: any;
  createdId:any;
  tweetSucess = false;
  tweetDeleteSucess = false;

  constructor(private twitterService: TwitterService){
    this.oauthToken = localStorage.getItem('authCode');
  }

  ngOnInit() {
    this.tweetSucess = false;

  }
  tweet(){
    this.oauthToken = localStorage.getItem('authCode');
    this.twitterService.createTweet(this.oauthToken,this.tweetContent).subscribe(
      (result: any) =>{
        this.createdId = result?.data?.id;
        console.log("Tweet created Successfully");
        this.tweetSucess = true;
      },
      ()=>{
        console.log("Tweet creation failed");
      }
    )
    
  }

  deleteTweet() {
    this.twitterService.deleteTweet(this.oauthToken,this.tweetId).subscribe(
      (result) =>{
        this.tweetDeleteSucess = true;
        console.log("Tweet deleted Successfully");
      },
      ()=>{
        console.log("Tweet creation failed");
      }
    )
  }
}
