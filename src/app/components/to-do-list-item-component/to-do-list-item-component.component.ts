import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-to-do-list-item-component',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './to-do-list-item-component.component.html',
  styleUrl: './to-do-list-item-component.component.scss'
})
export class ToDoListItemComponentComponent {
  @Input() toDoItem: object
  @Output() itemDeleteEvent = new EventEmitter<number>()

  itemDelete(Id: number) {
    this.itemDeleteEvent.emit(Id);
  }
}
