# Polymer 2.x decorators

I am trying to figure out how the Polymer 2.x typescript decorators get generated?

## Install

    bower install
    npm i -D reflect-metadata

## Compile

    tsc

## Use decorators.js

    import {customElement, property, query, queryAll, observe} from 'decorators.js';

    @customElement('test-element')
    export class TestElement extends Polymer.Element {

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
