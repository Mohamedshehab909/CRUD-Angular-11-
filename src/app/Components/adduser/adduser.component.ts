import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 nstudent ={ name: "",age: 0 ,address:{city:"",street:""}}
  constructor(private ourServics:DemoService , private router:Router) { }

  ngOnInit(): void {

  }

  save()
  {
    this.ourServics.AddNewUser(this.nstudent).subscribe(
      a=>{this.router.navigateByUrl("/users")}
    );

  }

}
