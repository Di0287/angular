import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {toDoItemI} from "../models/_.interface";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  http = inject(HttpClient);
  constructor() { }

  getToDoLists():Observable<toDoItemI[]> {
    return this.http.request<toDoItemI[]>('GET', 'http://localhost:3000/list')
  }

  addToDoLists(toDoItem: {status: string, text: string, description: string, }):Observable<HttpResponse<toDoItemI>>  {
    return this.http.request<toDoItemI>('POST', `http://localhost:3000/list/`, {
      observe: "response",
      responseType: "json",
      body: JSON.stringify(toDoItem)
    })
  }
  removeToDoLists(id: number):Observable<HttpResponse<toDoItemI>> {
    return this.http.request<toDoItemI>('DELETE', `http://localhost:3000/list/${id}`, {
      observe: "response",
      responseType: "json"
    })
  }

  saveToDoLists(data:{text: string, status: string, id: number}):Observable<HttpResponse<toDoItemI>> {
    return this.http.request<toDoItemI>('PATCH', `http://localhost:3000/list/${data.id}`, {
      body: JSON.stringify(data),
      observe: "response",
      responseType: "json"
    })
  }
}
