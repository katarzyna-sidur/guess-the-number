import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export enum GameState {
    tooLess = 1,
    tooMuch,
    win
}

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private number: number;
    private level: number;

    constructor(public router: Router) { }

    starGame(level: number) {
        switch (level) {
            case 1:
                this.number = Math.floor(Math.random() * 10) + 1;
                this.level = 1;
                break;
            case 2:
                this.number = Math.floor(Math.random() * 50) + 1;
                this.level = 2;
                break;
            case 3:
                this.number = Math.floor(Math.random() * 100) + 1;
                this.level = 3;
                break;
        }
    }

    getLevel() {
        return this.level;
    }

    checkWinningNumber(number: number): GameState {

        if (number < this.number) {
            return GameState.tooLess;
        } else if (number > this.number) {
            return GameState.tooMuch;
        }

        return GameState.win;
    }

}
