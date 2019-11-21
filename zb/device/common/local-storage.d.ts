import IStorage from './../interfaces/i-storage';

export default class LocalStorage implements IStorage {
  protected _prefix: string;
  constructor();
  setKeyPrefix(prefix: string): void;
  getItem(key: string): string | null;
  setItem(key: string, data: string): void;
  removeItem(key: string): void;
  static isSupported(): boolean;
}
