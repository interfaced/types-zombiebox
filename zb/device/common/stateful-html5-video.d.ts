import AbstractStatefulVideo from "../abstract-stateful-video";
import { State } from "../interfaces/i-stateful-video";
import IViewPort from '../interfaces/i-view-port';
import { ResolutionInfoItem } from "../resolutions";

export default class StatefulHtml5Video extends AbstractStatefulVideo {
	constructor(panelResolution: ResolutionInfoItem, appResolution: ResolutionInfoItem);
	EVENT_STATE_EXIT: string;
	EVENT_STATE_ENTER: string;
	EVENT_WILL_PLAY: string;
	EVENT_WILL_PAUSE: string;
	EVENT_WILL_STOP: string;
	EVENT_WILL_SEEK: string;
	EVENT_WILL_CHANGE_RATE: string;
	EVENT_WILL_CHANGE_VOLUME: string;
	EVENT_IDLE: string;
	EVENT_LOADING: string;
	EVENT_READY: string;
	EVENT_PLAYING: string;
	EVENT_PAUSED: string;
	EVENT_WAITING: string;
	EVENT_SEEKING: string;
	EVENT_ENDED: string;
	EVENT_ERROR: string;
	EVENT_INVALID: string;
	EVENT_DESTROYED: string;
	EVENT_TIME_UPDATE: string;
	EVENT_VOLUME_CHANGE: string;
	EVENT_SEEKED: string;
	EVENT_RATE_CHANGE: string;
	prepare(url: string, options: { [key: string]: any }): void;
	destroy(): void;
	play(): void;
	pause(): void;
	stop(): void;
	getUrl(): string;
	getViewport(): IViewPort;
	getDuration(): number;
	getPosition(): number;
	setPosition(position: number): void;
	getPlaybackRate(): number;
	setPlaybackRate(rate: number): void;
	getMuted(): boolean;
	setMuted(muted: boolean): void;
	getVolume(): number;
	setVolume(volume: number): void;
	getEngine(): HTMLVideoElement | null;
	protected _container: HTMLDivElement | null;
	protected _videoElement: HTMLVideoElement | null;
	protected _sourceElement: HTMLSourceElement | null;
	protected _stateBeforeSeeking: State | null;
	protected _requestedStartPosition: number | null;
	protected _startPositionState: StartPositionState;
	protected _receivedCanplay: boolean;
	_onNativeEventGuarded: (event: any) => void;
	protected _init(): void;
	protected _onNativeEvent(event: Event): void;
	protected _onNativeError(event: Event): void;
	protected _onNativeLoadedMetadata(): void;
	protected _onNativeLoadedData(): void;
	protected _onNativeCanplay(): void;
	protected _onNativePlaying(): void;
	protected _onNativePause(): void;
	protected _onNativeEmptied(): void;
	protected _onNativeEnded(): void;
	protected _onNativeSeeking(): void;
	protected _onNativeSeeked(): void;
	protected _onNativeWaiting(): void;
	protected _onNativeTimeupdate(): void;
	protected _onNativeVolumechange(): void;
	protected _onNativeRatechange(): void;
	protected _reapplyStartPosition(): void;
	protected _onError(eventOrError: ErrorEvent | Event | Error): void;
	protected _destroyDOM(): void;
}

export const NativeReadyState: number;

export enum StartPositionState {
	NONE = 'none', // No were requested in start options, playback is starting from media start
	REQUESTED = 'requested', // A non-zero value was given as START_POSITION and will be set
	APPLYING = 'applying', // An attempt was made to set starting position
	APPLIED = 'applied' // Successfully set requested position
}
