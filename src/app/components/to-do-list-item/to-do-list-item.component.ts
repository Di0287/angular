import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {SharedModule} from "../../module/shared/shared.module";

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
    SharedModule
  ],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.scss'
})

export class ToDoListItemComponent {
  @Input() toDoItem!: toDoItemI
  @Input() isSelect?: boolean
  @Output() itemDeleteEvent = new EventEmitter<number>()

  itemDelete() {
    this.itemDeleteEvent.emit(this.toDoItem.id);
  }
}
