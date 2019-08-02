type registry = { [key: string]: Proportion };

export class Proportion {
  public x: number;
  public y: number;
  public name: string;
  protected _name: string;
  protected _x: number;
  protected _y: number;
  constructor(name: string, opt_x?: number, opt_y?: number);
  public toString(): string;
}

export const Common: {
  KEEP: Proportion;
  AUTO: Proportion;
  X4X3: Proportion;
  X16X9: Proportion;
};
