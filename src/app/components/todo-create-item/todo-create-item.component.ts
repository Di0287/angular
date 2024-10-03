import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../module/shared/shared.module";

@Component({
  selector: 'app-todo-create-item',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  templateUrl: './todo-create-item.component.html',
  styleUrl: './todo-create-item.component.scss'
})
export class TodoCreateItemComponent {
  @Output() itemAddEvent = new EventEmitter<{status: string, text: string, description: string}>()

  textAdd: string = ''
  descriptionAdd: string = ''
  statusAdd: string = ''

  itemAdd() {
    this.itemAddEvent.emit({status: this.statusAdd, text: this.textAdd, description: this.descriptionAdd});

    this.textAdd = ''
    this.descriptionAdd = ''
    this.statusAdd = ''
  }
}
