import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  @Input() mailHome:string
  @Output() onLogout = new EventEmitter()
  displayFrame:boolean = true
  logout(){
    this.onLogout.emit();
  }
}