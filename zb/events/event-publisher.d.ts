import IEventPublisher, { Listener } from './interfaces/i-event-publisher';

export default class EventPublisher implements IEventPublisher {
  constructor();
  public EVENT_ANY: string;
  public on(event: string, callback: Listener);
  public off(event: string, callback: Listener);
  public once(event: string, callback: Listener);
  public removeAllListeners(opt_event?: string);
  protected _cloneListenersOnWrite(event: string, opt_options?: { logInfo?: boolean }): void;
  protected _fireEvent(event: string, ...var_args: any[]): void;
  protected _callListeners(listeners: Listener[] | null, event: string, args: any[]): void;
}
