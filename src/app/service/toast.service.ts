import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastsL:BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])

  show(message: string, duration: number = 1500) {
    let val: string[] = this.toastsL.getValue()
    val.push(message)
    this.toastsL.next(val)
    setTimeout(() => {
      this.remove(message)
    }, duration)
  }

  remove(message: string) {
    const val: string[] = this.toastsL.getValue()
    this.toastsL.next(val.filter((t: string) => t !== message))
  }
}
