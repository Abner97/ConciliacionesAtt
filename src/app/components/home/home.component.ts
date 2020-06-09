import { Component, OnInit } from '@angular/core';
import {CardsDataService, charData} from '../../services/cards-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: charData[] = [];
  colors:['red','grey'];
  inconsistenciasOut:number=0;
  inconssistenciasIn:number=0;
  constructor(private _cardsService: CardsDataService) {
    (async () => {
    console.log("await");
     await this._cardsService.getCardsIn();
     await this._cardsService.getCardsOut();
     this.inconsistenciasOut=this._cardsService.getInconsistenciasOut();
     this.inconssistenciasIn=this._cardsService.getInconsistenciasIn();
     this.cards = this._cardsService.getHomeCard();
     
    })()
  
  }

  ngOnInit(): void {
    
 }

}
