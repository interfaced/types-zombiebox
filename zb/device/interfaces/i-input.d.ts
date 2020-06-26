import IEventPublisher from '../../events/interfaces/i-event-publisher';
import Key from '../input/key';

export default interface IInput extends IEventPublisher {
	EVENT_POINTING_DEVICE_ACTIVATED: string;
	EVENT_POINTING_DEVICE_DEACTIVATED: string;
	eventToKeyCode(e: KeyboardEvent | WheelEvent): Key;
	eventToPrintableChar(keyboardEvent: KeyboardEvent): string | null;
	keyToPrintableChar(zbKey: Key): string | null;
	setKeyEventHandler(handler: (event: KeyboardEvent | WheelEvent) => void): void;
	block(): number;
	unblock(id: number): void;
	isBlocked(): boolean;
	isPointingDeviceSupported(): boolean;
	isPointingDeviceActive(): boolean;
	enablePointingDevice(): void;
	disablePointingDevice(timeout?: number): void;
	enablePointingDeviceIdle(timeout?: number): void;
	disablePointingDeviceIdle(): void;
	setPointingDeviceIdleTime(ms: number): boolean;
}
