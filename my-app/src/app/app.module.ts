import { NgModule }         from '@angular/core';
//import { HttpModule } from '@angular/http';  
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessageService }       from './message.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { TasksComponent } from './Tasks/Tasks.component';


@NgModule({
  declarations: [
    AppComponent, TasksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
    HttpErrorHandler,
    MessageService,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }