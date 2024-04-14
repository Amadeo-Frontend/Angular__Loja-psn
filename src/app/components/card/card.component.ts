import { Component } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    imports: [CardLabelComponent, CardPricingComponent]
})
export class CardComponent {

}
