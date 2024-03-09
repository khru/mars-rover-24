import { Direction } from "./Direction";
import { North } from "./North";

export class Rover {
  private facing: Direction = new North();
  private northEdgePosition = 9;
  private southEdgePosition = 0; 
  private verticalPosition = 0;
  private horizontalPosition = 0;

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
    return `${this.horizontalPosition}:${this.verticalPosition}:${this.facing.getValue()}`;
  }

  private move(): void {
    if (this.facing.isWest()) {
      this.moveToWest();
    } else if (this.facing.isEast()) {
      this.moveToEast();
    } else if (this.facing.isSouth()) {
      this.moveToSouth();
    } else {
      this.moveToNorth();
    }
  }

  moveToEast(): void {
    if (this.isPassingTheEastEdge()) {
      this.positionateOnWestEdgePosition();
    } else {
      this.horizontalPosition++;
    }
  }

  moveToWest(): void {
    this.horizontalPosition--;
  }

  private moveToNorth(): void {
    if (this.isPassingTheNorthEdge()) {
      this.positionateOnSouthEdgePosition();
    } else {
      this.increaseVerticalPositionOnce();
    }
  }

  private moveToSouth(): void {
    if (this.isPassingTheSouthEdge()) {
      this.positionateOnNorthEdgePosition();
    } else {
      this.decreaseVerticalPositionOnce();
    }
  }

  private increaseVerticalPositionOnce(): void {
    this.verticalPosition++;
  }

  private decreaseVerticalPositionOnce(): void {
    this.verticalPosition--;
  }

  private positionateOnSouthEdgePosition(): void {
    this.verticalPosition = this.southEdgePosition;
  }

  private positionateOnNorthEdgePosition(): void {
    this.verticalPosition = this.northEdgePosition;
  }

  private positionateOnWestEdgePosition(): void {
    this.horizontalPosition = this.southEdgePosition;
  }

  private isPassingTheSouthEdge(): boolean {
    return this.verticalPosition === this.southEdgePosition;
  }

  private isPassingTheNorthEdge(): boolean {
    return this.verticalPosition === this.northEdgePosition;
  }

  private isPassingTheEastEdge(): boolean {
    return this.horizontalPosition === this.northEdgePosition;
  }

  private turnRight(): void {
    this.facing = this.facing.turnRight();
  }

  private turnLeft(): void {
    this.facing = this.facing.turnLeft();
  }

}
