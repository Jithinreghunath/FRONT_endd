import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service'; 
@Component({
  selector: 'app-navbar-emp',
  templateUrl: './navbar-emp.component.html',
  styleUrls: ['./navbar-emp.component.css']
})
export class NavbarEmpComponent {
  constructor(private service:AuthService,private route:Router) { }
  
  ngOnInit(): void {}
  logOut(){
    this.service.logout();
    this.route.navigate([''])
  }
}
