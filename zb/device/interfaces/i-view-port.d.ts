import { AspectRatio } from '../aspect-ratio/aspect-ratio';
import Rect from '../../geometry/rect';

export default interface IViewPort {
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
  updateViewPort(): void;
  isAspectRatioSupported(ratio: AspectRatio): boolean;
  hasAspectRatioFeature(): boolean;
  hasAreaChangeFeature(): boolean;
}
