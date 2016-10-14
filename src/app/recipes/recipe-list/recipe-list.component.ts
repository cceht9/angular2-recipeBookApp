import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chick Pea Wrap', 'Very tasty', 'http://ohmyveggies.com/wp-content/uploads/2016/10/jerk-chickpea-wraps-2.jpg', []),
    new Recipe('Autumn nourish', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2014/10/Autumn-Nourish-Bowl-2.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
