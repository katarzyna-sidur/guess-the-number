import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

    @Input()
    level: string;

    @Input()
    range: string;

    randomnumber: number;

  @Output()
  emitrandomnumber = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

    send () {
    this.emitrandomnumber.emit(this.randomnumber);
  }
}
