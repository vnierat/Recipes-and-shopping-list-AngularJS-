import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected  = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe', 
            'This is a simply test', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--195570_11.jpg?itok=r-dZNGTt',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Avocado', 3)
            ]),
        new Recipe('Another test Recipe', 
        'This is a simply test', 
        'https://static.cuisineaz.com/240x192/i108058-kebab-sans-gluten.jpg',
        [
            new Ingredient('Bread', 1),
            new Ingredient('Cheese', 5)
        ])
      ];

      getRecipes() {
          return this.recipes.slice();
      } 
}