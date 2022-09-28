import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  etat : boolean

  private monTexte : string;

  get MonTexte() : string {
    return this.monTexte;
  }

  set MonTexte(value : string) {
    this.monTexte = value;
  }

  myprop : string = "http://www.google.be";

  constructor(
    private monService : FakeauthService
  ) {
    console.log("constructeur")
   }
  ngOnDestroy(): void {
    console.log("destroy")
  }

  ngOnInit(): void {
    this.etat = this.monService.isConnected

    console.log("on init")
   this.MonTexte = "toto"
  }

  ChangeValue() : void{
    this.MonTexte = "autre chose"
  }
}
