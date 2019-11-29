import AbstractStatefulVideo from "../abstract-stateful-video";
import IViewPort from '../interfaces/i-view-port';
import Rect from './../../geometry/rect';

export default class StatefulHtml5Video extends AbstractStatefulVideo {
    constructor(rect: Rect);
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
}