import { North } from "./North";
import { Direction } from "./Direction";


export class West extends Direction {
  protected value: String = 'W';
  turnRight(): Direction {
    return new North();
  }
}
