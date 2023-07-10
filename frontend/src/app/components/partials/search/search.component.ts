import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchterm='';
  constructor(activatedRoute:ActivatedRoute, private router:Router)
  {
    activatedRoute.params.subscribe((params)=>
    {
      if(params.searchterm)this.searchterm=params.searchterm;

    });
  }


  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  }


}
