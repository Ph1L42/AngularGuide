import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {

  constructor(private sls: ShoppingListService) { }

  onSubmit(form: NgForm){
     const newIngredient = new Ingredient(form.value.name, form.value.amount);
     this.sls.addIngredient(newIngredient);
     this.onClear(form);
  }

  onClear(form: NgForm){
      form.reset();
  }

  ngOnInit(): void {
  }

}
