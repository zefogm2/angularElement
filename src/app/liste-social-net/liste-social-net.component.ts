import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste-social-net',
  templateUrl: './liste-social-net.component.html',
  styleUrls: ['./liste-social-net.component.scss']
})
export class ListeSocialNetComponent implements OnInit {
  @Output() sortie=new EventEmitter();;
  constructor() { }
  public  listeSocialNetworks=[
    {id:0,lib:'google',url:'https://www.google.com' }
    ,{id:1,lib:'twitter',url:'https://www.twitter.com'}
    ,{id:2,lib:'facebook',url:'https://www.facebook.com'}
  ]
  ngOnInit(): void {
  }
  public changeSelect(event) {
    let i=event.target.value;
    this.sortie.emit(this.listeSocialNetworks[i]);
  }

}
