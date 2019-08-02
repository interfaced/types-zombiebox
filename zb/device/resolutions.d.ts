export enum Resolution {
  QHD = 1,
  HD = 2,
  FULL_HD = 3,
}

export type ResolutionInfoItem = {
  name: string;
  width: number;
  height: number;
};

export const ResolutionInfo: { [key: number]: ResolutionInfoItem };
