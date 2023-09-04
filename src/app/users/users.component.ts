import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent {
  userList: string[] = [];

  ngOnInit(): void { }

  onUserAdded(event: string) {
    this.userList.push(event);
    // console.log(event);
  }

  // onUpdateUser(event: Event) {
  //   this.userName = (event.target as HTMLInputElement).value; // both are same working
  //   // this.userName = (<HTMLInputElement>event.target).value; // both are same working
  // }


}
