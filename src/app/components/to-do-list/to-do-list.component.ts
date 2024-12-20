import {Component, inject, NgIterable, OnInit} from '@angular/core';
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
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
import {BehaviorSubject, Observable, Subject, switchMap, takeUntil} from "rxjs";
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
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})

export class ToDoListComponent implements OnInit
{
  api: TodoListService = inject(TodoListService)
  toDoLists: BehaviorSubject<toDoItemI[]> = this.api.toDoLists
  destroy$: Subject<boolean> = new Subject<boolean>();

  selectedItemId: number | null = null
  renameItemId: number | null = null
  public selectedItem(id: number): void {
    this.selectedItemId = id;
  }
  public renameItem(id: number): void {
    this.renameItemId = id;
  }

  public itemDelete(id: number): void {
    this.api.removeToDoLists(id)
      .pipe(takeUntil(this.destroy$))
      .pipe(switchMap(() => this.api.getToDoLists()))
      .subscribe((res:toDoItemI[]) => this.api.toDoLists.next(res))
  }
  public itemAdd(data: {status: string, text: string, description: string, }): void {
    if(data.text && data.status) {
      this.api.addToDoLists({ "status": data.status, "text": data.text + ' # ' + 'index', "description": data.description})
        .pipe(takeUntil(this.destroy$))
        .pipe(switchMap(() => this.api.getToDoLists()))
        .subscribe((res:toDoItemI[]) => this.api.toDoLists.next(res))
    }
  }

  isLoading: boolean = true

  ngOnInit() {
    this.api.getToDoLists()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      (res:toDoItemI[]) => this.api.toDoLists.next(res)
    )
    setTimeout(() => {this.isLoading = false}, 500)
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
