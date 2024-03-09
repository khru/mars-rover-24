import { Direction } from "./Direction";
import { North } from "./North";

export class Rover {
  private facing: Direction = new North();

  command(commands: string): string {
    const position = '0:0:';    

    const commandList = commands.split('');
    commandList.forEach(()=> {
        this.turnRight();  
    });
    return position + this.facing.getValue();
  }

  private turnRight() {
    this.facing = this.facing.turnRight();
  }
}
