import { Component } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-forms';
  public stock: Stock;

  constructor(){
    this.stock = new Stock('test','',0,0);
  }
}
