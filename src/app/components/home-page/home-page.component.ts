import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    level: number;


    constructor(public router: Router, private gameService: GameService) { }

    ngOnInit() {
    }

   startGame(number: number) {
        this.gameService.starGame(number);
        this.router.navigate(['/game']);
    }
}
