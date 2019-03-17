import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import {JsonService} from '../json.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  filterData={
    category:"",
    color:"",
    size:""
  }

  constructor(private jsonService : JsonService) {

   }

  ngOnInit() {
    
   }
  myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  
  filter(key,val){

    this.filterData[key] = val;
    console.log(key,val);
    this.jsonService.setData(this.filterData);
  }

}
