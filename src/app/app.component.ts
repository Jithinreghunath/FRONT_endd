import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee_Management';
  msg:any;

  constructor(private pService: SharedService, private authService: AuthService){

  }
  ngOnInit():void{
    this.showMessage();
  }
  showMessage(){
    this.pService.getMessage().subscribe(data=>{
      this.msg = data,
      console.log(this.msg);
    });
  }

  logout(){
    this.authService.logout();
  }
}
