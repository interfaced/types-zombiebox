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
	static createBySigns(signs: Sign[]): Corner;
	static createByDirections(directions: Direction[]): Corner;
	static createLeftUp(): Corner;
	static createLeftDown(): Corner;
	static createRightUp(): Corner;
	static createRightDown(): Corner;
}
