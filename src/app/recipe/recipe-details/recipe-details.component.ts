import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit,OnDestroy {

  selectedRecipe: Recipe;
  recipeId: number;

  private subscription: Subscription;

  constructor(
    private recipeService: RecipeService, 
    private sls: ShoppingListService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  onEdit(){
    this.router.navigate(['/rezepte', this.recipeId ,'bearbeiten']);
  }

  onAddToList(){
    this.router.navigate(['/rezepte']);
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.recipeId);
  }

  ngOnInit(){
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        this.recipeId = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId)
      }
    );

  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
}
