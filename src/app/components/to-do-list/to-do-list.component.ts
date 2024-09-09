import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {
  toDoItemI,
  ToDoListItemComponentComponent
} from "../to-do-list-item-component/to-do-list-item-component.component";
import {SharedModule} from "../../module/shared/shared.module";

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    NgForOf,
    MatInput,
    MatFormField,
    MatLabel,
    MatFormField,
    MatInput,
    FormsModule,
    NgClass,
    ToDoListItemComponentComponent,
    NgIf,
    SharedModule
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})

export class ToDoListComponent {
  toDoLists: toDoItemI[] = [
    {id: 1, text: 'To-Do item # 1'},
    {id: 2, text: 'To-Do item # 2'},
    {id: 3, text: 'To-Do item # 3'},
    {id: 4, text: 'To-Do item # 4'},
    {id: 5, text: 'To-Do item # 5'},
    {id: 6, text: 'To-Do item # 6'},
    {id: 7, text: 'To-Do item # 7'},
    {id: 8, text: 'To-Do item # 8'},
    {id: 9, text: 'To-Do item # 9'},
    {id: 10, text: 'To-Do item # 10'},
    {id: 11, text: 'To-Do item # 11'}
  ]

  name: string | null = null

  itemDelete(id: number) {
    let index: number = this.toDoLists.findIndex(item => item.id === id);
    if(index !== -1) {
      this.toDoLists.splice(index, 1);
    }
  }
  itemAdd() {
    if(this.name) {
      let index: number = Math.max(...this.toDoLists.map(item => item.id));
      index++
      this.toDoLists.push({id: index, text: this.name + ' # ' + index });
      this.name = null
    }
  }

  protected readonly Math = Math;

  isLoading: boolean = true

  ngOnInit() {
    setTimeout(() => {this.isLoading = false}, 500)
  }

}
