import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {ToastService} from "../../service/toast.service";

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.scss'
})
export class ToastsComponent {
  constructor(protected toastService: ToastService) {

    // Пропадает реактивность после отработки setTimeout в getToasts()
    // this.toasts = this.toastService.getToasts()
  }
  protected toasts: string[] = []

    ngOnInit() {
  this.toasts = this.toastService.getToasts()
  }
  // this.toasts = this.toastService.getToasts
}
