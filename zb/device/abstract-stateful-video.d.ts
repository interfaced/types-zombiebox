import EventPublisher from '../events/event-publisher';
import IStatefulVideo, { State } from './interfaces/i-stateful-video';
import IViewPort from './interfaces/i-view-port';
import Rect from '../geometry/rect';
import StateMachine from '../state-machine';
import {Type as DRMType} from './drm/drm';
import IDRMClient from './interfaces/i-drm-client';

export default abstract class AbstractStatefulVideo extends EventPublisher implements IStatefulVideo {
    protected _stateMachine: StateMachine<State>;
    protected _rect: Rect;
    protected _viewport: IViewPort;
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
    abstract prepare(url: string, options: { [key: string]: any }): void;
    abstract destroy(): void;
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
    getState(): State;
    getStateTransition(): { from: State, to: State } | null;
    abstract getUrl(): string;
    abstract getViewport(): IViewPort;
    abstract getDuration(): number;
    abstract getPosition(): number;
    abstract setPosition(position: number): void;
    abstract getPlaybackRate(): number;
    abstract setPlaybackRate(rate: number): void;
    abstract getMuted(): boolean;
    abstract setMuted(muted: boolean): void;
    toggleMuted(): boolean;
    abstract getVolume(): number;
    abstract setVolume(volume: number): void;
    volumeDown(): number;
    volumeUp(): number;
    attachDRM(client: IDRMClient): void;
    detachDRM(type: DRMType): void;
    static isDRMSupported(type: DRMType): boolean;
    static canHandleMultiDRM(): boolean;
}

export class StateError extends Error {
    constructor(currentState: State, states: State[], message?: string);
    currentState: State;
    expectedStates: State[];
}