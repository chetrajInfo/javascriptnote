import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { IndexbodyComponent } from './indexbody/indexbody.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/loginpage', pathMatch: 'full' },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'indexbody', component: IndexbodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
