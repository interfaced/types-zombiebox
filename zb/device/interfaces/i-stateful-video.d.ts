import IEventPublisher from '../../events/interfaces/i-event-publisher';
import IViewPort from './i-view-port';
import { Type as DRMType } from '../drm/drm';
import IDRMClient from './i-drm-client';

export default interface IStatefulVideo extends IEventPublisher {
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
	getState(): State;
	getStateTransition(): { from: State, to: State } | null;
	getUrl(): string;
	getViewport(): IViewPort;
	getDuration(): number;
	getPosition(): number;
	setPosition(position: number): void;
	getPlaybackRate(): number;
	setPlaybackRate(rate: number): void;
	getMuted(): boolean;
	setMuted(muted: boolean): void;
	toggleMuted(): boolean;
	getVolume(): number;
	setVolume(volume: number): void;
	volumeDown(step?: number): number;
	volumeUp(step?: number): number;
	attachDRM(client: IDRMClient): void;
	detachDRM(type: DRMType): Promise<any>;
	getEngine(): any | null;
}

export enum State {
	IDLE = 'idle',
	LOADING = 'loading',
	READY = 'ready',
	PLAYING = 'playing',
	PAUSED = 'paused',
	WAITING = 'waiting',
	SEEKING = 'seeking',
	ENDED = 'ended',
	ERROR = 'error',
	INVALID = 'invalid',
	DESTROYED = 'destroyed'
}

export const StateDiagram: { [key: string]: State[] };

export enum MediaType {
	DASH = 'application/dash+xml',
	HLS = 'application/vnd.apple.mpegurl',
	MP4 = 'video/mp4',
	WEBM = 'video/webm',
	MSS = 'application/vnd.ms-sstr+xml'
}

export enum PrepareOption {
	TYPE = 'media-type',
	START_POSITION = 'start-position',
	IS_4K = 'is-4k',
	IS_8K = 'is-8k'
}
