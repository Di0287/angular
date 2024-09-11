import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {
  toDoItemI,
  ToDoListItemComponent
} from "../to-do-list-item/to-do-list-item.component";
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
    ToDoListItemComponent,
    NgIf,
    SharedModule
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})

export class ToDoListComponent {
  toDoLists: toDoItemI[] = [
    {id: 1, text: 'To-Do item # 1', description: 'description # 1' },
    {id: 2, text: 'To-Do item # 2', description: 'description # 2' },
    {id: 3, text: 'To-Do item # 3', description: 'description # 3' },
    {id: 4, text: 'To-Do item # 4', description: 'description # 4' },
    {id: 5, text: 'To-Do item # 5', description: 'description # 5' },
    {id: 6, text: 'To-Do item # 6', description: 'description # 6' },
    {id: 7, text: 'To-Do item # 7', description: 'description # 7' },
    {id: 8, text: 'To-Do item # 8', description: 'description # 8' },
    {id: 9, text: 'To-Do item # 9', description: 'description # 9' },
    {id: 10, text: 'To-Do item # 10', description: 'description # 10' },
    {id: 11, text: 'To-Do item # 11', description: 'description # 11'}
  ]

  name: string | null = null
  description: string | null = null
  selectedItemId: number | null = null
  selectedItem(id: number) {
    this.selectedItemId = id;
  }

  descriptionText() {

    return this.toDoLists.find(item => item.id === this.selectedItemId)?.description;
  }

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
      this.toDoLists.push(<toDoItemI>{id: index, text: this.name + ' # ' + index, description: this.description});
      this.name = null
    }
  }

  protected readonly Math = Math;

  isLoading: boolean = true

  ngOnInit() {
    setTimeout(() => {this.isLoading = false}, 500)
  }

}
