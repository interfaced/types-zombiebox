export default interface IStorage {
  setKeyPrefix(prefix: string): void;
  getItem(key: string): string | null;
  setItem(key: string, data: string): void;
  removeItem(key: string): void;
}
