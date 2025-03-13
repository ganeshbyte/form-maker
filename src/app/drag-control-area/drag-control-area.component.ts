import {
  CdkDragDrop,
  CdkDropList,
  DragDropModule
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-drag-control-area',
  imports: [MatIconModule,
    // CdkDrag,
    CdkDropList,DragDropModule],
  templateUrl: './drag-control-area.component.html',
  styleUrl: './drag-control-area.component.scss',
})
export class DragControlAreaComponent {
  onControlDrop(event: CdkDragDrop<any>) {
    console.log('from drag area', event);
  }
}
