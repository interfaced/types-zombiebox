import IEventPublisher from '../../events/interfaces/i-event-publisher';
import Rect from '../../geometry/rect';
import IInfo from './i-info';
import IInput from './i-input';
import IStorage from './i-storage';
import IVideo from './i-video';

export default interface IDevice extends IEventPublisher {
  info: IInfo;
  input: IInput;
  storage: IStorage;
  EVENT_READY: string;
  init(): void;
  createVideo(rect: Rect): IVideo;
  getMAC(): string;
  getIP(): string;
  exit(): void;
  setOSDOpacity(value: number): void;
  getOSDOpacity(): number;
  setOSDChromaKey(chromaKey: string): void;
  getOSDChromaKey(): string | null;
  removeOSDChromaKey(): void;
  hasOSDOpacityFeature(): boolean;
  hasOSDAlphaBlendingFeature(): boolean;
  hasOSDChromaKeyFeature(): boolean;
  isUHDSupported(): boolean;
  getEnvironment(): object;
  getLaunchParams(): object;
}
