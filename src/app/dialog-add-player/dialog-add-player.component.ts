import { Component, OnInit } from '@angular/core';
import { CommonModule} from "@angular/common";
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports:  [ CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent implements OnInit {
  name: string = '';
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }
  ngOnInit(): void {
  }
   onNoClick(): void {
    this.dialogRef.close();

   }

}
