import Axis from './axis';
import Direction from './direction';

export default class Point {
	x: number;
	y: number;
	constructor(x: number, y: number);
	setAxisValue(axis: Axis, value: number): void;
	getAxisValue(axis: Axis): number;
	getValue(): Value;
	getDistance(point: Point): number;
	moveByAxis(axis: Axis, value: number): void;
	moveInDirection(direction: Direction, value: number): void;
	moveXY(dx: number, dy: number): void;
	clone(): Point;
	invertPoint(): Point;
	add(b: Point): Point;
	sub(b: Point): Point;
	floorPage(page: Point): Point;
	ceilPage(page: Point): Point;
	modPage(page: Point): Point;
	page(page: Point): Point;
	scale(page: Point): Point;
	scaleAxis(axis: Axis, value: number): Point;
	toString(): string;
	static createByValue(value: Value): Point;
	static createByNumbers(x: number, y: number): Point;
	static create(x: number, y: number): Point;
	static createZeroPoint(): Point;
	static createOneOnePoint(): Point;
}

export type Value = {
	x: number;
	y: number;
};
