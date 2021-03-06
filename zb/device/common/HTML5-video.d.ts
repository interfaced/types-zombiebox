import AbstractVideo from '../abstract-video';
import Rect from '../../geometry/rect';
import IViewPort from '../interfaces/i-view-port';
import HTML5ViewPort from '../../device/common/HTML5-view-port';

export default class HTML5Video extends AbstractVideo {
	protected _viewport: HTML5ViewPort;
	protected _container: HTMLDivElement;
	protected _video: HTMLVideoElement;
	protected _source: HTMLElement;
	protected _startTime: number;
	constructor(rect: Rect);
	play(url: string, startFrom?: number);
	resume(): void;
	pause(): void;
	stop(): void;
	forward(): boolean;
	rewind(): boolean;
	destroy(): void;
	setPlaybackRate(rate: number): void;
	getPlaybackRate(): number;
	setPosition(milliseconds: number): void;
	getPosition(): number;
	getDuration(): number;
	setVolume(value: number): void;
	getVolume(): number;
	getUrl(): string;
	setMuted(value: boolean): void;
	getMuted(): boolean;
	protected _createViewPort(containerRect: Rect): IViewPort;
	protected _createVideoObject(): HTMLVideoElement;
	protected _createContainer(): HTMLDivElement;
	protected _initVideoObject(url: string): void;
	protected _errorEventListener(event: ErrorEvent): void;
	protected _loadedmetadataEventListener(): void;
	protected _playingEventListener(): void;
	protected _durationchangeEventListener(): void;
	protected _timeupdateEventListener(): void;
	protected _pauseEventListener(): void;
	protected _ratechangeEventListener(): void;
	protected _volumechangeEventListener(): void;
	protected _loadstartEventListener(): void;
	protected _endedEventListener(): void;
	protected _waitingEventListener(): void;
	protected _initEvents(): void;
	protected _destroyEvents(): void;
	protected _removeVideoObject(): void;
	protected _removeContainer(): void;
	protected _fireError(error: string): void;
	protected _seekByPlaybackRateDoubling(): boolean;
}
