import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'create', component: CreateTweetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
