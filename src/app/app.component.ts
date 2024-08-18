import { Component } from '@angular/core';
import { Users } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  email: string = '';
  address: string = '';
  users: Users[] = [];

  saveDetails() {
    this.users.push({
      id: Date.now(),
      name: this.name,
      email: this.email,
      address: this.address
    });

    this.name = '';
    this.email = '';
    this.address = '';
  }

  deleteDetails(index: number) {
    this.users.splice(index, 1);
  }
}
