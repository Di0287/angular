import {Component, inject, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ToDoListItemComponent} from "../to-do-list-item/to-do-list-item.component";
import {SharedModule} from "../../module/shared/shared.module";
import {TodoListService} from "../../service/todo-list.service";
import {HttpResponse} from "@angular/common/http";
import {toDoItemI} from "../../models/_.interface";
import {TodoCreateItemComponent} from "../todo-create-item/todo-create-item.component";
import {RouterOutlet} from "@angular/router";
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
    SharedModule,
    TodoCreateItemComponent,
    RouterOutlet
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})

export class ToDoListComponent implements OnInit
{
  api = inject(TodoListService)
  toDoLists: toDoItemI[] = []

  constructor() {
    console.log('ngOnInit')
  }

  selectedItemId: number | null = null
  renameItemId: number | null = null
  selectedItem(id: number) {
    this.selectedItemId = id;
  }
  renameItem(id: number) {
    this.renameItemId = id;
  }

  itemDelete(id: number) {
    this.api.removeToDoLists(id).subscribe((res:HttpResponse<any>) => {
      if(res.ok){
        this.api.getToDoLists().subscribe((res:toDoItemI[]) => {
          console.log(res)
          this.toDoLists = res;
        })
      }
    })
  }
  itemAdd(data: {status: string, text: string, description: string, }) {
    if(data.text && data.status) {
      // let index: number = Math.max(...this.toDoLists.map(item => item.id));
      // index++
      this.api.addToDoLists({ "status": data.status, "text": data.text + ' # ' + 'index', "description": data.description}).subscribe((res:HttpResponse<any>) => {
        console.log(res)
        if(res.ok){
          this.api.getToDoLists().subscribe((res:toDoItemI[]) => {
            console.log(res)
            this.toDoLists = res;
          })
        }
      })
    }
  }

  isLoading: boolean = true

  ngOnInit() {
    console.log('ngOnInit')
    this.api.getToDoLists().subscribe((res:toDoItemI[]) => {
      console.log(res)
      this.toDoLists = res;
    })
    setTimeout(() => {this.isLoading = false}, 500)
  }

}
