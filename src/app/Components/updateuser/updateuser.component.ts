import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  student ={name:"",age: 0 ,address:{city:"",street:""}};
  u:any;

  id = 0 ;
  constructor(private ourServics:DemoService , private router:Router , ourActived:ActivatedRoute) {
    this.id = ourActived.snapshot.params.id ;
   }

  ngOnInit(): void {
    this.ourServics.GetUserById(this.id).subscribe(
      (s)=>{this.u = s ; this.student = this.u ;}
    );
  }

  update()
  {
    this.ourServics.UpdateUserById(this.id , this.student).subscribe();
    this.router.navigateByUrl("/users");
  }

}
