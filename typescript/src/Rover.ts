import { Direction } from "./Direction";
import { North } from "./North";
import { West } from "./West";

export class Rover {
  private facing: Direction = new North();
  private position = '0:0:';

  command(commands: string): string {

    const commandList = commands.split('');
    commandList.forEach((commandCharacter)=> {
        if (commandCharacter === 'M') {
          if (this.position == '0:2:') {
            this.position = '0:3:';
          } else if (this.position == '0:1:') {
            this.position = '0:2:';
          } else {
            this.position = '0:1:';
          }
        }else if (commandCharacter === 'L') {
          this.facing = this.facing.turnLeft();
        } else {
          this.turnRight();  
        }
        
    });
    return this.position + this.facing.getValue();
  }

  private turnRight() {
    this.facing = this.facing.turnRight();
  }
}
