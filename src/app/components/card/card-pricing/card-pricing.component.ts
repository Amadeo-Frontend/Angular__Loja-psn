import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html'
})
export class CardPricingComponent {
@Input()
gameType:string="PS5"
@Input()
gamePrice:string="R$ 399,99"
}
