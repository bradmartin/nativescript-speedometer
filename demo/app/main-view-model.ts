import {Observable} from "data/observable";
import {Page} from 'ui/page';
import {Speedometer} from 'nativescript-speedometer';

export class HelloWorldModel extends Observable {

    private _Meter: Speedometer;

    constructor(mainPage: Page) {
        super();
        this._Meter = mainPage.getViewById('meter');
    }

    public startEngine() {
        this._Meter.speedTo(2, 100);
    }

    public stop() {
        this._Meter.speedTo(0);
    }

    public goTo50() {
        this._Meter.speedTo(50);
    }

    public goTo82() {
        this._Meter.speedTo(82);
    }

    public toggleTremble() {
        let tremble = this._Meter.isWithTremble();
        !tremble ? this._Meter.setWithTremble(true) : this._Meter.setWithTremble(false);
    }


    public toggleColors() {
        this._Meter.setCenterCircleColor('#3489db');
        this._Meter.setIndicatorColor('#fff000');
        this._Meter.setLowSpeedColor('#FF4081');
        this._Meter.setMediumSpeedColor('#673AB7');
        this._Meter.setHighSpeedColor('#FFEB3B');
    }

}