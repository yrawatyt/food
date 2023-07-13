import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    let foodsObservalbe:Observable<Food[]>;
    activatedroute.params.subscribe((params)=>
    {
      if(params.searchterm)
      {
        foodsObservalbe=foodService.getAllFoodsBySearchTerm(params.searchterm);
      }
      else if (params.tag)
      foodsObservalbe=  this.foodService.getAllFoodsByTag(params.tag);
      else
      {
        foodsObservalbe=foodService.getAll();
      }
      foodsObservalbe.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
    })
    
  }



}
