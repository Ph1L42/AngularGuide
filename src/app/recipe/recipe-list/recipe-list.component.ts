import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] =[
    new Recipe(
    'CR7', 
    'SIUUUUUU', 
    'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltfcdeffabeec48348/60dc14140401cb0ebfac177e/cc0acdf7dc2968346cc8d86dc76b6763cbb8b8dd.jpg?format=jpg',
    [new Ingredient('CL', 5), new Ingredient('SIU´s', 7)]
    ),
    new Recipe(
      'Schnitzel',
      'Das ist ein crispy cleanes Chicken Schnitzel',
      'http://kmetro.restaurantden.com/wp-content/uploads/sites/67/2016/03/dish_1.jpg',
      [new Ingredient('Hühnchen', 1), new Ingredient('Eier', 1), new Ingredient('Mehl', 100)]
    ),
  ]; 

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(){
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
