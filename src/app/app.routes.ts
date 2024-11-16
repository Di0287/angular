import { Routes } from '@angular/router';
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";
import {ToDoItemViewComponent} from "./components/to-do-item-wiev/to-do-item-wiev.component";
import {BoardComponent} from "./components/board/board.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path:'tasks',
    component: ToDoListComponent,
    children: [
      {
        path:':id',
        component: ToDoItemViewComponent,
      },
    ]
  },
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: '**',
    component: ToDoListComponent,
  }
];
