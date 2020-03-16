import IEventPublisher from '../../events/interfaces/i-event-publisher';
import IViewPort from './i-view-port';

export enum State {
  UNINITED = 'uninited',
  INITED = 'inited',
  LOADING = 'loading',
  BUFFERING = 'buffering',
  PLAYING = 'playing',
  PAUSED = 'paused',
  SEEKING = 'seeking',
  STOPPED = 'stopped',
  DEINITED = 'deinited',
  ERROR = 'error',
}

export default interface IVideo extends IEventPublisher {
  EVENT_LOAD_START: string;
  EVENT_TIME_UPDATE: string;
  EVENT_BUFFERING: string;
  EVENT_ERROR: string;
  EVENT_LOADED_META_DATA: string;
  EVENT_ENDED: string;
  EVENT_DURATION_CHANGE: string;
  EVENT_PLAY: string;
  EVENT_PAUSE: string;
  EVENT_STOP: string;
  EVENT_RATE_CHANGE: string;
  EVENT_VOLUME_CHANGE: string;
  EVENT_STATE_CHANGE: string;
  play(url: string, startFrom?: number);
  resume(): void;
  pause(): void;
  togglePause(): void;
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
  volumeUp(step?: number): number;
  volumeDown(step?: number): number;
  setMuted(value: boolean): void;
  getMuted(): boolean;
  isMuted(): boolean;
  toggleMuted(): void;
  getUrl(): string;
  getState(): State;
  getViewport(): IViewPort;
}
