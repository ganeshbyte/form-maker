import { Component } from '@angular/core';

interface Control{
  id:number;
  type:string;
}

@Component({
  selector: 'app-control-list',
  imports: [],
  templateUrl: './control-list.component.html',
  styleUrl: './control-list.component.scss'
})
export class ControlListComponent {

  controlList : Control[] = [
    {
      id: 1,
      type: "text"
    },
    {
      id: 2,
      type:"password"
    }
  ]

}
