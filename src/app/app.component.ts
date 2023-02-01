import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  private readonly imageIds: number[] = [ 1072179, 1292115, 4406222, 189349 ];

  constructor() {
    const randomImage = this.imageIds[Math.floor(Math.random() * this.imageIds.length)];

    document.body.style.backgroundImage = `url("https://images.pexels.com/photos/${ randomImage }/pexels-photo-${ randomImage }.jpeg?cs=tinysrgb&w=1920&h=1080")`;
  }

}

export interface CountdownConfig {
  [key: string]: Date;
}

export interface ParsedOutput {
  value: number;
  unit: string;
}

export interface Output {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
