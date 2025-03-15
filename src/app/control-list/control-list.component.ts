import {
  CdkDrag,
  CdkDropList,
  DragDropModule,
  type CdkDragDrop,
} from '@angular/cdk/drag-drop';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ControlService } from '../services/control.service';
import type { Control } from '../types/control.type';

@Component({
  selector: 'app-control-list',
  imports: [
    CdkDrag,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CdkDropList,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './control-list.component.html',
  styleUrl: './control-list.component.scss',
})
export class ControlListComponent {

  controlLabel = '';

  controlList = signal<Control[]>([
    {
      id: 1,
      type: 'text',
      isView: false,
    },
    {
      id: 2,
      type: 'password',
      isView: false,
    },
    {
      id: 3,
      type: 'checkbox',
      isView: false,
    },
    {
      id: 4,
      type: 'radio',
      isView: false,
    },
    {
      id: 5,
      type: 'text-area',
      isView: false,
    },
  ]);

  constructor(private controlService: ControlService) {}

  onDrop(event: CdkDragDrop<Control>) {
    console.log('this is in the control list', event);
    const control = {
      id: event.item.data?.id + Math.random(),
      type: event.item?.data?.type,
    };
    this.controlService.addControl(control);
  }

  onControlClick(id: number) {
    this.controlList.update((controlList) => {
      return controlList.map((control) => {
        if (control.id === id) {
          control.isView = !control.isView;
        }else{
          control.isView = false;
        }
        return control;
      });
    });
  }

  addControl(control: Control) {
     control.label = this.controlLabel;
     this.controlService.addControl(control);
     this.controlLabel = '';
     this.onControlClick(control.id);
  }
}
