import IEventPublisher, { Listener } from './interfaces/i-event-publisher';

export default class EventPublisher implements IEventPublisher {
  constructor();
  EVENT_ANY: string;
  on(event: string, callback: Listener);
  off(event: string, callback: Listener);
  once(event: string, callback: Listener);
  removeAllListeners(opt_event?: string);
  protected _cloneListenersOnWrite(event: string, opt_options?: { logInfo?: boolean }): void;
  protected _fireEvent(event: string, ...var_args: any[]): void;
  protected _callListeners(listeners: Listener[] | null, event: string, args: any[]): void;
}
