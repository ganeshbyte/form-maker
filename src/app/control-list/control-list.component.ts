import {
  CdkDrag,
  CdkDropList,
  DragDropModule,
  type CdkDragDrop
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ControlService } from '../services/control.service';
import type { Control } from '../types/control.type';

@Component({
  selector: 'app-control-list',
  imports: [ CdkDrag,
      CdkDropList,DragDropModule],
  templateUrl: './control-list.component.html',
  styleUrl: './control-list.component.scss',
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
    },
    {
      id: 3,
      type:"checkbox"
    },
    {
      id: 4,
      type:"radio"
    },
    {
      id: 5,
      type:"text-area"
    }
  ];

  constructor(private controlService: ControlService){}


  onDrop(event: CdkDragDrop<Control>) {
    console.log("this is in the control list",event);
    const control = {
      id: event.item.data?.id + Math.random(),
      type: event.item?.data?.type
    }
    this.controlService.addControl(control);
  }

    

}
