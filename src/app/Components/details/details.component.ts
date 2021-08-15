import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number = 0 ;
  student:any;
  constructor(private ourservice:DemoService ,ourActivated:ActivatedRoute) {
    this.id = ourActivated.snapshot.params.id;
   }

  ngOnInit(): void {

    this.ourservice.GetUserById(this.id).subscribe(
      d=>{this.student = d} ,
      er=>{console.log(er)}
    );
  }

}
