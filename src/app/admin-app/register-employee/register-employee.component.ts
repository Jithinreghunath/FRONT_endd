import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { SharedService } from 'src/app/shared.service';
import{ first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service'; 

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
    myform !: FormGroup;  
    constructor(private authService: AuthService, private router: Router){}
    ngOnInit(): void {
      this.myform = new FormGroup({
        username: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        password2: new FormControl(''),
      });
    }
    get f() {
      return this.myform.controls;
    }
    onSubmit() {
      this.authService.register(this.myform.value).pipe(first()).subscribe(
        data =>{
          // this.authService.success('Registration successful', true);
          this.router.navigate(['admin']);
          console.log(data);
          alert('Register Success');
        }
      )}
  }
      
  
  

