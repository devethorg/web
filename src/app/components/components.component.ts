import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    // data : Date = new Date();

    // page = 4;
    // page1 = 5;
    // page2 = 3;
    // focus;
    // focus1;
    // focus2;

    // date: {year: number, month: number};
    // model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    constructor( private renderer : Renderer2, config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
    }
    // isWeekend(date: NgbDateStruct) {
    //     const d = new Date(date.year, date.month - 1, date.day);
    //     return d.getDay() === 0 || d.getDay() === 6;
    // }

    // isDisabled(date: NgbDateStruct, current: {month: number}) {
    //     return date.month !== current.month;
    // }

    ngOnInit() {
        const rellaxHeader = new Rellax('.rellax-header');

        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }

    // scrollToElement($element): void {
    //     console.log($element);
    //     $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    // }

    ngOnDestroy(){
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
