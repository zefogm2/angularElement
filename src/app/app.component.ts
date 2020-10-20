import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularElement';
  socNet=null;
  public modif(event) {
    console.log("event recu : ",event);
    this.socNet=event;
  }
}
