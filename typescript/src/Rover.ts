import { Direction } from "./Direction";
import { North } from "./North";
import { West } from "./West";

export class Rover {
  private facing: Direction = new North();
  private topVerticalEdgePosition = 9;
  private bootomVerticalEdgePosition = 0; 
  private verticalPosition = 0;

  command(commands: string): string {

    const commandList = commands.split('');
    commandList.forEach((commandCharacter)=> {
        if (commandCharacter === 'M') {
          this.move();
        }else if (commandCharacter === 'L') {
          this.turnLeft();
        } else {
          this.turnRight();  
        }
        
    });
    return `0:${this.verticalPosition}:${this.facing.getValue()}`;
  }

  private move(): void {
    if (this.facing.isSouth()) {
      if (this.verticalPosition === this.bootomVerticalEdgePosition) {
        this.verticalPosition = this.topVerticalEdgePosition;
      } else {
        this.verticalPosition--;
      }
    } else if (this.verticalPosition === this.topVerticalEdgePosition) {
      this.verticalPosition = 0;
    } else {
      this.verticalPosition++;
    }
  }

  private turnRight(): void {
    this.facing = this.facing.turnRight();
  }

  private turnLeft(): void {
    this.facing = this.facing.turnLeft();
  }

}
