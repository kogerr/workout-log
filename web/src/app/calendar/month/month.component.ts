import { Component, Input, HostBinding } from '@angular/core';
import { Month } from '../month';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {
  // @Input() year: number;
  @Input() content: Month;
  // @HostBinding('display') display = this.days ? 'grid' : 'none';

  /*getMonthName(): string {
    return monthNames[this.month];
  }

  getOffset(): number {
    return (new Date(this.year, this.month, 0)).getDay();
  }*/
  getOffset(): number {
    console.log(this.content);
    return (new Date(this.content.year, this.content.monthNumber, 0)).getDay();
  }

}
