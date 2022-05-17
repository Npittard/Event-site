import { Component, OnInit } from '@angular/core';
import { EVENTS } from './eventObjects';
import { FILTERS } from '../filters-form/filters'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events = EVENTS;
  filters = FILTERS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
