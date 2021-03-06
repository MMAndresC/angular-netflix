import { FilmsInterface } from './../../models/netflix.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() public films!: FilmsInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
