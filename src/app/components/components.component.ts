import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { Data, PageService } from './pageService.service';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `],
    providers: [PageService]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    public dataObj: Data[] = [];

    constructor(private pageService : PageService , private renderer : Renderer2, config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
    }

    ngOnInit() {
        const rellaxHeader = new Rellax('.rellax-header');

        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        this.pageService.getJSON().subscribe(data => {
            this.dataObj = data
        });
    }

    ngOnDestroy(){
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
