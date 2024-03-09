import { West } from "./West";
import { Direction } from "./Direction";
import { East } from "./East";


export class South extends Direction {
  protected value: String = 'S';
  turnRight(): Direction {
    return new West();
  }
  turnLeft(): Direction {
    return new East();
  }
}
