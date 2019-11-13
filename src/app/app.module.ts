import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { Test1Component } from './component/test1/test1.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ApiTodoService} from './service/api-todo.service'
import { from } from 'rxjs';
import {RouterModule,Routes} from '@angular/router'
const appRoutes:Routes=[
  {path:"",component:TestComponent},
  {path:"Test1",component:Test1Component}
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ApiTodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
