/**********************************************************************************
 * (c) 2016, Brad Martin.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           bradwaynemartin@gmail.com
 **********************************************************************************/
"use strict";


import {PropertyChangeData} from "ui/core/dependency-observable";
import {PropertyMetadata} from "ui/core/proxy";
import {Color} from "color";
import common = require("./speedometer-common");


function onMeterWidthPropertyChanged(data: PropertyChangeData) {
    var meter = <Speedometer>data.object;
    if (!meter.android) return;
    meter.android.setSpeedometerWidth(data.newValue);
}

function onTremblePropertyChanged(data: PropertyChangeData) {
    var meter = <Speedometer>data.object;
    if (!meter.android) return;
    meter.android.setWithTremble(data.newValue);
}


function onMaxSpeedPropertyChanged(data: PropertyChangeData) {
    let meter = <Speedometer>data.object;
    if (!meter.android) return;
    meter.android.setMaxSpeed(data.newValue);
}

function onIndicatorColorPropertyChanged(data: PropertyChangeData) {
    let meter = <Speedometer>data.object;
    if (!meter.android) return;
    meter.android.setIndicatorColor(data.newValue);
}

function onCenterCircleColorPropertyChanged(data: PropertyChangeData) {
    let meter = <Speedometer>data.object;
    if (!meter.android) return;
    meter.android.setCenterCircleColor(data.newValue);
}


function onMarkColorPropertyChanged(data: PropertyChangeData) {
    let meter = <Speedometer>data.object;
    if (!meter.android) return;
    meter.android.setMarkColor(data.newValue);
}

function onLowSpeedColorPropertyChanged(data: PropertyChangeData) {
    let meter = <Speedometer>data.object;
    if (!meter.android) return;
    meter.android.setLowSpeedColor(data.newValue);
}

function onMediumSpeedColorPropertyChanged(data: PropertyChangeData) {
    let meter = <Speedometer>data.object;
    if (!meter.android) return;
    meter.android.setMediumSpeedColor(data.newValue);
}

function onHighSpeedColorPropertyChanged(data: PropertyChangeData) {
    let meter = <Speedometer>data.object;
    if (!meter.android) return;
    meter.android.setHighSpeedColor(data.newValue);
}

function onTextColorPropertyChanged(data: PropertyChangeData) {
    let meter = <Speedometer>data.object;
    if (!meter.android) return;
    meter.android.setTextColor(data.newValue);
}


// register the setNativeValue callbacks
(<PropertyMetadata>common.Speedometer.meterWidthProperty.metadata).onSetNativeValue = onMeterWidthPropertyChanged;
(<PropertyMetadata>common.Speedometer.trembleProperty.metadata).onSetNativeValue = onTremblePropertyChanged;
(<PropertyMetadata>common.Speedometer.maxSpeedProperty.metadata).onSetNativeValue = onMaxSpeedPropertyChanged;
(<PropertyMetadata>common.Speedometer.indicatorColorProperty.metadata).onSetNativeValue = onIndicatorColorPropertyChanged;
(<PropertyMetadata>common.Speedometer.centerCircleColorProperty.metadata).onSetNativeValue = onCenterCircleColorPropertyChanged;
(<PropertyMetadata>common.Speedometer.markColorProperty.metadata).onSetNativeValue = onMarkColorPropertyChanged;
(<PropertyMetadata>common.Speedometer.lowSpeedColorProperty.metadata).onSetNativeValue = onLowSpeedColorPropertyChanged;
(<PropertyMetadata>common.Speedometer.mediumSpeedColorProperty.metadata).onSetNativeValue = onMediumSpeedColorPropertyChanged;
(<PropertyMetadata>common.Speedometer.highSpeedColorProperty.metadata).onSetNativeValue = onHighSpeedColorPropertyChanged;
(<PropertyMetadata>common.Speedometer.textColorProperty.metadata).onSetNativeValue = onTextColorPropertyChanged;


const SpeedView = com.github.anastr.speedviewlib.SpeedView;
declare var com, android: any;

export class Speedometer extends common.Speedometer {
    private _android: any; /// SpeedView
    private _androidViewId: number;
    private _meterWidth: number;
    private _tremble: boolean;
    private _maxSpeed: number;
    private _indicatorColor: string;
    private _centerCircleColor: string;
    private _markColor: string;
    private _lowSpeedColor: string;
    private _mediumSpeedColor: string;
    private _highSpeedColor: string;
    private _textColor: string;


    get android() {
        return this._android;
    }

    get _nativeView() {
        return this._android;
    }


    set meterWidth(value: number) {
        this._meterWidth = value;
        if (this._android)
            this._android.setSpeedometerWidth(value);
    }

    set tremble(value: boolean) {
        this._tremble = value;
        if (this._android)
            this._android.setWithTremble(value);
    }
    set maxSpeed(value: number) {
        this._maxSpeed = value;
        if (this._android)
            this._android.setMaxSpeed(value);
    }

    set indicatorColor(value: string) {
        this._indicatorColor = value;
        if (this._android)
            this._android.setIndicatorColor(value);
    }

    set centerCircleColor(value: string) {
        this._centerCircleColor = value;
        if (this._android)
            this._android.setCenterCircleColor(value);
    }

    set markColor(value: string) {
        this._markColor = value;
        if (this._android)
            this._android.setMarkColor(value);
    }

    set lowSpeedColor(value: string) {
        this._lowSpeedColor = value;
        if (this._android)
            this._android.setLowSpeedColor(value);
    }

    set mediumSpeedColor(value: string) {
        this._mediumSpeedColor = value;
        if (this._android)
            this._android.setMediumSpeedColor(value);
    }

    set highSpeedColor(value: string) {
        this._highSpeedColor = value;
        if (this._android)
            this._android.setHighSpeedColor(value);
    }

    set textColor(value: string) {
        this._textColor = value;
        if (this._android)
            this._android.setTextColor(value);
    }



    public _createUI() {

        this._android = new SpeedView(this._context, null);

        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);

        if (this._meterWidth)
            this.meterWidth = this._meterWidth;
        // this.setSpeedometerWidth(this.meterWidth);

        if (this._tremble)
            this.tremble = this._tremble;
        // this.setWithTremble(this.tremble);

        if (this._maxSpeed)
            this.maxSpeed = this._maxSpeed;
        // this.setMaxSpeed(this.maxSpeed);

        if (this._indicatorColor)
            this.indicatorColor = this._indicatorColor;
        // this.setIndicatorColor(this.indicatorColor);

        if (this._centerCircleColor)
            this.centerCircleColor = this._centerCircleColor;
        // this.setCenterCircleColor(this.centerCircleColor);

        if (this._markColor)
            this.markColor = this._markColor;
        // this.setMarkColor(this.markColor);

        if (this._lowSpeedColor)
            this.lowSpeedColor = this._lowSpeedColor;
        // this.setLowSpeedColor(this.lowSpeedColor);

        if (this._mediumSpeedColor)
            this.mediumSpeedColor = this._mediumSpeedColor;
        // this.setMediumSpeedColor(this.mediumSpeedColor);

        if (this._highSpeedColor)
            this.highSpeedColor = this._highSpeedColor;
        // this.setHighSpeedColor(this.highSpeedColor);

        if (this._textColor)
            this.textColor = this._textColor;
        // this.setTextColor(this.textColor);
    }


    public speedPercentTo(percent: number) {
        percent = (percent > 100) ? 100 : (percent < 0) ? 0 : percent;
        this.speedTo(percent * this._android.maxSpeed / 100);
    }

    public speedTo(speed: number, duration: number = 2000) {
        this._android.speedTo(speed, duration);
    }

    public getPercentSpeed(): number {
        let speed = this._android.getPercentSpeed();
        return speed;
    }

    public getSpeedometerWidth() {
        let width = this._android.getSpeedometerWidth();
        return width;
    }

    public setSpeedometerWidth(speedometerWidth: number) {
        this._android.setSpeedometerWidth(speedometerWidth);
    }

    public isWithTremble() {
        return this._android.isWithTremble();
    }

    public setWithTremble(withTremble: boolean) {
        this._android.setWithTremble(withTremble);
    }

    public getSpeed() {
        let speed = this._android.getSpeed();
        return speed;
    }

    public getMaxSpeed() {
        let speed = this._android.getMaxSpeed();
        return speed;
    }

    public setMaxSpeed(maxSpeed: number) {
        this._android.setMaxSpeed(maxSpeed);
    }

    public getSpeedTextSize() {
        return this._android.getSpeedTextSize();
    }

    public setSpeedTextSize(speedTextSize: number) {
        this._android.setSpeedTextSize(speedTextSize);
    }


    public getIndicatorColor() {
        let color = this._android.getIndicatorColor();
        return color;
    }

    public setIndicatorColor(color: string) {
        this._android.setIndicatorColor(new Color(color).android);
    }

    public getCenterCircleColor() {
        let color = this._android.getCenterCircleColor();
        return color;
    }

    public setCenterCircleColor(color: string) {
        this._android.setCenterCircleColor(new Color(color).android);
    }

    public getMarkColor() {
        let color = this._android.getMarkColor();
        return color;
    }

    public setMarkColor(markColor: string) {
        this._android.setMarkColor(new Color(markColor).android);
    }

    public getLowSpeedColor() {
        let color = this._android.getLowSpeedColor();
        return color;
    }

    public setLowSpeedColor(lowSpeedColor: string) {
        this._android.setLowSpeedColor(new Color(lowSpeedColor).android);
    }

    public getMediumSpeedColor() {
        return this._android.getMediumSpeedColor();
    }

    /**
     * Sets the medium speed gauge color
     */
    public setMediumSpeedColor(mediumSpeedColor: string) {
        this._android.setMediumSpeedColor(new Color(mediumSpeedColor).android);
    }

    public getHighSpeedColor() {
        return this._android.getHighSpeedColor();
    }

    public setHighSpeedColor(highSpeedColor: string) {
        this._android.setHighSpeedColor(new Color(highSpeedColor).android);
    }

    public getTextColor() {
        return this._android.getTextColor();
    }

    public setTextColor(textColor: string) {
        this._android.setTextColor(new Color(textColor).android);
    }


}
