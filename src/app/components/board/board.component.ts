import {Component, inject, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ToDoListItemComponent} from "../to-do-list-item/to-do-list-item.component";
import {toDoItemI} from "../../models/_.interface";
import {TodoListService} from "../../service/todo-list.service";

@Component({
  selector: 'app-board',
  standalone: true,
    imports: [
        NgForOf,
        ToDoListItemComponent
    ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent  implements OnInit
{
  api = inject(TodoListService)
  toDoListsCompleted: toDoItemI[] = []
  toDoListsInProgress: toDoItemI[] = []
  ngOnInit() {
    this.api.getToDoLists().subscribe((res:toDoItemI[]) => {
      console.log(res)
      this.toDoListsCompleted = res.filter(el => el.status === 'Completed');
      this.toDoListsInProgress = res.filter(el => el.status === 'InProgress');
    })
  }
}
