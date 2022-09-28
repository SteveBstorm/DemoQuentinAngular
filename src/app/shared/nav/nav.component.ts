import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() listeLien : Link[]
  constructor() { }

  ngOnInit(): void {

  }

  setVisible(index : number){
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }
}


export interface Link {
  url? : string
  title : string
  children? : Link[]
  isChildrenVisible? : boolean
}
