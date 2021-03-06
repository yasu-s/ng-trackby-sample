import { Component } from "@angular/core";

interface ListData {
  id: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  /** */
  item1: ListData[] = [];

  /** */
  item2: ListData[] = [];

  /**
   *
   */
  setItem1(): void {
    this.item1 = this.createList();
  }

  /**
   *
   */
  setItem2(): void {
    this.item2 = this.createList();
  }

  /**
   *
   * @param index
   * @param value
   */
  trackByItem(index: number, value: ListData): number {
    return value ? value.id : null;
  }

  /**
   *
   * @param items
   */
  private createList(): ListData[] {
    const items = new Array<ListData>();
    const length = Math.floor(Math.random() * 7) + 3;
    for (let i = 0; i < length; i++) {
      while (true) {
        const value = Math.floor(Math.random() * 10) + 1;
        if (items.findIndex(item => item.id === value) < 0) {
          items.push({ id: value });
          break;
        }
      }
    }
    return items;
  }
}
