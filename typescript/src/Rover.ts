import { Direction } from "./Direction";
import { North } from "./North";
import { West } from "./West";

export class Rover {
  private facing: Direction = new North();
  private verticalPosition = 0;

  command(commands: string): string {

    const commandList = commands.split('');
    commandList.forEach((commandCharacter)=> {
        if (commandCharacter === 'M') {
          if (this.verticalPosition == 2) {
            this.verticalPosition++;
          } else if (this.verticalPosition == 1) {
            this.verticalPosition++;
          } else {
            this.verticalPosition++;
          }
        }else if (commandCharacter === 'L') {
          this.facing = this.facing.turnLeft();
        } else {
          this.turnRight();  
        }
        
    });
    return `0:${this.verticalPosition}:${this.facing.getValue()}`;
  }

  private turnRight() {
    this.facing = this.facing.turnRight();
  }

}
