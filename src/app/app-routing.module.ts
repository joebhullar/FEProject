import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';

const routes: Routes = [
  {path:'', redirectTo: '/Students', pathMatch:'full'},
  {path:'Students', component:StudentsComponent}
];

@NgModule({
  declarations:[
    StudentsComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
