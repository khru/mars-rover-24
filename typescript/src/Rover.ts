import { Direction } from "./Direction";
import { North } from "./North";
import { West } from "./West";

export class Rover {
  private facing: Direction = new North();

  command(commands: string): string {
    let position = '0:0:';    

    const commandList = commands.split('');
    commandList.forEach((commandCharacter)=> {
        if (commandCharacter === 'M') {
          position = '0:1:';
        }else if (commandCharacter === 'L') {
          this.facing = this.facing.turnLeft();
        } else {
          this.turnRight();  
        }
        
    });
    return position + this.facing.getValue();
  }

  private turnRight() {
    this.facing = this.facing.turnRight();
  }
}
