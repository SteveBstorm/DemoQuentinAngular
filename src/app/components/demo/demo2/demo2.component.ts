import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  isvisible : boolean = true

  liste : string[] = ['pomme', 'poire', 'peche']

  nbr : number = 0
  constructor() { }

  ngOnInit(): void {
  }

  changeVisible() {
    this.isvisible = !this.isvisible
  }

}
