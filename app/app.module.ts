import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { FormSubscriberComponent } from './form-subscriber.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FormSubscriberComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }