import Axis from './axis';
import Direction, { Sign } from './direction';

export default class Corner {
  protected _signs: Sign[];
  constructor(signs: Sign[]);
  getDirectionByAxis(axis: Axis): Direction;
  getSignByAxis(axis: Axis): Sign;
  getDirections(): Direction[];
  getSigns(): Sign[];
  setSigns(signs: Sign[]): void;
  public static createBySigns(signs: Sign[]): Corner;
  public static createByDirections(directions: Direction[]): Corner;
  public static createLeftUp(): Corner;
  public static createLeftDown(): Corner;
  public static createRightUp(): Corner;
  public static createRightDown(): Corner;
}
