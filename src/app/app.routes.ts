import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from './game-info/game-info.component';




export const routes: Routes = [
    { path: '', component: StartScreenComponent},
    { path: 'game', component: GameComponent},
     { path: 'player', component: PlayerComponent},
     { path: 'dialog-add-player', component: DialogAddPlayerComponent},
     { path: 'gane-info', component: GameInfoComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
