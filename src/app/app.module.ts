import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialButtonComponent } from './social-button/social-button.component';
import { environment } from 'src/environments/environment';
import { createCustomElement } from '@angular/elements';
import { PonyComponent } from './pony/pony.component';
import { ListeSocialNetComponent } from './liste-social-net/liste-social-net.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialButtonComponent,
    PonyComponent,
    ListeSocialNetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents:[
    AppComponent,
    SocialButtonComponent,
    ListeSocialNetComponent
  ]
})
export class AppModule {
  constructor(private injector:Injector) {

  }
 ngDoBootstrap(app: ApplicationRef) {
    if (environment.production) {
      const socialButtonElement=createCustomElement(SocialButtonComponent,{injector:this.injector})
      customElements.define('social-button',socialButtonElement);
      const listeSocialNetElement=createCustomElement(ListeSocialNetComponent,{injector:this.injector})
      customElements.define('liste-social-networks',listeSocialNetElement);
    } else {
      app.bootstrap(AppComponent);
    }
 }
}
