import { Component, OnInit } from '@angular/core';
import { CommonModule} from "@angular/common";
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent,MatButtonModule, MatIconModule,
    MatDialogModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation= false; 
  game!: Game;
  currentCard: string='';
 
  constructor(public dialog: MatDialog) { }

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
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name) {
        this.game.players.push(name);
      }
    });

  }
}

