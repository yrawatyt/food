import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[]=[];
  constructor(private foodService:FoodService,activatedroute:ActivatedRoute)
  {
    activatedroute.params.subscribe((params)=>
    {
      if(params.searchterm)
      {
        this.foods=foodService.getallfoodbysearchterm(params.searchterm);
      }
      else if (params.tag)
      this.foods=  this.foodService.getAllFoodsByTag(params.tag);
      else
      {
        this.foods=foodService.getAll();
      }
    })
    
  }



}
