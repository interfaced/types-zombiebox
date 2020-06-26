import IViewPort from './interfaces/i-view-port';
import Rect from '../geometry/rect';
import { AspectRatio } from './aspect-ratio/aspect-ratio';
import { ResolutionInfoItem } from "./resolutions";

export default abstract class AbstractViewPort implements IViewPort {
	constructor(panelResolution: ResolutionInfoItem, appResolution: ResolutionInfoItem);
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
	protected _panelResolution: ResolutionInfoItem;
	protected _appResolution: ResolutionInfoItem;
	protected _fullscreenRect: Rect;
	protected _fullScreenState: boolean;
	protected _aspectRatio: AspectRatio | null;
	protected _indexOfRatioBunch(bunch: AspectRatio[], ratio: AspectRatio): number;
	protected _initDefaultAspectRatio(): void;
	protected _findNextSupportedRatio(index: number, bunch: AspectRatio[]): AspectRatio | null;
}
