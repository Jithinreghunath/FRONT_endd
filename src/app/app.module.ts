import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { SharedService } from './shared.service';
import{HttpClientModule}from'@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListAppComponent } from './admin-app/list-app/list-app.component'; 
import { CreateEmpAppComponent } from './admin-app/create-emp-app/create-emp-app.component';
import { EmployeeAppComponent } from './employee-app/employee-app.component';
import { NavbarComponent } from './admin-app/navbar/navbar.component';
import { LeaveManagerComponent } from './admin-app/leave-manager/leave-manager.component';
import { RegisterEmployeeComponent } from './admin-app/register-employee/register-employee.component';
import { ViewEmployeeComponent } from './admin-app/view-employee/view-employee.component';
import { LeaveApplyComponent } from './employee-app/leave-apply/leave-apply.component';
import { LeaveViewComponent } from './employee-app/leave-view/leave-view.component';
import { NavbarEmpComponent } from './employee-app/navbar-emp/navbar-emp.component';

// import { LeaveAppComponent } from './Employee_app/leave-app/leave-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAppComponent,
    LoginAppComponent,
    ListAppComponent,
    CreateEmpAppComponent,
    EmployeeAppComponent,
    NavbarComponent,
    LeaveManagerComponent,
    RegisterEmployeeComponent,
    ViewEmployeeComponent,
    LeaveApplyComponent,
    LeaveViewComponent,
    NavbarEmpComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
