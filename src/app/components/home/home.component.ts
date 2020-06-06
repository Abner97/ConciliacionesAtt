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

  constructor(private _cardsService: CardsDataService) {
    (async () => {
    console.log("await");
     await this._cardsService.getCardsIn();
     await this._cardsService.getCardsOut();
     
    })()

    this.cards = this._cardsService.getHomeCard();
  }

  ngOnInit(): void {
    
 }

}
