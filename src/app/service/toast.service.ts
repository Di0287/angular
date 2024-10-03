import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastsL: string[] = []

  show(message: string, duration: number = 1500) {
    this.toastsL.push(message)
    setTimeout(() => {
      this.remove(message)
    }, duration)
  }

  remove(message: string) {
    console.log(message)
    this.toastsL = this.toastsL.filter(t => t !== message)
  }

  getToasts() {
    return this.toastsL
  }
}
