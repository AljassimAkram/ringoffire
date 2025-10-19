import { Component, OnInit } from '@angular/core';
import { CommonModule} from "@angular/common";
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation= false; 
  game!: Game;
  currentCard: string='';
 
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }
  newGame(){
    // Logic for starting a new game
    this.game = new Game();
    console.log(this.game);
  }
  takeCard() {
    // Logic for taking a card
    if(!this.pickCardAnimation){
      this.currentCard = this.game.stack.pop() as string;
      this.pickCardAnimation = true;
      console.log(this.currentCard);
      
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
    
  }

}
