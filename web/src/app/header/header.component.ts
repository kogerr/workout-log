import {Component, OnInit, Input} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {filter} from 'rxjs/operators';

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
    cursor = 0;

    menuItems = [
        {path: '/calendar', image: 'calendar-icon.svg'},
        {path: '/statistics', image: 'statistics-icon.svg'},
        {path: '/workout-editor', image: 'plus-icon.svg'}
    ];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.calculateSizes();
        this.bindCursor();
    }

    calculateSizes(): void {
        this.gapSize = 100 / (this.slots * (+this.gapRatio + 1) + 1);
        this.slotSize = this.gapSize * this.gapRatio;
    }

    getColumns(): any {
        return {'grid-template-columns': `repeat(${this.slots}, ${this.slotSize}vw)`};
    }

    bindCursor(): void {
        this.router.events.pipe(filter(e => e instanceof NavigationStart))
            .subscribe(e => {
                let selectedItem = this.menuItems.findIndex(item => item.path === (e as NavigationStart).url);
                selectedItem = selectedItem >= 0 ? selectedItem : 0;
                this.cursor = this.slots - this.menuItems.length + selectedItem;
            });
    }

}
