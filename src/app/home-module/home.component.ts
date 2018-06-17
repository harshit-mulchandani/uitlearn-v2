import {Component, HostListener, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';

declare let jQuery: any;


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeAppComponent implements OnInit, OnChanges {

  showSearch = false;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }


}
