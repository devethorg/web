import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import Web3 from "web3";
import { Data, PageService } from './pageService.service';
declare let window:any;

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
    public web3: any;
    

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

    mmButtonCallback(event): void {

        let mmBtn: HTMLElement = event.target as HTMLButtonElement;
        const chainId = '0x' + (787).toString(16);
        mmBtn.innerHTML = '';
        const mmParam = {
            chainId: chainId,
            chainName: 'devETH',
            nativeCurrency: {
                name: 'devETH',
                symbol: 'dTH',
		        decimals: 18
            },
            rpcUrls: ['https://rpc.deveth.org'],
            blockExplorerUrls: ['https://explore.deveth.org/']
        }

        if (typeof window.ethereum === 'undefined') {
            mmBtn.innerHTML += 'Please install MetaMask!';
            return;
        }

        if (window.ethereum.chainId === chainId) {
          mmBtn.innerHTML += 'Already on the chain';
          return;
        }

        mmBtn.innerHTML += 'Adding...';
        window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [ mmParam ]
        }).then(res => {
            if (res === null) {
                mmBtn.innerHTML += 'Added to MetaMask';
            } else {
                mmBtn.innerHTML += 'An Error occured';
            }
        });
    }
}
