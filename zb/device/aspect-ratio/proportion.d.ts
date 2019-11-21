type registry = { [key: string]: Proportion };

export class Proportion {
  x: number;
  y: number;
  name: string;
  protected _name: string;
  protected _x: number;
  protected _y: number;
  constructor(name: string, opt_x?: number, opt_y?: number);
  toString(): string;
}

export const Common: {
  KEEP: Proportion;
  AUTO: Proportion;
  X4X3: Proportion;
  X16X9: Proportion;
};
