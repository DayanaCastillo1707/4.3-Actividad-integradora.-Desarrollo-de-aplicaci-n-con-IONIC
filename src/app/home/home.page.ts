import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public showText1: boolean = false;
  public showText2: boolean = false;
  public showText3: boolean = false;
  constructor() {}

}
