import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, CardComponent, MenuBarComponent, HomeComponent]
})
export class AppComponent {
  title = 'psn-store';
}
