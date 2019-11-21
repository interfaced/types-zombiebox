import IViewPort from './interfaces/i-view-port';
import Rect from '../geometry/rect';
import { AspectRatio } from './aspect-ratio/aspect-ratio';

export default abstract class AbstractViewPort implements IViewPort {
  constructor(containerRect: Rect);
  abstract updateViewPort(): void;
  abstract isAspectRatioSupported(ratio: AspectRatio): boolean;
  abstract hasAspectRatioFeature(): boolean;
  abstract hasAreaChangeFeature(): boolean;
  setAspectRatio(ratio: AspectRatio): void;
  getAspectRatio(): AspectRatio | null;
  toggleAspectRatio(bunch: AspectRatio[]): void;
  setArea(rect: Rect);
  getArea(): Rect | null;
  getCurrentArea(): Rect;
  setFullScreen(state: boolean): void;
  getFullScreen(): boolean;
  getFullScreenArea(): Rect;
  isFullScreen(): boolean;
  protected _initDefaultAspectRatio(): void;
  protected _indexOfRatioBunch(bunch: AspectRatio[], ratio: AspectRatio): number;
  protected _findNextSupportedRatio(index: number, bunch: AspectRatio[]): AspectRatio | null;
}
