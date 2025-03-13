import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Changed from Subject to BehaviorSubject
import type { Control } from '../types/control.type';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private controlListSubject = new BehaviorSubject<Control[]>([]);  // Use BehaviorSubject for maintaining the current value

  constructor() { }

  // Get the observable for control list to be used in components
  controlList$ = this.controlListSubject.asObservable();

  // Method to add a new control
  addControl(control: Control) {
    // Get the current value of controlList and add the new control
    const updatedList = [...this.controlListSubject.value, control];
    this.controlListSubject.next(updatedList);  // Emit the new list
  }

  // Method to get the current value of control list
  getFormFields() {
    return this.controlListSubject.value;  // Return the current value of control list
  }
}
