import {JsonPipe} from '@angular/common';
import {Component, effect, input, signal, viewChild, viewChildren} from '@angular/core';
import {SignalDecoratorsChildComponent} from './signal-decorators-child/signal-decorators-child.component';

@Component({
    selector: 'labs-signal-decorators',
    standalone: true,
    imports: [
        SignalDecoratorsChildComponent,
        JsonPipe
    ],
    templateUrl: './signal-decorators.component.html',
    styleUrl: './signal-decorators.component.scss'
})
export default class SignalDecoratorsComponent {
    pageId = input.required<string>({alias: 'id'});
    viewChild = viewChild.required<SignalDecoratorsChildComponent>("bubu");
    viewChildren = viewChildren(SignalDecoratorsChildComponent);
    counter = 2;
    items = signal([]);

    constructor() {
        effect(() => {
            console.log(this.viewChild())
            console.log(this.viewChildren())
        })
    }
}
