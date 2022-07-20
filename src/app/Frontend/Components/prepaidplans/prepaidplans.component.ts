import { Component, OnInit } from '@angular/core';
import { PlansService } from '../../../plans.service';
import { PrepaidPlans } from '../../../models/prepaidPlans';


@Component({
  selector: 'app-prepaidplans',
  templateUrl: './prepaidplans.component.html',
  styleUrls: ['./prepaidplans.component.css']
})
export class PrepaidplansComponent implements OnInit {

  prepaidplans:PrepaidPlans[]=[];


  constructor(public plansService:PlansService) { }

    ngOnInit(): void {
      this.plansService.getAllPrepaidPlans().subscribe((data:PrepaidPlans[])=>{
        this.prepaidplans=data;
      })
    }

}
