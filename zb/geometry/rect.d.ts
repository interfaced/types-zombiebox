import Direction, { Value as DirectionValue } from './direction';
import Point from './point';
import Corner from './corner';
import Axis from './axis';

export default class Rect {
  public x0: number;
  public x1: number;
  public y0: number;
  public y1: number;
  constructor(value: Value);
  public isEmpty(): boolean;
  public setValue(value: Value): void;
  public getValue(): Value;
  public getBorderByDirection(direction: Direction): number;
  public setBorderByDirection(direction: Direction, value: number): void;
  public getPointA(): Point;
  public getPointB(): Point;
  public getPointCenter(): Point;
  public getPointByDirections(directions: Direction[]): Point;
  public getPointByCorner(corner: Corner): Point;
  public getSize(): Point;
  public getSizeByAxis(axis: Axis): number;
  public getSizeX(): number;
  public getSizeY(): number;
  public cutInDirection(direction: Direction, value: number): void;
  public openInDirection(direction: Direction): void;
  public cutLeft(value: number): void;
  public cutRight(value: number): void;
  public cutUp(value: number): void;
  public cutDown(value: number): void;
  public moveX(value: number): void;
  public moveY(value: number): void;
  public moveXY(point: Point): void;
  public moveTo(point: Point): void;
  public extendEvenly(value: number): void;
  public shrinkDelta(): void;
  public clone(): Rect;
  public isEqual(rectB: Rect): boolean;
  public hasPoint(point: Point): boolean;
  public getIntersection(b: Rect): Rect;
  public isIntersects(b: Rect): boolean;
  public isIntersectsGeometric(b: Rect): boolean;
  public getOverflowAll(external: Rect): { [key: string]: number };
  public getPositiveOverflowAll(external: Rect): { [key: string]: number };
  public isOverflowReachedAll(external: Rect): { [key: string]: boolean };
  public getOverflowInDirection(external: Rect, direction: Direction): number;
  public isOverflowReachedInDirection(external: Rect, direction: Direction): boolean;
  public sub(rectB: Rect): Rect[];
  public extrapolateWith(rectB: Rect): Rect;
  public splitToPoints(step: Point): Point[];
  public page(pageSize: Point): Rect;
  public scale(pageSize: Point): Rect;
  public toString(): string;
  public static createByNumbers(x0: number, y0: number, x1: number, y1: number): Rect;
  public static createBySize(size: Point, opt_point?: Point): Rect;
  public static createByPoints(p0: Point, p1: Point): Rect;
  public static createByClientRect(client: ClientRect): Rect;
  public static create(value: Value): Rect;
  public static createEmptyRect(): Rect;
  public static createOneUnitRect(opt_position?: Point): Rect;
  public static createInfiniteRect(): Rect;
  public static createHorizontalInfiniteRect(y0: number, y1: number): Rect;
  public static createVerticalInfiniteRect(x0: number, x1: number): Rect;
}

export type Value = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
};
