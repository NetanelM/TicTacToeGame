import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  public cubeGameList:any;
  public popupToggle:boolean = false;
  public listOfAnswers:Array<string>;

  constructor() {
    this.newGame();
    this.listOfAnswers = ['246', '048', '012', '345', '678', '258', '147', '036'];
  }

  newGame() {
    this.cubeGameList = [
      [
        {position: '0', toggle: false, img: ''},
        {position: '1', toggle: false, img: ''},
        {position: '2', toggle: false, img: ''}
      ],
      [
        {position: '3', toggle: false, img: ''},
        {position: '4', toggle: false, img: ''},
        {position: '5', toggle: false, img: ''}
      ],
      [
        {position: '6', toggle: false, img: ''},
        {position: '7', toggle: false, img: ''},
        {position: '8', toggle: false, img: ''}
      ]
    ];
  }
}
