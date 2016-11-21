import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {App} from './app.component';
import {Tabs} from './tab/tabs.component';
import {Tab} from './tab/tab.component';
import {TabInnerDynamic} from './tab/tab.inner.dynamic.component';
import {MyApp2} from './my.app.2.component';
import {MyApp3} from './my.app.3.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        App,
        Tabs,
        Tab,
        TabInnerDynamic,
        MyApp2,
        MyApp3
    ],
    entryComponents: [MyApp2, MyApp3],
    bootstrap: [App]
})

export class AppModule {
}