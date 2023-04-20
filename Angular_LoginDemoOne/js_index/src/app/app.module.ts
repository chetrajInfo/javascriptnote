import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexbodyComponent } from './indexbody/indexbody.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms'; //need to add this import if your form need to work properly and also inside imports array below
//import { RouterModule, Routes } from '@angular/router';


/*
const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'indexbody', component: IndexbodyComponent },
  { path: 'footer', component: FooterComponent }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexbodyComponent,
    FooterComponent,
    //FormsModule,  (this will create error telling indexbody element is not defined because we cannot put FormsModule in NgModule only inside the imports arrays)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //RouterModule.forRoot(routes) // <-- Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
