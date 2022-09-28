import { Component } from '@angular/core';
import { Link } from './shared/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoQuentin';

  lien : Link[] = [
    {title : "Demos", children : [
      {title : "Pipes", url : "home"},
      {title : "BIndings", url : "demo1"},
      {title : "Directives", url : "demo2"},
      {title : "Input/Output", url : "demo3"},
      {title : "Service", url : "demo4"},
    ] }
  ]
}
