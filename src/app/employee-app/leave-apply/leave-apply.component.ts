import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.css']
})
export class LeaveApplyComponent implements OnInit {
  constructor(private service:SharedService) { }

  @Input() emp:any;
  id!:string;
  user!:string;
  apply_date!:string;
  nature_of_leave!:string;
  first_Day!:string;
  last_Day!:string;
  number_Of_Days!:string;
  status!:string;
  

  ngOnInit(): void {
    this.id=this.emp.id;
    this.user=this.emp.user;
    this.apply_date=this.emp.apply_date;
    this.nature_of_leave=this.emp.nature_of_leave;
    this.first_Day=this.emp.first_Day;
    this.last_Day=this.emp.last_Day;
    this.number_Of_Days=this.emp.number_Of_Days;
    this.status=this.emp.status;
    
  }
  
  addleave(){
    var val:any= {
              id:this.id,
              user:this.user,
              apply_date:this.apply_date,
              nature_of_leave:this.nature_of_leave,
              first_Day:this.first_Day,
              last_Day:this.last_Day,
              number_Of_Days:this.number_Of_Days
              
    }

    this.service.addleave(val).subscribe(res=>{
      alert(res.toString());
    });
  }



  updateleave(){
    var val = {
      id:this.id,
      user:this.user,
      apply_date:this.apply_date,
      nature_of_leave:this.nature_of_leave,
      first_Day:this.first_Day,
      last_Day:this.last_Day,
      number_Of_Days:this.number_Of_Days
      };

    this.service.updateleave(val).subscribe(res=>{
     alert(res.toString());
    });
  }
}



