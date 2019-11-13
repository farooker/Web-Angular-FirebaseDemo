import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiTodoService {

  constructor(private http:Http) { 

  }
  LoadApiTodo(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
    .pipe(
      map(res => res.json()) 
    );
  }
}
