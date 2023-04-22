import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  
  email: string | undefined;
  password: string | undefined;
  token_num: string | undefined;

  onSubmit() {
    // Implement your login logic here
  }

  onCancel() {
    
    this.email = '';
    this.password = '';
    this.token_num='';
  }
}
