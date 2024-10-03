import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";
import {ToastsComponent} from "./components/toasts/toasts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoListComponent, ToastsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-aplication';
}
