import { Resolution } from '../resolutions';

export default interface IInfo {
  type(): string;
  version(): string;
  manufacturer(): string;
  model(): string;
  serialNumber(): string;
  softwareVersion(): string;
  hardwareVersion(): string;
  osdResolutionType(): Resolution;
  getPanelResolution(): Resolution;
  getOSDResolution(): Resolution;
  locale(): string | null;
}
