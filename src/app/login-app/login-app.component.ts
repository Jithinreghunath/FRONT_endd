import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from '../shared.service';
import{ first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {
  myform !: FormGroup;
  constructor( private authService:AuthService, private router: Router){}

  ngOnInit(): void { this.myform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
    
  }

  
  get f() {
    return this.myform.controls;
  }

  onSubmit() {
    
    this.authService.login(this.myform.value.username, this.myform.value.password).pipe(first()).subscribe(
      data =>{
        if(data.admin == true)
        {
        this.router.navigate(['admin'])
          console.log(data);
          alert('Admin LoginSuccess')
        }
        else{
          this.router.navigate(['employee'])
          console.log(data);
          alert('Employee LoginSuccess')
        }
      }
    )
  }
}

