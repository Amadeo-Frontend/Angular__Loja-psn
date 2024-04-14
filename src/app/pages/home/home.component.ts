import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [CardComponent]
})
export class HomeComponent {

}
