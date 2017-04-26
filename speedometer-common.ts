import {View} from "ui/core/view";
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";


var meterWidthProperty = new Property(
    "meterWidth",
    "Speedometer",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var trembleProperty = new Property(
    "tremble",
    "Speedometer",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var maxSpeedProperty = new Property(
    "maxSpeed",
    "Speedometer",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var indicatorColorProperty = new Property(
    "indicatorColor",
    "Speedometer",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var centerCircleColorProperty = new Property(
    "centerCircleColor",
    "Speedometer",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var markColorProperty = new Property(
    "markColor",
    "Speedometer",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);


var lowSpeedColorProperty = new Property(
    "lowSpeedColor",
    "Speedometer",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var mediumSpeedColorProperty = new Property(
    "mediumSpeedColor",
    "Speedometer",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var highSpeedColorProperty = new Property(
    "highSpeedColor",
    "Speedometer",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var textColorProperty = new Property(
    "textColor",
    "Speedometer",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

export class Speedometer extends View {

    public static meterWidthProperty = meterWidthProperty;
    public static trembleProperty = trembleProperty;
    public static maxSpeedProperty = maxSpeedProperty;
    public static indicatorColorProperty = indicatorColorProperty;
    public static centerCircleColorProperty = centerCircleColorProperty;
    public static markColorProperty = markColorProperty;
    public static lowSpeedColorProperty = lowSpeedColorProperty;
    public static mediumSpeedColorProperty = mediumSpeedColorProperty;
    public static highSpeedColorProperty = highSpeedColorProperty;
    public static textColorProperty = textColorProperty;

    constructor() {
        super();
    }

    get meterWidth(): number {
        return this._getValue(Speedometer.meterWidthProperty);
    }

    set meterWidth(value: number) {
        this._setValue(Speedometer.meterWidthProperty, value);
    }

    get tremble(): boolean {
        return this._getValue(Speedometer.trembleProperty);
    }

    set tremble(value: boolean) {
        this._setValue(Speedometer.trembleProperty, value);
    }

    get maxSpeed(): number {
        return this._getValue(Speedometer.maxSpeedProperty);
    }

    set maxSpeed(value: number) {
        this._setValue(Speedometer.maxSpeedProperty, value);
    }

    get indicatorColor(): string {
        return this._getValue(Speedometer.indicatorColorProperty);
    }

    set indicatorColor(value: string) {
        this._setValue(Speedometer.indicatorColorProperty, value);
    }

    get centerCircleColor(): string {
        return this._getValue(Speedometer.centerCircleColorProperty);
    }

    set centerCircleColor(value: string) {
        this._setValue(Speedometer.centerCircleColorProperty, value);
    }

    get markColor(): string {
        return this._getValue(Speedometer.markColorProperty);
    }

    set markColor(value: string) {
        this._setValue(Speedometer.markColorProperty, value);
    }

    get lowSpeedColor(): string {
        return this._getValue(Speedometer.lowSpeedColorProperty);
    }

    set lowSpeedColor(value: string) {
        this._setValue(Speedometer.lowSpeedColorProperty, value);
    }

    get mediumSpeedColor(): string {
        return this._getValue(Speedometer.mediumSpeedColorProperty);
    }

    set mediumSpeedColor(value: string) {
        this._setValue(Speedometer.mediumSpeedColorProperty, value);
    }

    get highSpeedColor(): string {
        return this._getValue(Speedometer.highSpeedColorProperty);
    }

    set highSpeedColor(value: string) {
        this._setValue(Speedometer.highSpeedColorProperty, value);
    }

    get textColor(): string {
        return this._getValue(Speedometer.textColorProperty);
    }

    set textColor(value: string) {
        this._setValue(Speedometer.textColorProperty, value);
    }


}