import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-level-one',
    templateUrl: './level-one.component.html',
    styleUrls: ['./level-one.component.css']
})
export class LevelOneComponent implements OnInit {

    level = 'Poziom 1';
    range = '1-10';
    number = 0;

    constructor() { }

    ngOnInit() {
    }

    check(randomnumber: number) {
        this.number = randomnumber;
    }

}
