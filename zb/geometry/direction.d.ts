import Axis from './axis';

export default class Direction {
  value: Value;
  constructor(value: Value);
  getKey(): Value;
  getCode(): Code;
  getAxis(): Axis;
  getSign(): Sign;
  domPropertyName(): string;
  isVertical(): boolean;
  isHorizontal(): boolean;
  isAscending(): boolean;
  isDescending(): boolean;
  invert(): Direction;
  toString(): string;
  static createByCode(code: Code): Direction;
  static createByAxisAndSign(axis: Axis, sign: Sign): Direction;
  static createByKey(value: Value): Direction;
  static create(value: Value): Direction;
  static createLeft(): Direction;
  static createRight(): Direction;
  static createUp(): Direction;
  static createDown(): Direction;
  static createAll(): Direction[];
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
