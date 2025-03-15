import { NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';
type ButtonTypes = 'submit'|'reset';

@Component({
  selector: 'app-blue-button',
  imports: [NgStyle],
  templateUrl: './blue-button.component.html',
  styleUrl: './blue-button.component.scss'
})
export class BlueButtonComponent {
    //attributes
    label = input<string>("Button");
    type= input<ButtonTypes>('submit');
    size = input<string>('10px')

    //Events
    onClick = output<void>();

    handleClick() {
      this.onClick.emit(); 
    }
}
