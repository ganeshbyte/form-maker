import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlueButtonComponent } from "../design/blue-button/blue-button.component";
import { ControlService } from '../services/control.service';
import type { Control } from '../types/control.type';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss'],
  imports: [BlueButtonComponent]
})
export class FormViewComponent implements OnInit, OnDestroy {

  controlFieldList: Control[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private controlService: ControlService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.controlService.controlList$.subscribe((val: Control[]) => {
        console.log("value", val);
        this.controlFieldList = val;
      })
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to avoid memory leaks
    this.subscription.unsubscribe();
  }
}
