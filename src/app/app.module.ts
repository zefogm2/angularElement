import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialButtonComponent } from './social-button/social-button.component';
import { environment } from 'src/environments/environment';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    SocialButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents:[
    AppComponent,
    SocialButtonComponent
  ]
})
export class AppModule {
  constructor(private injector:Injector) {

  }
 ngDoBootstrap(app: ApplicationRef) {
    if (environment.production) {
      const socialButtonElement=createCustomElement(SocialButtonComponent,{injector:this.injector})
      customElements.define('social-button',socialButtonElement);
    } else {
      app.bootstrap(AppComponent);
    }
 }
}
