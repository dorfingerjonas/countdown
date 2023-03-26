import { Component, OnInit } from '@angular/core';
import { CountdownConfig } from '../app.component';
import { data } from '../../data/data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  private data: CountdownConfig = data;

  constructor() { }

  ngOnInit(): void {
  }

  public getData(): string[] {
    return Object.keys(this.data).filter(key => key !== '');
  }


}
