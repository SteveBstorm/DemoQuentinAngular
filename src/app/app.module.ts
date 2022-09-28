import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { TotimePipe } from './shared/pipes/totime.pipe';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { EnfantComponent } from './components/demo/demo3/enfant/enfant.component';
import { NavComponent } from './shared/nav/nav.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { FakeauthService } from './services/fakeauth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo1Component,
    TotimePipe,
    Demo2Component,
    Demo3Component,
    EnfantComponent,
    NavComponent,
    Demo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
