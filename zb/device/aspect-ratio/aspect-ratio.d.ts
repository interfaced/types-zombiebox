import { Proportion } from './proportion';

export class AspectRatio {
	protected _proportion: Proportion;
	protected _transferring: Transferring;
	constructor(proportion?: Proportion, transferring?: Transferring);
	setProportion(proportion: Proportion): void;
	getProportion(): Proportion;
	setTransferring(transferring: Transferring): void;
	getTransferring(): Transferring;
	checkProportionChangesFrom(proportion?: Proportion): boolean;
	checkTransferringChangesFrom(transferring?: Transferring): void;
	eq(that: AspectRatio): boolean;
	explain(): string;
	static explainProportion(proportion: Proportion): string;
	static explainTransferring(transferring: Transferring): string;
}

export enum Transferring {
	KEEP = 'KEEP',
	AUTO = 'AUTO',
	LETTERBOX = 'LETTERBOX',
	CROP = 'CROP',
	STRETCH = 'STRETCH',
}
