import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe(
        'CR7', 
        'SIUUUUUU', 
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltfcdeffabeec48348/60dc14140401cb0ebfac177e/cc0acdf7dc2968346cc8d86dc76b6763cbb8b8dd.jpg?format=jpg',
        [new Ingredient('CL', 5), new Ingredient('SIU´s', 7)]
        ),
        new Recipe(
          'Schnitzel',
          'Das ist ein crispy cleanes Chicken Schnitzel',
          'https://i.ytimg.com/vi/vYpWgclKXWg/maxresdefault.jpg',
          [new Ingredient('Hühnchen', 1), 
          new Ingredient('Eier', 1), 
          new Ingredient('Mehl', 100), 
          new Ingredient('Fresher Boi', 1),
          new Ingredient('Notification Gang', 1)
        ]
        ),
      ]; 

    getRecipes(){
        return this.recipes;
    }

    getRecipe(id: number){
      return this.recipes[id];
    }
  
    deleteRecipe(id: number){
      this.recipes.splice(id, 1);
    }
  }