import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html'
})
export class CardPricingComponent {
@Input()
gameType:string=""
@Input()
gamePrice:string="R$ "
}
