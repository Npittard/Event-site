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
  constructor() { }

  toggleChecked(btn: any){
    var getFilter = btn.id
    console.log(getFilter)
    var clickedFilter = document.querySelector(`#${getFilter}`)
    clickedFilter?.toggleAttribute('checked')
  }

  filterChecked(){
    var filterList = document.querySelectorAll("input[type='checkbox']");
    filterList.forEach(item => { 
      if (item.hasAttribute('checked')){
      //   return item
      // } else{
      //   return false
      };
    });
  }
 

  ngOnInit(): void {

  }

}
