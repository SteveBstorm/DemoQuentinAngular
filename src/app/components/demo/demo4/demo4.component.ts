import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss'],
  //providers : [FakeauthService]
})
export class Demo4Component implements OnInit {

  localIsConnected : boolean
  constructor(
    private monService : FakeauthService
  ) { }

  ngOnInit(): void {
    this.localIsConnected = this.monService.isConnected
  }

  login() {
    this.monService.login()
    this.localIsConnected = this.monService.isConnected

  }

  logout() {
    this.monService.logout()
    this.localIsConnected = this.monService.isConnected
  }
}
