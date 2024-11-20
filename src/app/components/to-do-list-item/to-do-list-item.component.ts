import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {SharedModule} from "../../module/shared/shared.module";
import {FormsModule} from "@angular/forms";
import {ToastService} from "../../service/toast.service";
import {toDoItemI} from "../../models/_.interface";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    SharedModule,
    FormsModule,
    RouterLink
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
  @Output() itemDeleteEvent: EventEmitter<number> = new EventEmitter<number>()

  public itemDelete(): void {
    this.toastService.show('DELETE - ' + this.toDoItem.id)
    this.itemDeleteEvent.emit(this.toDoItem.id);
  }
}
