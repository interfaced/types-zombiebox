import Rect from "../geometry/rect";

export enum Resolution {
	HD = 2,
	FULL_HD = 3,
	UHD_4K = 4,
	UHD_8K = 5
}

export type ResolutionInfoItem = {
	name: string;
	width: number;
	height: number;
};

export function findLargest(rect: Rect): Resolution;

export function translate(rect: Rect, from: ResolutionInfoItem, to: ResolutionInfoItem, round?: (arg0: number) => number): Rect;

export function createResolutionRect(info: ResolutionInfoItem): Rect;

export const ResolutionInfo: { [key: number]: ResolutionInfoItem };
