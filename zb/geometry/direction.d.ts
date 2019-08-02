import Axis from './axis';

export default class Direction {
  public value: Value;
  constructor(value: Value);
  public getKey(): Value;
  public getCode(): Code;
  public getAxis(): Axis;
  public getSign(): Sign;
  public domPropertyName(): string;
  public isVertical(): boolean;
  public isHorizontal(): boolean;
  public isAscending(): boolean;
  public isDescending(): boolean;
  public invert(): Direction;
  public toString(): string;
  public static createByCode(code: Code): Direction;
  public static createByAxisAndSign(axis: Axis, sign: Sign): Direction;
  public static createByKey(value: Value): Direction;
  public static create(value: Value): Direction;
  public static createLeft(): Direction;
  public static createRight(): Direction;
  public static createUp(): Direction;
  public static createDown(): Direction;
  public static createAll(): Direction[];
}

export enum Value {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}

export enum Sign {
  ASC = 1,
  DESC = -1,
}

export type Code = number;

export const Codes: { [key: string]: Code };

export const PropertyNames: { [key: string]: string };
