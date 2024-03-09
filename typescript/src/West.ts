import { North } from "./North";
import { Direction } from "./Direction";
import { South } from "./South";


export class West extends Direction {
  protected value: String = 'W';
  turnRight(): Direction {
    return new North();
  }
  turnLeft(): Direction {
    return new South();
  }
  isWest(): boolean {
    return true;
  }
}
