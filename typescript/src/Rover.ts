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
      if (this.isPassingTheBootomEdge()) {
        this.positionateAtTopEdgeVerticalPosition();
      } else {
        this.verticalPosition--;
      }
    } else {
      if (this.isPassingTheTopEdge()) {
        this.positionateAtBootomEdgeVerticalPosition();
      } else {
        this.verticalPosition++;
      }
      
    }
  }

  private positionateAtBootomEdgeVerticalPosition(): void {
    this.verticalPosition = this.bootomVerticalEdgePosition;
  }

  private positionateAtTopEdgeVerticalPosition(): void {
    this.verticalPosition = this.topVerticalEdgePosition;
  }

  private isPassingTheBootomEdge(): boolean {
    return this.verticalPosition === this.bootomVerticalEdgePosition;
  }

  private isPassingTheTopEdge(): boolean {
    return this.verticalPosition === this.topVerticalEdgePosition;
  }

  private turnRight(): void {
    this.facing = this.facing.turnRight();
  }

  private turnLeft(): void {
    this.facing = this.facing.turnLeft();
  }

}
