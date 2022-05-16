import { Component, OnInit } from '@angular/core';
import { EVENTS } from './eventObjects';
import { FILTERS } from '../filters-form/filters'

@Component({
  selector: 'app-event-list',
  // templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  template:`
  <div class="eventsContainer">
    <ul class="eventList">
      <li class="eventItem" *ngFor="let event of events">{{event.activityName}}</li>
    </ul>
  </div>
  `
})
export class EventListComponent implements OnInit {
  events = EVENTS;
  
  constructor() { }

  ngOnInit(): void {

  }

}
