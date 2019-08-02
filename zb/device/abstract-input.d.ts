import EventPublisher from '../events/event-publisher';
import IInput from './interfaces/i-input';
import Keys from './input/keys';

export default abstract class AbstractInput extends EventPublisher implements IInput {
  protected constructor();
  public EVENT_POINTING_DEVICE_ACTIVATED: string;
  public EVENT_POINTING_DEVICE_DEACTIVATED: string;
  public abstract isPointingDeviceSupported(): boolean;
  public abstract enablePointingDevice(): void;
  public abstract disablePointingDevice(opt_timeout?: number): void;
  public eventToKeyCode(e: KeyboardEvent | WheelEvent): Keys;
  public eventToPrintableChar(keyboardEvent: KeyboardEvent): string | null;
  public keyToPrintableChar(zbKey: Keys): string | null;
  public setKeyEventHandler(handler: (event: KeyboardEvent | WheelEvent) => void): void;
  public block(): number;
  public unblock(id: number): void;
  public isBlocked(): boolean;
  public isPointingDeviceActive(): boolean;
  public enablePointingDeviceIdle(opt_timeout?: number): void;
  public disablePointingDeviceIdle(): void;
  public setPointingDeviceIdleTime(ms: number): boolean;
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
