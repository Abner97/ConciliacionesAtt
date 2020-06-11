import { Component, OnInit } from '@angular/core';
import {CardsDataService, charData} from '../../services/cards-data.service';


@Component({
  selector: 'app-rojo',
  templateUrl: './rojo.component.html',
})

export class RojoComponent implements OnInit {
 cards: charData[] = [];
 rt="detalles-general/1";
  colors:['red','grey'];
  inconsistenciasOut:number=0;
  inconsistenciasIn:number=0;
  constructor(private _cardsService: CardsDataService) {
    this._cardsService.cleanArray();
    (async () => {
    console.log("await");
     await this._cardsService.setCards("in","telcel");
     await this._cardsService.setCards("out","telcel");
     this.inconsistenciasOut=this._cardsService.getInconsistenciasOut();
     this.inconsistenciasIn=this._cardsService.getInconsistenciasIn();
     this.cards = this._cardsService.getCards();
     localStorage.setItem('TelcelIn', JSON.stringify(this.inconsistenciasIn));
     localStorage.setItem('TelcelOut', JSON.stringify(this.inconsistenciasOut));
    })()
  
  }

  ngOnInit(): void {
    this._cardsService.cleanArray();
  }
}
