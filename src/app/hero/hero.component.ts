import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  url="https://assets.jassets.com/assets/images/retaillabs/2019/3/15/c1daf5ce-4188-44e2-9ff8-92a3af38b09a1552670809926-desktop-home.webp";

  constructor() { }

  ngOnInit() {
  }

}
