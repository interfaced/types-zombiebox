import EventPublisher from '../events/event-publisher';
import IInput from './interfaces/i-input';
import Keys from './input/keys';

export default abstract class AbstractInput extends EventPublisher implements IInput {
  constructor();
  EVENT_POINTING_DEVICE_ACTIVATED: string;
  EVENT_POINTING_DEVICE_DEACTIVATED: string;
  abstract isPointingDeviceSupported(): boolean;
  abstract enablePointingDevice(): void;
  abstract disablePointingDevice(opt_timeout?: number): void;
  eventToKeyCode(e: KeyboardEvent | WheelEvent): Keys;
  eventToPrintableChar(keyboardEvent: KeyboardEvent): string | null;
  keyToPrintableChar(zbKey: Keys): string | null;
  setKeyEventHandler(handler: (event: KeyboardEvent | WheelEvent) => void): void;
  block(): number;
  unblock(id: number): void;
  isBlocked(): boolean;
  isPointingDeviceActive(): boolean;
  enablePointingDeviceIdle(opt_timeout?: number): void;
  disablePointingDeviceIdle(): void;
  setPointingDeviceIdleTime(ms: number): boolean;
  protected abstract _createKeysMap(): { [key: number]: Keys };
  protected _detectPassiveOptionSupport(): void;
  protected _bindListeners(): void;
  protected _setBlocked(blocked: boolean): void;
  protected _keyboardEventToKeyCode(keyboardEvent: KeyboardEvent): Keys;
  protected _wheelEventToKeyCode(wheelEvent: WheelEvent): Keys;
  protected _setPointingStateActive(): void;
  protected _setPointingStateInactive(): void;
  protected _setPointingState(isActive: boolean): void;
  protected _listenForPointingState(): void;
}

export const DEFAULT_IDLE_TIMEOUT_DELAY: number;
