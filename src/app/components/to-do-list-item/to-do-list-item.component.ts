import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {SharedModule} from "../../module/shared/shared.module";
import {FormsModule} from "@angular/forms";
import {TodoListService} from "../../service/todo-list.service";
import {ToastService} from "../../service/toast.service";

export interface toDoItemI {
  id: number;
  text: string;
  description: string;
}

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    SharedModule,
    FormsModule
  ],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.scss'
})

export class ToDoListItemComponent {
  constructor(private toastService: ToastService) {
  }
  @Input() toDoItem!: toDoItemI
  @Input() isSelect?: boolean
  @Input() isRename?: number | null
  @Output() itemDeleteEvent = new EventEmitter<number>()

  textSave: string = ''

  itemDelete() {
    this.toastService.show('DELETE - ' + this.toDoItem.id)
    this.itemDeleteEvent.emit(this.toDoItem.id);
  }
  itemSave() {
    TodoListService.saveToDoLists(this.textSave, this.toDoItem.id)
    this.isRename = null
  }
}
