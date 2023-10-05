import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DragDropUploadComponent } from './drag-drop-upload/drag-drop-upload.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  // { path: 'users', component: UsersComponent }
  { path: 'users', component: DragDropUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
