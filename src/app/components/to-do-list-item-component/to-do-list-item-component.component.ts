import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {SharedModule} from "../../module/shared/shared.module";

export interface toDoItemI {
  id: number;
  text: string;
}

@Component({
  selector: 'app-to-do-list-item-component',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    SharedModule
  ],
  templateUrl: './to-do-list-item-component.component.html',
  styleUrl: './to-do-list-item-component.component.scss'
})

export class ToDoListItemComponentComponent {
  @Input() toDoItem!: toDoItemI
  @Output() itemDeleteEvent = new EventEmitter<number>()

  itemDelete(Id: number | undefined) {
    this.itemDeleteEvent.emit(Id);
  }
}
