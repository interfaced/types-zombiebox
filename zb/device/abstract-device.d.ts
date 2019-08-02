import Rect from '../geometry/rect';
import EventPublisher from '../events/event-publisher';
import IDevice from './interfaces/i-device';
import IInfo from './interfaces/i-info';
import IInput from './interfaces/i-input';
import IStorage from './interfaces/i-storage';
import IVideo from './interfaces/i-video';

export default abstract class AbstractDevice extends EventPublisher implements IDevice {
  protected constructor();
  public info: IInfo;
  public input: IInput;
  public storage: IStorage;
  public EVENT_READY: string;
  public abstract init(): void;
  public abstract createVideo(rect: Rect): IVideo;
  public abstract getMAC(): string;
  public abstract getIP(): string;
  public abstract exit(): void;
  public abstract setOSDOpacity(value: number): void;
  public abstract getOSDOpacity(): number;
  public abstract setOSDChromaKey(chromaKey: string): void;
  public abstract getOSDChromaKey(): string | null;
  public abstract removeOSDChromaKey(): void;
  public abstract hasOSDOpacityFeature(): boolean;
  public abstract hasOSDAlphaBlendingFeature(): boolean;
  public abstract hasOSDChromaKeyFeature(): boolean;
  public abstract isUHDSupported(): boolean;
  public abstract getEnvironment(): object;
  public abstract getLaunchParams(): object;
}
