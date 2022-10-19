import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private sls: ShoppingListService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(
      params => this.selectedRecipe = this.recipeService.getRecipe(+params['id'])
    );
  }

  onAddToList(){
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

}
