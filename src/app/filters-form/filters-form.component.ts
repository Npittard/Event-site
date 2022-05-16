import { Component, OnInit } from '@angular/core';
import { FILTERS } from './filters';
import { EVENTS } from '../event-list/eventObjects';

@Component({
  selector: 'app-filters-form',
  // templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.css'],
  template:`
  <form class="formContainer">
    <ul class="filtersList">
      <li class="filterItem" *ngFor="let filter of filters">
          <label for="{{filter.filterType}}">{{filter.filterType}}</label>
          <input id="{{filter.filterType}}" type="checkbox">
      </li>
    </ul>
  </form>
  `
})
export class FiltersFormComponent implements OnInit {
  filters = FILTERS;
  constructor() { }

  ngOnInit(): void {

  }

}
