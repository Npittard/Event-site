import { Component, OnInit, Output } from '@angular/core';
import { FILTERS} from './filters';
import { EVENTS } from './eventObjects';


@Component({
  selector: 'app-filters-form',
  // templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.css'],
  template:`
  <form class="formContainer">
    <ul class="filtersList">
      <li class="filterItem" *ngFor="let filter of filters">
          <label for="{{filter.filterType}}" class="inputLabel">{{filter.filterType}}</label>
          <input id="{{filter.id}}" type="checkbox" class="checkBox" (click)="toggleChecked(this.filter)">
      </li>
    </ul>
  </form>
  <div class="searchContainer">
    <button (click)="getEvent()" class="searchBtn">Search</button>
  </div>
  <div class="eventsContainer">
    <ul class="eventList">
      <ng-container *ngFor="let event of events">
        <li class="eventItem" *ngIf="event.display === true"><h2 class="eventName">{{event.activityName}}</h2></li>   
      </ng-container>
    </ul>
  </div>
  `
})

export class FiltersFormComponent implements OnInit {
  filters = FILTERS;
  events = EVENTS;
  storedFilters:any=[]
  constructor() { }

  toggleChecked(btn: any){
    let getFilter = btn.id
    let clickedFilter = document.querySelector(`#${getFilter}`)
    if(clickedFilter?.hasAttribute('checked')){
      this.storedFilters.pop(getFilter)
      clickedFilter?.toggleAttribute('checked')
    }else{
      this.storedFilters.push(getFilter)
      clickedFilter?.toggleAttribute('checked')
    }
    return (this.storedFilters)
  }
  getEvent(){
    // for each object
    for (let i = 0; i< this.events.length; i++){
      this.events[i].display = false;
      // for each object filter array
      for (let j = 0; j< this.events[i].tags.length; j++){
        // if tags are in stored filters
        if (this.storedFilters.includes(this.events[i].tags[j]) == true){
          // change display to true
          this.events[i].display = true;
        }
      }
    }
  }

  ngOnInit(): void {

  }

}
