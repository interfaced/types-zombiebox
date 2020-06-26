import EventPublisher from '../events/event-publisher';
import IInput from './interfaces/i-input';
import Key from './input/key';

export default abstract class AbstractInput extends EventPublisher implements IInput {
	constructor();
	EVENT_POINTING_DEVICE_ACTIVATED: string;
	EVENT_POINTING_DEVICE_DEACTIVATED: string;
	abstract isPointingDeviceSupported(): boolean;
	abstract enablePointingDevice(): void;
	abstract disablePointingDevice(timeout?: number): void;
	eventToKeyCode(e: KeyboardEvent | WheelEvent): Key;
	eventToPrintableChar(keyboardEvent: KeyboardEvent): string | null;
	keyToPrintableChar(zbKey: Key): string | null;
	setKeyEventHandler(handler: (event: KeyboardEvent | WheelEvent) => void): void;
	block(): number;
	unblock(id: number): void;
	isBlocked(): boolean;
	isPointingDeviceActive(): boolean;
	enablePointingDeviceIdle(timeout?: number): void;
	disablePointingDeviceIdle(): void;
	setPointingDeviceIdleTime(ms: number): boolean;
	protected abstract _createKeyMap(): { [key: number]: Key };
	protected _detectPassiveOptionSupport(): void;
	protected _bindListeners(): void;
	protected _setBlocked(blocked: boolean): void;
	protected _keyboardEventToKeyCode(keyboardEvent: KeyboardEvent): Key;
	protected _wheelEventToKeyCode(wheelEvent: WheelEvent): Key;
	protected _setPointingStateActive(): void;
	protected _setPointingStateInactive(): void;
	protected _setPointingState(isActive: boolean): void;
	protected _listenForPointingState(): void;
}

export const DEFAULT_IDLE_TIMEOUT_DELAY: number;
