import { Component, OnInit } from '@angular/core';
import {MetaDataService} from "../service/metaData/meta-data.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  public toggleActor:string = 'o';
  public winner:string = '';

  constructor(public metaDataService:MetaDataService) {
  }

  ngOnInit() {
  }


  winnerIs(data) {

    let list = [];
    data.toggle = true;
    let imgOld = this.toggleActor;

    if (!data.img) {
      this.toggleActor = this.toggleActor === 'o' ? 'x' : 'o';
      data.img = this.toggleActor === 'o' ? 'x' : 'o';

      this.metaDataService.cubeGameList.forEach(data => {
        data.forEach(cube => {
          if (cube.img === imgOld) {
            list.push(cube.position);
          }
        })
      });

      this.metaDataService.listOfAnswers.forEach((data, x) => {
        let answer = this.metaDataService.listOfAnswers[x].split('');
        if (list.indexOf(answer[0]) !== -1 && list.indexOf(answer[1]) !== -1 && list.indexOf(answer[2]) !== -1) {
          this.winner = data['img'];
          this.ighlightWinner(answer);
        }
      })
    }
  }


  ighlightWinner(winner) {
    for (var w in winner) {
      this.metaDataService.cubeGameList.forEach(data => {
        data.forEach(d => {
          if (d.position === winner[w]) {
            d['winner'] = true;
          }
        })
      })
    }
    this.metaDataService.popupToggle = true;
  }


}
