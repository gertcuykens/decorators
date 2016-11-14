/// <amd-module name="hello-world"/>

import {customElement, property, query, queryAll, observe} from 'decorators';

@customElement('hello-world')
export class HelloWorld extends Polymer.Element {
    
    constructor() {
        super()
        const t = document.querySelector('template') as HTMLTemplateElement
        if (t == null) return;
        const instance = t.content.cloneNode(true)
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.appendChild(instance)
    }

    @property({notify: true})
    aNum: number = 42;

    @property({notify: true})
    aString: string = 'yes';

    @property()
    aBool: boolean = true;

    lastNumChange: number;

    lastMultiChange: any[];

    @query('#num')
    numDiv: HTMLDivElement;

    @queryAll('div')
    divs: HTMLInputElement[];

    @observe('aNum')
    private _aNumChanged(newNum: number) {
        this.lastNumChange = newNum;
    }

    @observe(['aNum', 'aString'])
    private _numStringChanged(newNum: number, newString: string) {
        this.lastMultiChange = [newNum, newString];
    }

}