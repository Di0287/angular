import {Component, EventEmitter, inject, Injector, OnInit, Output} from "@angular/core";
import {Observable, Subject, switchMap, takeUntil} from "rxjs";
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
export class ToDoItemViewComponent {
  destroy$: Subject<boolean> = new Subject<boolean>();
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private api: TodoListService = inject(TodoListService)
  textSave: string
  statusSave: string
  idSave: number

  toDoListView: Observable<toDoItemI> = this.route.params.pipe<toDoItemI>(
    switchMap((params: Params) => {
      this.idSave = params['id'];
      return this.api.getToDoListWiev(params['id'])
    })
  );

  constructor() {
    this.textSave = ''
    this.statusSave = ''
    this.idSave = 0;
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe()
    this.toDoListView
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (params: toDoItemI) => {
          this.textSave = params['text'];
          this.statusSave = params['status'];
        },
      })
  }

  public itemSave(): void {
    this.api.saveToDoLists({id: this.idSave, status: this.statusSave, text: this.textSave})
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<toDoItemI>): void => {
        if (res.ok) {
          this.api.getToDoLists()
            .pipe(takeUntil(this.destroy$))
            .subscribe((res: toDoItemI[]) => {
              this.router.navigate(['/'])
            })
        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
