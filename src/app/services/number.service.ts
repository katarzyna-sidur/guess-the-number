import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NumberService {

    public number: number;
    public click = 0;

    constructor() { }

   checkNumber (level: number) {
    if (level === 1) {
      this.number = Math.floor(Math.random() * 10) + 1;
      console.log(this.number);
    } if (level === 2) {
      this.number = Math.floor(Math.random() * 50) + 1;
    } if (level === 3) {
      this.number = Math.floor(Math.random() * 100) + 1;
    }
    this.click = 0;
    }

    sumClick() {
        this.click = this.click + 1;
    }
}
