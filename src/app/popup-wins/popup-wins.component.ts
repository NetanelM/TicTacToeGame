import { Component, OnInit, Input } from '@angular/core';

import {MetaDataService} from "../service/metaData/meta-data.service";
@Component({
  selector: 'app-popup-wins',
  templateUrl: './popup-wins.component.html',
  styleUrls: ['./popup-wins.component.css']
})
export class PopupWinsComponent implements OnInit {

  @Input() public toggleActor: string;

  constructor(public metaDataService:MetaDataService) {
  }

  ngOnInit() {

  }


  playAgain() {
    this.metaDataService.popupToggle = false;
    this.metaDataService.newGame();
  }

}
