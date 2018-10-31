import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() slots: number;
  @Input() gapRatio: number;
  gapSize: number;
  slotSize: number;
  columns: string;

  menuItems = [
    {path: 'calendar', image: 'calendar-icon.svg'},
    {path: 'statistics', image: 'statistics-icon.svg'},
    {path: 'add', image: 'plus-icon.svg'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.calculateSizes();
  }

  calculateSizes(): void {
    console.log(this.slots, this.gapRatio);
    console.log(this.slots * (+this.gapRatio + 1) + 1);
    this.gapSize = 100 / (this.slots * (+this.gapRatio + 1) + 1);
    this.slotSize = this.gapSize * this.gapRatio;
    this.buildColumns();
  }

  buildColumns(): void {
    let columns = '';
    for (let i = 0; i < this.slots; i++) {
      columns += this.slotSize + 'vw ';
    }
    this.columns = columns.trimRight();
  }

}
