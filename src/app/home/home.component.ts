import { Component } from '@angular/core';
import { ControlListComponent } from "../control-list/control-list.component";
// import { DragControlAreaComponent } from "../drag-control-area/drag-control-area.component";
import { FormViewComponent } from "../form-view/form-view.component";

@Component({
  selector: 'app-home',
  imports: [ControlListComponent, FormViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
