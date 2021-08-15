import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:any= [];
id = 0 ;
  constructor(private ourservisce:DemoService ,private router:Router) { }

  ngOnInit(): void {

    this.ourservisce.GetAllUser().subscribe(
      (data)=>{ this.users = data },
      (err)=>{ console.log(err)}
    )
  }
  delete(n:any)
  {
     this.ourservisce.DeleteUser(n).subscribe(
       d=>{this.ourservisce.GetAllUser().subscribe(
        (date)=>{this.users = date}
      )}
     );
  }
}
