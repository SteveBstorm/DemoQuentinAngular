import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  montexte : string = "SaLuT tOUt le MOndE"

  nombre : number = 10.472

  madate : Date = new Date()

  temps : number = 258
  constructor() { }

  ngOnInit(): void {
  }

}
