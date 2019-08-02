import { Proportion } from './proportion';

export class AspectRatio {
  protected _proportion: Proportion;
  protected _transferring: Transferring;
  constructor(opt_proportion?: Proportion, opt_transferring?: Transferring);
  public setProportion(proportion: Proportion): void;
  public getProportion(): Proportion;
  public setTransferring(transferring: Transferring): void;
  public getTransferring(): Transferring;
  public checkProportionChangesFrom(proportion?: Proportion): boolean;
  public checkTransferringChangesFrom(transferring?: Transferring): void;
  public eq(that: AspectRatio): boolean;
  public explain(): string;
  public static explainProportion(proportion: Proportion): string;
  public static explainTransferring(transferring: Transferring): string;
}

export enum Transferring {
  KEEP = 'KEEP',
  AUTO = 'AUTO',
  LETTERBOX = 'LETTERBOX',
  CROP = 'CROP',
  STRETCH = 'STRETCH',
}
