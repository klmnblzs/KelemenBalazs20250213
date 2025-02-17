import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  a = input.required<number>();
  b = input.required<number>();

  @Output() resultEvent = new EventEmitter<string>();
  resultValue:number | any = '';

  sum(a:number, b:number) {
    this.resultValue = a+b;
    this.resultEvent.emit(this.resultValue)
  }

  minus(a:number, b:number) {
    this.resultValue = a-b;
    this.resultEvent.emit(this.resultValue)
  }

}
