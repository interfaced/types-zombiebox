import AbstractViewPort from '../abstract-view-port';
import { AspectRatio } from '../aspect-ratio/aspect-ratio';
import Rect from '../../geometry/rect';
import { Proportion } from "../aspect-ratio/proportion";
import { ResolutionInfoItem } from "../resolutions";

export default class HTML5ViewPort extends AbstractViewPort {
	protected _videoInfo: {
		width: number;
		height: number;
	};
	constructor(panelResolution: ResolutionInfoItem, appResolution: ResolutionInfoItem, videoContainer: HTMLElement, videoObject: HTMLVideoElement);
	protected _videoContainer: HTMLDivElement;
	protected _video: HTMLVideoElement;
	protected _CSSVendorPrefix: string;
	updateViewPort(): void;
	isAspectRatioSupported(ratio: AspectRatio): boolean;
	hasAspectRatioFeature(): boolean;
	hasAreaChangeFeature(): boolean;
	setVideoObject(video: HTMLVideoElement): void;
	protected _setHTMLElementRect(element: HTMLElement, rect: Rect): void;
	protected _updateVideoInfo(): void;
	protected _calculateVideoArea(): Rect;
	protected _applyCropStyles(): void;
	protected _calculateTransitRatio(): number;
	protected _setElementStyleProperty(element: HTMLElement, propName: string, value: string): void;
    protected _getAspectRatioMultiplier(proportion: Proportion): number;
}
