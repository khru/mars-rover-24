import { Direction } from "./Direction";
import { South } from "./South";


export class East extends Direction {
  protected value: String = 'E';
  turnRight(): Direction {
    return new South();
  }
}
