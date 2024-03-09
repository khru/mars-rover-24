import { Direction } from "./Direction";
import { North } from "./North";
import { South } from "./South";


export class East extends Direction {
  protected value: String = 'E';
  turnRight(): Direction {
    return new South();
  }
  turnLeft(): Direction {
    return new North();
  }
}
