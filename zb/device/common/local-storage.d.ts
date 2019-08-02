import IStorage from 'zb/device/interfaces/i-storage';

export default class LocalStorage implements IStorage {
  protected _prefix: string;
  constructor();
  public setKeyPrefix(prefix: string): void;
  public getItem(key: string): string | null;
  public setItem(key: string, data: string): void;
  public removeItem(key: string): void;
  public static isSupported(): boolean;
}
