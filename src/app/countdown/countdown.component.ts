import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from '../../data/data';
import { Output, ParsedOutput } from '../app.component';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: [ './countdown.component.scss' ]
})
export class CountdownComponent implements OnInit {

  public output: Output | null;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router) {
    this.output = null;
  }

  public ngOnInit(): void {
    const date = data[this.route.snapshot.params['path'] || ''];

    let interval = setInterval(() => {
      if (date && date.getTime() > Date.now()) {
        this.output = this.calculateTimeDifference(date.getTime());
      } else {
        clearInterval(interval);
        this.output = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    }, 500);
  }

  private calculateTimeDifference(timestamp: number): Output {
    const timeRemaining = timestamp - Date.now();

    return {
      days: Math.floor((timeRemaining / (1000 * 60 * 60 * 24))),
      hours: Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000)
    };
  }

  public parseOutput(output: Output): ParsedOutput[] {
    return [
      {
        value: output.days,
        unit: 'Tag' + (output.days === 1 ? '' : 'e')
      },
      {
        value: output.hours,
        unit: 'Stunde' + (output.hours === 1 ? '' : 'n')
      },
      {
        value: output.minutes,
        unit: 'Minute' + (output.minutes === 1 ? '' : 'n')
      },
      {
        value: output.seconds,
        unit: 'Sekunde' + (output.seconds === 1 ? '' : 'n')
      }
    ];
  }

  public redirect(): void {
    this.router.navigate([ 'nav' ]);
  }
}
