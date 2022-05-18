import { Component, OnInit, Output } from '@angular/core';
import { FILTERS} from './filters';
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
          <input id="{{filter.id}}" type="checkbox" class="checkbox" (click)="toggleChecked(this.filter)">
      </li>
    </ul>
    <button type="button" (click)="filterChecked()">Submit</button>
  </form>
  <div class="eventsContainer">
  <ul class="eventList">
    <ng-container *ngFor="let event of events">
      <li class="eventItem">{{event.activityName}}</li>   
    </ng-container>
  </ul>
</div>
  `
})
export class FiltersFormComponent implements OnInit {
  filters = FILTERS;
  events = EVENTS;
  storedFilters:any[] = []
  storedEvents:any[] = []
  constructor() { }

  toggleChecked(btn: any){
    let filterList = document.querySelectorAll("input[type='checkbox']")
    let getFilter = btn.id
    let clickedFilter = document.querySelector(`#${getFilter}`)
    
    clickedFilter?.toggleAttribute('checked')
    
    let enabledFilters:any[] = [];
    filterList.forEach(item => {
      if (item.hasAttribute('checked')){
        enabledFilters.indexOf(item.id) === -1 ? enabledFilters.push(item.id) : console.log("This item already exists");
      }
    });
    console.log(enabledFilters)
    this.storedFilters = enabledFilters
  }

  filterChecked(){
      var event = this.events
      event.forEach(item => {
        console.log(item.filters)
      });
  }
  

  ngOnInit(): void {

  }

}
