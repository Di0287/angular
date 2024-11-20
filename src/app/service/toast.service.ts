import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastsL:BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])

  show(message: string, duration: number = 1500) {
    this.toastsL.next([...this.toastsL.getValue(), message])
    setTimeout(() => {
      this.remove(message)
    }, duration)
  }

  remove(message: string) {
    this.toastsL.next(this.toastsL.getValue().filter((t: string) => t !== message))
  }
}
