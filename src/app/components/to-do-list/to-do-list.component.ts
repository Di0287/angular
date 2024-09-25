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
import {TodoListService} from "../../service/todo-list.service";
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
  toDoLists: toDoItemI[] = TodoListService.getToDoLists()

  name: string | null = null
  description: string | null = null
  selectedItemId: number | null = null
  renameItemId: number | null = null
  selectedItem(id: number) {
    this.selectedItemId = id;
  }
  renameItem(id: number) {
    this.renameItemId = id;
  }

  descriptionText() {
    return this.toDoLists.find(item => item.id === this.selectedItemId)?.description;
  }

  itemDelete(id: number) {
    TodoListService.removeToDoLists(id)
  }
  itemAdd() {
    if(this.name) {
      let index: number = Math.max(...this.toDoLists.map(item => item.id));
      index++
      TodoListService.addToDoLists(<toDoItemI>{id: index, text: this.name + ' # ' + index, description: this.description})
      this.name = null
    }
  }

  isLoading: boolean = true

  ngOnInit() {
    setTimeout(() => {this.isLoading = false}, 500)
  }

}
