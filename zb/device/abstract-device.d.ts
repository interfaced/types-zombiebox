import Rect from '../geometry/rect';
import EventPublisher from '../events/event-publisher';
import IDevice from './interfaces/i-device';
import IInfo from './interfaces/i-info';
import IInput from './interfaces/i-input';
import IStorage from './interfaces/i-storage';
import IVideo from './interfaces/i-video';

export default abstract class AbstractDevice extends EventPublisher implements IDevice {
  constructor();
  info: IInfo;
  input: IInput;
  storage: IStorage;
  EVENT_READY: string;
  abstract init(): void;
  abstract createVideo(rect: Rect): IVideo;
  abstract getMAC(): string;
  abstract getIP(): string;
  abstract exit(): void;
  abstract setOSDOpacity(value: number): void;
  abstract getOSDOpacity(): number;
  abstract setOSDChromaKey(chromaKey: string): void;
  abstract getOSDChromaKey(): string | null;
  abstract removeOSDChromaKey(): void;
  abstract hasOSDOpacityFeature(): boolean;
  abstract hasOSDAlphaBlendingFeature(): boolean;
  abstract hasOSDChromaKeyFeature(): boolean;
  abstract isUHDSupported(): boolean;
  abstract getEnvironment(): object;
  abstract getLaunchParams(): object;
}
