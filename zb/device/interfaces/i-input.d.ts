import IEventPublisher from '../../events/interfaces/i-event-publisher';
import Keys from '../input/keys';

export default interface IInput extends IEventPublisher {
  EVENT_POINTING_DEVICE_ACTIVATED: string;
  EVENT_POINTING_DEVICE_DEACTIVATED: string;
  eventToKeyCode(event: KeyboardEvent | WheelEvent): Keys;
  eventToPrintableChar(keyboardEvent: KeyboardEvent): string | null;
  keyToPrintableChar(zbKey: Keys): string | null;
  setKeyEventHandler(handler: (event: KeyboardEvent | WheelEvent) => void): void;
  block(): number;
  unblock(id: number): void;
  isBlocked(): boolean;
  isPointingDeviceSupported(): boolean;
  isPointingDeviceActive(): boolean;
  enablePointingDevice(): void;
  disablePointingDevice(opt_timeout?: number): void;
  enablePointingDeviceIdle(opt_timeout?: number): void;
  disablePointingDeviceIdle(): void;
  setPointingDeviceIdleTime(ms: number): boolean;
}
