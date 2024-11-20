import { Component } from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {ToastService} from "../../service/toast.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.scss'
})
export class ToastsComponent {
  protected toasts: BehaviorSubject<string[]>
  constructor(protected toastService: ToastService) {
  this.toasts = this.toastService.toastsL
  }
}
