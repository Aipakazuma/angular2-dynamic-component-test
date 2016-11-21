import {Component, Input} from '@angular/core';

@Component({
    selector: 'tab',
    styles: [`
    .pane{
      padding: 1em;
    }
  `],
    template: `
    <div [hidden]="!active" class="pane" #target>
      <tab-inner-dynamic [type]="class"></tab-inner-dynamic>
    </div>
  `
})

export class Tab {
    // Expression has changed after it was checked. Previous value: 'true'. Current value: 'false'.
    // <tab-inner-dynamic [type]="class"></tab-inner-dynamic>
    @Input('tabTitle') title: string;
    @Input() active:boolean = false;
    @Input() class;
}