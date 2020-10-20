import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.scss']
})
export class PonyComponent implements OnInit {

  constructor() { }
  public colors =[
    "green","purple","orange","blue","yellow"
  ]

  public randomColor(min,max) {
    min=Math.ceil(min);
    max=Math.floor(max);
    return this.colors[Math.floor(Math.random()*(max-min+1))+min]
  }
  /*public changeColor() {
    //this.ponies[0].color=this.randomColor(0, this.colors.length -1);
    const pony=this.ponies[0];
    this.ponies[0]={...pony,color:this.randomColor(0, this.colors.length -1)}
  }*/
  ngOnInit(): void {
    
  }

}
