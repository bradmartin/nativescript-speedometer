/// <reference path="speedometer-common.d.ts" />
import common = require("./speedometer-common");
export declare class Speedometer extends common.Speedometer {
    private _android;
    android: any;
    _nativeView: any;
    _createUI(): void;
    speedPercentTo(percent: number): void;
    speedTo(speed: number, duration?: number): void;
    getPercentSpeed(): number;
    getSpeedometerWidth(): any;
    setSpeedometerWidth(speedometerWidth: number): void;
    isWithTremble(): any;
    setWithTremble(withTremble: boolean): void;
    getSpeed(): any;
    getMaxSpeed(): any;
    setMaxSpeed(maxSpeed: number): void;
    getSpeedTextSize(): any;
    setSpeedTextSize(speedTextSize: number): void;
    getIndicatorColor(): any;
    setIndicatorColor(color: string): void;
    getCenterCircleColor(): any;
    setCenterCircleColor(color: string): void;
    getMarkColor(): any;
    setMarkColor(markColor: string): void;
    getLowSpeedColor(): any;
    setLowSpeedColor(lowSpeedColor: string): void;
    getMediumSpeedColor(): any;
    setMediumSpeedColor(mediumSpeedColor: string): void;
    getHighSpeedColor(): any;
    setHighSpeedColor(highSpeedColor: string): void;
    getTextColor(): any;
    setTextColor(textColor: string): void;
}
