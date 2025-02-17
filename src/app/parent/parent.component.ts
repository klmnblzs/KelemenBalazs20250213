import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a: any | null = null
  b: any | null = null
  result: string | null = null

  getResult(result: string) {
    this.result = result
  }
}
