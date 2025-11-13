import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  public loadingPercent = 0;
  public queryValue = 0;
  public queryMode: ProgressBarMode = 'query';

  constructor() { }

  ngOnInit(): void {
    this.loadProgress(500)
    .subscribe(i => this.loadingPercent = i);

    concat(
      interval(3000)
      .pipe(
        take(1),
        tap(_ => (this.queryMode = 'determinate'))
      ),
    this.loadProgress(500)
    ).subscribe(i => this.queryValue = i);
  }

  loadProgress(speed: number){
    return interval(speed)
    .pipe(map(i => i * 5),
      takeWhile(i => i <= 100))
  }

}
