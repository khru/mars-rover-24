import { Direction } from "./Direction";
import { South } from "./South";


export class East extends Direction {
  protected value: String = 'E';
  turnRight(): Direction {
    return new South();
  }
  turnLeft(): Direction {
    throw new Error("Method not implemented.");
  }
}
