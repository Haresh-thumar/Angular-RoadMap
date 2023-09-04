import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  // userName!: string;
  @ViewChild('userinput') userinput!: ElementRef;
  @Output() userAdded = new EventEmitter<string>();

  onUserAdded() {
    // access & change the template reference variable value
    // this.userinput.nativeElement.value = 'Hey Angular';

    this.userAdded.emit(this.userinput.nativeElement.value);
    // console.log(this.userinput.nativeElement.value);
  }

  // onUserAdded(input: HTMLInputElement) {
  //   this.userAdded.emit(input.value);
  // }

}
