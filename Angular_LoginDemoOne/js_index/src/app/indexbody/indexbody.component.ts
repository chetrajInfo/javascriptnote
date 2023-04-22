import { Component } from '@angular/core';

@Component({
  selector: 'app-indexbody',
  templateUrl: './indexbody.component.html',
  styleUrls: ['./indexbody.component.css']
})


export class IndexbodyComponent {
  fullName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  tel: number | undefined;
  dob: Date | undefined;

  onSubmit() {
    // Implement your login logic here
  }

  onCancel() {
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.tel = undefined;
    this.dob = undefined;
  }
}
