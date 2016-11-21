import {Component} from '@angular/core';
import {MyApp2} from './my.app.2.component';
import {MyApp3} from './my.app.3.component';

@Component({
    selector: 'my-app',
    template: `
    <tabs>
      <div *ngFor="let app of apps">
        <tab [tabTitle]="app.title" [class]="app.class"></tab>
      </div>
    </tabs>`
})

export class App {
  // private testApp = MyApp2;
  apps = [
    {
      title: 'テスト1',
      class: MyApp2
    },
    {
      title: 'テスト2',
      class: MyApp3
    }
  ];
}