import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'custom-list',
  template: `<li>{{num}}</li>`
})
export class ListComponent implements OnInit, OnDestroy {

  /** */
  @Input() num = 0;

  /** */
  @Input() title = 'list';

  /**
   *
   */
  ngOnInit(): void {
    console.log(`${this.title}: init - ${this.num}`);
  }

  /**
   *
   */
  ngOnDestroy(): void {
    console.log(`${this.title}: destroy - ${this.num}`);
  }
}
