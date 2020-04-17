import { Component, OnInit, Input, ViewChild } from '@angular/core';



@Component({
  selector: 'app-theate',
  templateUrl: './theate.component.html',
  styleUrls: ['./theate.component.scss']
})
export class TheateComponent implements OnInit {
  @Input() lichChieu
  constructor() { }

  ngOnInit() {
  }

}
