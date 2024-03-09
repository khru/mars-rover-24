import { Direction } from "./Direction";
import { East } from "./East";
import { West } from "./West";


export class North extends Direction {
  protected value: String = 'N';
  turnRight(): Direction {
    return new East();
  }
  turnLeft(): Direction {
    return new West();
  }
}
