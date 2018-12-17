import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  /** */
  item1: number[] = [];

  /** */
  item2: number[] = [];

  /**
   *
   */
  setItem1(): void {
    this.item1 = (this.item1.length === 5) ? [1, 2, 3] : [5, 2, 3, 4, 1];
  }

  /**
   *
   */
  setItem2(): void {
    this.item2 = (this.item2.length === 5) ? [1, 2, 3] : [5, 2, 3, 4, 1];
  }

  /**
   *
   * @param index
   * @param value
   */
  trackByItem(index: number, value: number): number {
    return value;
  }
}
