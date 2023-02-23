import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentGetComponent } from './student-get/student-get.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-student', pathMatch: 'full' },  
  { path: 'view-student', component: StudentComponent},  
  { path: 'add-student', component:StudentGetComponent },  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
