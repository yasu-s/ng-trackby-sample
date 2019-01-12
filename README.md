# Overview

This is a sample for checking the difference in the presence or absence of trackBy when using ngFor with Angular.  
The returned value of trackBy should return a unique value.

# System requirements

* Node.js 10.x
* Yarn 1.12.x

# Used library

* TypeScript 3.1.x
* Angular 7.1.x

# Operation check  

## 1. Download Sample

```
git clone git@github.com:yasu-s/ng-trackby-sample.git
```

## 2. Installing packages  

```
cd ng-trackby-sample
yarn
```

## 3. Launch sample application  

```
yarn start
```

## 4. Execution result   

### non trackBy

![non-trackby](https://user-images.githubusercontent.com/2668146/50533725-b3f78b00-0b73-11e9-8f51-e7004988e54d.gif)


### used trackBy

![use-trackby](https://user-images.githubusercontent.com/2668146/50533745-f8832680-0b73-11e9-8a0d-420436b10255.gif)

# Sample source

## src/app/list.component.ts

```typescript
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'custom-list',
  template: `<li>{{num}}</li>`
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() num = 0;

  @Input() title = 'list';

  ngOnInit(): void {
    console.log(`${this.title}: init - ${this.num}`);
  }

  ngOnDestroy(): void {
    console.log(`${this.title}: destroy - ${this.num}`);
  }
}
```

## src/app/app.component.ts

```typescript
import { Component, TrackByFunction } from '@angular/core';

interface ListData {
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  item1: ListData[] = [];
  item2: ListData[] = [];
  key = 'id';

  setItem1(): void {
    this.item1 = this.createList();
  }

  setItem2(): void {
    this.item2 = this.createList();
  }

  /**
   * ngFor trackBy setting.
   */
  trackByItemFunc(): TrackByFunction<ListData> {
    return (index, value) => {
      return value ? value[this.key] : null;
    };
  }

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
```

## src/app/app.component.html

```html
<div style="margin-top: 10px;">
  <div>
    <h4>
      Non trackBy
    </h4>
    <div>
      <button (click)="setItem1()">Apply</button>
    </div>
    <div>
      <ul>
        <ng-container *ngFor="let item of item1">
          <custom-list [num]="item.id" title="non-trackBy"></custom-list>
        </ng-container>
      </ul>
    </div>
  </div>
  <div style="margin-top: 10px;">
    <h4>
      trackBy
    </h4>
    <div>
      <button (click)="setItem2()">Apply</button>
    </div>
    <div>
      <ul>
        <ng-container *ngFor="let item of item2; trackBy: trackByItemFunc()">
          <custom-list [num]="item.id" title="trackBy"></custom-list>
        </ng-container>
      </ul>
    </div>
  </div>
</div>
```
