import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { LoginAppComponent } from './login-app/login-app.component';
// import { ListAppComponent } from './admin-app/list-app/list-app.component'; 
import { RegisterEmployeeComponent } from './admin-app/register-employee/register-employee.component'; 
import { EmployeeAppComponent } from './employee-app/employee-app.component';
import { LeaveManagerComponent } from './admin-app/leave-manager/leave-manager.component'; 
// import { LeaveViewComponent } from './employee-app/leave-view/leave-view.component';


const routes: Routes = [
    {path:'', component : LoginAppComponent},
    {path:'admin',component : AdminAppComponent},
    // {path:'list',component : ListAppComponent},
    {path:'register',component:  RegisterEmployeeComponent},
    {path:'employee',component:  EmployeeAppComponent},
    {path:'leave',component:LeaveManagerComponent},
    // {path:'leave_apply',component:LeaveViewComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
