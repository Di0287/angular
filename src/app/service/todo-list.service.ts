import { Injectable } from '@angular/core';
import {toDoItemI} from "../components/to-do-list-item/to-do-list-item.component";
import {ToastService} from "./toast.service";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  // toastService: ToastService
  constructor() { }
  private static toDoLists: toDoItemI[] = [
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

  static getToDoLists():toDoItemI[] {
    return this.toDoLists
  }

  static addToDoLists(toDoItem:toDoItemI) {
    this.toDoLists.push(toDoItem);

  }

  static removeToDoLists(id: number) {
    let index: number = this.toDoLists.findIndex(item => item.id === id);
    if(index !== -1) {
      this.toDoLists.splice(index, 1);
    }
  }

  static saveToDoLists(text: string, id: number) {
    let item:toDoItemI | undefined = this.toDoLists.find(item => item.id === id);

    if (item !== undefined) {
      item.text = text;
    }
  }
}
