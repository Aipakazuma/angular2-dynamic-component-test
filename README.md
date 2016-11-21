# Angular2 dynamic component(test)


## What is this repository.

Angular2（2016/11~）を使って、コンポーネントから他コンポーネントを動的にcreateするのをテストしたかったので試した。


## How.

```sh
$ git cloen ${this repository url}
$ cd angular2-dynamic-component/
$ npm install
```


## ハマったこと


### 動的に呼び出すってどんなよ？

http://stackoverflow.com/questions/36325212/angular-2-dynamic-tabs-with-user-click-chosen-components/36325468#36325468

↑を参考にしたソースコードが、`~/src/dynamic-test`の中に入っています。

こちらを参考にして、コードをタブ機能と一緒にやってみました。

tabsとtabを呼び出す前に動的に呼び出すコンポーネントを指定して、tabタグをループします。

tabからTabInnerDynamicのcomponentを呼び出して、TabInnerDynamicから必要なcomponentを動的に呼び出ししています。


### `Expression has changed after it was checked. Previous value: 'true'. Current value: 'false'.`


もういや！これで3時間も時間くった。

https://github.com/angular/angular/issues/12858


よくわからないが、ライフサイクル中に値を変更されたら困るらしい。


今回は、tabsからtabのプロパティを変更しようとしたら、怒られてこのエラーが発生している。


ライフサイクルの順序で色々試してみましたが、うまくいきませんでした。
http://blog.yuhiisk.com/archive/2016/05/02/angular2-lifecycle-hooks.html


で、いまのところうまくいったのが、なんと`setTimeout`...（°ω°


大丈夫じゃないと思うが、とりあえずfixとします。