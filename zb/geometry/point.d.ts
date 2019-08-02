import Axis from './axis';
import Direction from './direction';

export default class Point {
  public x: number;
  public y: number;
  constructor(x: number, y: number);
  public setAxisValue(axis: Axis, value: number): void;
  public getAxisValue(axis: Axis): number;
  public getValue(): Value;
  public getDistance(point: Point): number;
  public moveByAxis(axis: Axis, value: number): void;
  public moveInDirection(direction: Direction, value: number): void;
  public moveXY(dx: number, dy: number): void;
  public clone(): Point;
  public invertPoint(): Point;
  public add(b: Point): Point;
  public sub(b: Point): Point;
  public floorPage(page: Point): Point;
  public ceilPage(page: Point): Point;
  public modPage(page: Point): Point;
  public page(page: Point): Point;
  public scale(page: Point): Point;
  public scaleAxis(axis: Axis, value: number): Point;
  public toString(): string;
  public static createByValue(value: Value): Point;
  public static createByNumbers(x: number, y: number): Point;
  public static create(x: number, y: number): Point;
  public static createZeroPoint(): Point;
  public static createOneOnePoint(): Point;
}

export type Value = {
  x: number;
  y: number;
};
