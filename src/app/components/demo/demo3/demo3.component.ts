import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  texte : string = "Blabla venant de démo3"


  ValeurVenantDeEnfant : string
  constructor() { }

  ngOnInit(): void {
  }

  reception(valeur : string) {
    this.ValeurVenantDeEnfant = valeur
  }

}
