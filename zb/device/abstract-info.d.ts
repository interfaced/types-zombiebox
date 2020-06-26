import { Resolution } from './resolutions';
import IInfo from './interfaces/i-info';

export default abstract class AbstractInfo implements IInfo {
	constructor();
	abstract type(): string;
	abstract version(): string;
	abstract manufacturer(): string;
	abstract model(): string;
	abstract serialNumber(): string;
	abstract softwareVersion(): string;
	abstract hardwareVersion(): string;
	abstract osdResolutionType(): Resolution;
	abstract getPanelResolution(): Resolution;
	abstract getOSDResolution(): Resolution;
	locale(): string | null;
	protected abstract _getLocale(): string;
	protected _getResolutionsByScreenSize(width: number, height: number): Resolution[];
	protected _validateLocale(locale: string): boolean;
}

export const BCP_47_TAG_PATTERN: RegExp;
