import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameService, GameState } from 'src/app/services/game.service';

@Component({
    selector: 'app-game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

    randomNumber: number;
    gameStarted = false;
    level: number;
    range: string;
    click = 0;


    win: boolean;
    tooLess: boolean;
    tooMuch: boolean;

    constructor(private gameService: GameService, public router: Router) {
    }

    ngOnInit() {
        this.level = this.gameService.getLevel();
        switch (this.level) {
            case 1: this.range = '1 - 10'; break;
            case 2: this.range = '1 - 50'; break;
            case 3: this.range = '1 - 100'; break;
        }
    }

    check() {
        this.gameStarted = true;
        this.click = this.click + 1;
        const state = this.gameService.checkWinningNumber(this.randomNumber);
        this.tooLess = false;
        this.tooMuch = false;
        this.win = false;
        if (state === GameState.tooLess) {
            this.tooLess = true;
        } else if (state === GameState.tooMuch) {
            this.tooMuch = true;
        } else if (state === GameState.win) {
            this.win = true;
        }
        this.randomNumber = null;
    }



    goBack() {
        this.router.navigate(['/home']);
    }


}
