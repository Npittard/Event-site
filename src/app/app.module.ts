import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { FiltersFormComponent } from './filters-form/filters-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    FiltersFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
