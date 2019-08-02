import IViewPort from './interfaces/i-view-port';
import Rect from '../geometry/rect';
import { AspectRatio } from './aspect-ratio/aspect-ratio';

export default abstract class AbstractViewPort implements IViewPort {
  protected constructor(containerRect: Rect);
  public abstract updateViewPort(): void;
  public abstract isAspectRatioSupported(ratio: AspectRatio): boolean;
  public abstract hasAspectRatioFeature(): boolean;
  public abstract hasAreaChangeFeature(): boolean;
  public setAspectRatio(ratio: AspectRatio): void;
  public getAspectRatio(): AspectRatio | null;
  public toggleAspectRatio(bunch: AspectRatio[]): void;
  public setArea(rect: Rect);
  public getArea(): Rect | null;
  public getCurrentArea(): Rect;
  public setFullScreen(state: boolean): void;
  public getFullScreen(): boolean;
  public getFullScreenArea(): Rect;
  public isFullScreen(): boolean;
  protected _initDefaultAspectRatio(): void;
  protected _indexOfRatioBunch(bunch: AspectRatio[], ratio: AspectRatio): number;
  protected _findNextSupportedRatio(index: number, bunch: AspectRatio[]): AspectRatio | null;
}
