import { Component, input, output } from '@angular/core';

type ButtonTypes = 'submit'|'reset';

@Component({
  selector: 'app-blue-button',
  imports: [],
  templateUrl: './blue-button.component.html',
  styleUrl: './blue-button.component.scss'
})
export class BlueButtonComponent {
    //attributes
    label = input<string>("Button");
    type= input<ButtonTypes>('submit');
    size = input<string>('10')

    //Events
    onClick = output<void>();

    handleClick() {
      this.onClick.emit(); 
    }
}
