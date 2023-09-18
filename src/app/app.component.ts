import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TwitterService } from './twitter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twitter-clone';
  redirectCode='';
  authCode = '';

  constructor(private route: ActivatedRoute, public twitterService: TwitterService, private router: Router){

  }
  ngOnInit(){
    this.route.queryParams.subscribe(
      (data: any) => {
        console.log(data);
        const code = data?.code;
        if(code!=null && code !=''){
          this.redirectCode = code;
        }

        if(this.redirectCode!=null && this.redirectCode.length > 0 ){
          this.twitterService.getOauthToken(this.redirectCode).subscribe(
            (result:any)=>{
              if(result['access_token']!= null && result['access_token']!=undefined ) {
                localStorage.setItem('authCode', result ? result['access_token'] : '');
                this.router.navigate(['/create']);
              }
            },
            (error) =>{

            }
          )
        }
      }, 
      (error) => {

      }
    )
    
    
  }
  
}
