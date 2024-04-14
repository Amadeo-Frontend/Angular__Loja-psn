import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  standalone: true,
  imports: [],
  templateUrl: './card-label.component.html'
})
export class CardLabelComponent {
@Input()
gameLabel:string=""
}
