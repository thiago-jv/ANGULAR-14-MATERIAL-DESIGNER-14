import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  constructor(private snackBar: MatSnackBar) { }

  public openSnackBar(){
    const snackBar = this.snackBar.open('Hello Thiago', 'close',{
      duration: 2000
    })

    snackBar.afterDismissed().subscribe( _ => {
      console.log("Dismissed");
    })

    snackBar.onAction().subscribe(_ => {
      console.log('After Action');
    })
  }


}
