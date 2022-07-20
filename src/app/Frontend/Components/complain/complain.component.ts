import { Component, OnInit } from '@angular/core';
import { customerquery } from 'src/app/models/customerquerys';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})

export class ComplainComponent implements OnInit {
  customerquery:customerquery=new customerquery();


  constructor(private servicesService:ServicesService) { }

  ngOnInit(): void {
  }


  complain(){
    // alert('User Created')
    console.log(this.customerquery);
    this.servicesService.complain(this.customerquery).subscribe(data=>{
      alert("Complaint Submitted");
      
    },error=>alert("Complaint not submitted"));
  }

}
