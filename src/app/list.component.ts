import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-list',
  template: `<li>{{num}}</li>`
})
export class ListComponent implements OnInit {

  /** */
  @Input() num = 0;

  /** */
  @Input() title = 'list';

  /**
   *
   */
  ngOnInit(): void {
    console.log(`${this.title} init - ${this.num}`);
  }
}
