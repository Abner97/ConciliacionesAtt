import { Component, OnInit } from '@angular/core';
import {CardsDataService, charData} from '../../services/cards-data.service';

@Component({
  selector: 'app-amarillo',
  templateUrl: './amarillo.component.html',
})
export class AmarilloComponent implements OnInit {
  rt="detalles-general/2"
  cards: charData[] = [];
  colors:['red','grey'];
  inconsistenciasOut:number=0;
  inconsistenciasIn:number=0;
  constructor(private _cardsService: CardsDataService) {
    this._cardsService.cleanArray();
    (async () => {
    
     await this._cardsService.setCards("in","movistar");
     await this._cardsService.setCards("out","movistar");
     this.inconsistenciasOut=this._cardsService.getInconsistenciasOut();
     this.inconsistenciasIn=this._cardsService.getInconsistenciasIn();
     this.cards = this._cardsService.getCards();
     localStorage.setItem('MovistarIn', JSON.stringify(this.inconsistenciasIn));
     localStorage.setItem('MovistarOut', JSON.stringify(this.inconsistenciasOut));
     
    })()
  }
  
  ngOnInit(): void {
    this._cardsService.cleanArray();
  }

}
