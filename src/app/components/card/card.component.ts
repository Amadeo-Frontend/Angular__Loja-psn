import { Component } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    imports: [CardLabelComponent]
})
export class CardComponent {

}
