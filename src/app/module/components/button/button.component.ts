import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title!: string;
  @Output() itemDeleteEvent = new EventEmitter<number>();

  itemDelete() {
    this.itemDeleteEvent.emit();
  }
}
