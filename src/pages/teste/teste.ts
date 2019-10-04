import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-teste',
    templateUrl: 'teste.html'
})

export class Teste {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log('opapaa')
    }
}