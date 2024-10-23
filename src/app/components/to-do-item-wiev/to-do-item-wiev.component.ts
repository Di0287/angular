import {Component, EventEmitter, inject, Injector, OnInit, Output} from "@angular/core";
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TodoListService} from "../../service/todo-list.service";
import {toDoItemI} from "../../models/_.interface";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../module/shared/shared.module";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-to-do-item-wiev',
  standalone: true,
  templateUrl: './to-do-item-wiev.component.html',
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf,
    FormsModule,
    SharedModule
  ],
  styleUrl: './to-do-item-wiev.component.scss'
})
export class ToDoItemViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private api = inject(TodoListService)
  textSave: string = ''
  statusSave: string = ''
  idSave: number = 0;

  toDoListView:Observable<toDoItemI> = this.route.params.pipe<toDoItemI>(
    switchMap((params) => {
      this.idSave = params['id'];
      return this.api.getToDoListWiev(params['id'])
    })
  );

  constructor() {
    this.route.params.subscribe(params => console.log(params))
    this.toDoListView.subscribe({
      next: params => {
        console.log(params)
        this.textSave = params['text'];
        this.statusSave = params['status'];
      },
    })
  }

  itemSave() {
    this.api.saveToDoLists({id: this.idSave, status: this.statusSave, text: this.textSave}).subscribe((res:HttpResponse<any>) => {
          console.log(res)
          if(res.ok){
            this.api.getToDoLists().subscribe((res:toDoItemI[]) => {
              console.log(res)
              // this.toDoLists = res;
              this.router.navigate(['/'])
            })
          }
        })
  }

  ngOnInit(): void {
    // this.route.params.subscribe(params => console.log(params))
  }
}
