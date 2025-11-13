import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as moment from 'moment';

@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrls: ['./datapicker.component.scss']
})
export class DatapickerComponent implements OnInit {

  public startDate = moment([2025, 11, 1]);
  public minDate = moment([2025, 11, 1]);
  public maxDate = moment([2025, 12, 25]);

  constructor(private plataform: Platform) {}

  ngOnInit(): void {}

  get isTouchDevice() {
    return this.plataform.ANDROID || this.plataform.IOS;
  }
}
