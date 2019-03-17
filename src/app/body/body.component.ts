import { Component, OnInit } from '@angular/core';
import {JsonService} from '../json.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {



  constructor(private _shirts:JsonService) {
    this.products=this._shirts.getItems();
    this._shirts.changeData.subscribe(data => {
      this.products = data;
    })
   }

  public products=[];
  public color=[];
    ngOnInit() {
  
  

    }
  
}
