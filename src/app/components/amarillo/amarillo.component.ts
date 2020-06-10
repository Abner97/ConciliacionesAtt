import { Component, OnInit } from '@angular/core';
import {CardsDataService, charData} from '../../services/cards-data.service';

@Component({
  selector: 'app-amarillo',
  templateUrl: './amarillo.component.html',
})
export class AmarilloComponent implements OnInit {

  cards: charData[] = [];
  colors:['red','grey'];
  inconsistenciasOut:number=0;
  inconssistenciasIn:number=0;
  constructor(private _cardsService: CardsDataService) {
    this._cardsService.cleanArray();
    (async () => {
    console.log("await");
     await this._cardsService.setCards("in","movistar");
     await this._cardsService.setCards("out","movistar");
     this.inconsistenciasOut=this._cardsService.getInconsistenciasOut();
     this.inconssistenciasIn=this._cardsService.getInconsistenciasIn();
     this.cards = this._cardsService.getHomeCard();
     
    })()
  
  }

  ngOnInit(): void {
    this._cardsService.cleanArray();
  }

}
