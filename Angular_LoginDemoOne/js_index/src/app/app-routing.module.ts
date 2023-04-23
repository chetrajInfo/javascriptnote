import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { IndexbodyComponent } from './indexbody/indexbody.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/loginpage', pathMatch: 'full' },
  {path: '', component: HomepageComponent},// this will display the homepagecomponent as soon as page is load 
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'indexbody', component: IndexbodyComponent },
  { path: 'homepage',  component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
