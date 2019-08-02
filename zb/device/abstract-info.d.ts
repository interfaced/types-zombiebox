import { Resolution } from './resolutions';
import IInfo from './interfaces/i-info';

export default abstract class AbstractInfo implements IInfo {
  protected constructor();
  public abstract type(): string;
  public abstract version(): string;
  public abstract manufacturer(): string;
  public abstract model(): string;
  public abstract serialNumber(): string;
  public abstract softwareVersion(): string;
  public abstract hardwareVersion(): string;
  public abstract osdResolutionType(): Resolution;
  public locale(): string | null;
  protected abstract _getLocale(): string;
  protected _getResolutionsByScreenSize(width: number, height: number): Resolution[];
  protected _validateLocale(locale: string): boolean;
}

export const BCP_47_TAG_PATTERN: RegExp;
