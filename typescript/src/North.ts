import { Direction } from "./Direction";
import { East } from "./East";


export class North extends Direction {
  protected value: String = 'N';
  turnRight(): Direction {
    return new East();
  }
}
