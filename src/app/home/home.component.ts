import { Component } from '@angular/core';
import { ControlListComponent } from "../control-list/control-list.component";

@Component({
  selector: 'app-home',
  imports: [ControlListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
