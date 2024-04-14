import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    imports: [CardLabelComponent, CardPricingComponent]
})
export class CardComponent {
@Input()
gameCover:string=""
@Input()
gameLabel:string=""
@Input()
gameType:string=""
@Input()
gamePrice:string="R$ "
}
