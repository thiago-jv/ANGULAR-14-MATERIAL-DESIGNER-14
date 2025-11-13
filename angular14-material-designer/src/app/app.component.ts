import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map } from 'rxjs';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular14-material-designer';

  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;


  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0]
    fromEvent(content, 'scroll')
    .pipe(
      map(() => content.scrollTop)
    )
    .subscribe({
      next: (value) => this.determineHeader(value)
    })
  }

  constructor(
    private breakpointObserver: BreakpointObserver){}

    ngAfterContentInit(): void {
      this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
        next: (res) => {
          if(res.matches){
          this.isSmallScreen = true;
          } else {
            this.isSmallScreen = false;
          }
        }
      })
    }

    get sidenavMode(){
      return this.isSmallScreen ? 'over' : 'side';
    }

    determineHeader(top: number){
      this.popText = top >= TEXT_LIMIT;
      this.applyShadow = top >= SHADOW_LIMIT;
    }
}
