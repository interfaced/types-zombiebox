import IEventPublisher, { Listener } from './interfaces/i-event-publisher';

export default class EventPublisher implements IEventPublisher {
	constructor();
	EVENT_ANY: string;
	on(event: string, callback: Listener);
	off(event: string, callback: Listener);
	once(event: string, callback: Listener);
	removeAllListeners(event?: string);
    runAfterCurrentEvent(callback: Function): void;
	protected _fireEvent(event: string, ...args: any[]): void;
	protected _callListeners({ listeners, event, args }: EventExecutionContext): void;
	protected _listeners: {
		[x: string]: Listener[];
	};
	protected _onceRecords: OnceRecord[];
	protected _currentContext: EventExecutionContext | null;
}

export type OnceRecord = {
	callback: Listener;
	called: boolean;
	wrapper: Listener;
};

export type EventExecutionContext = {
	listeners: Listener[];
	event: string;
	args: any[];
	runAfter: Function[];
};
