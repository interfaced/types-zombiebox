export type Listener = (event: string, ...args: any[]) => void;

export default interface IEventPublisher {
  EVENT_ANY: string;
  on(event: string, callback: Listener);
  off(event: string, callback: Listener);
  once(event: string, callback: Listener);
  removeAllListeners(opt_event?: string);
}
