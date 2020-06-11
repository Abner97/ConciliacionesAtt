import { Component, OnInit } from '@angular/core';
import {CardsDataService, charData} from '../../services/cards-data.service';
@Component({
  selector: 'app-naranja',
  templateUrl: './naranja.component.html',
  styleUrls: ['./naranja.component.css']
})
export class NaranjaComponent implements OnInit {
  rt="detalles-general/3";
  cards: charData[] = [];
  colors:['red','grey'];
  inconsistenciasOut:number=0;
  inconsistenciasIn:number=0;
  constructor(private _cardsService: CardsDataService) {
    this._cardsService.cleanArray();
    (async () => {
    console.log("await");
     await this._cardsService.cleanArray();
     await this._cardsService.setCards("in","nextel");
    
     this.inconsistenciasOut=this._cardsService.getInconsistenciasOut();
     this.inconsistenciasIn=this._cardsService.getInconsistenciasIn();
     this.cards = this._cardsService.getCards();
     localStorage.setItem('NextelIn', JSON.stringify(this.inconsistenciasIn))
    })()
  
  }
  ngOnInit(): void {
    this._cardsService.cleanArray();
 }
 
}
