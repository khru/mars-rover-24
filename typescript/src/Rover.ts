import { Direction } from "./Direction";
import { North } from "./North";

export class Rover {
  private facing2: Direction = new North();

  command(commands: string): string {
    const position = '0:0:';    

    const commandList = commands.split('');
    commandList.forEach(()=> {
        this.turnRight();  
    });
    return position + this.facing2.getValue();
  }

  private turnRight() {
    if (this.facing2.getValue() === 'W') {
      this.facing2 = this.facing2.turnRight();
      return;
    }

    if (this.facing2.getValue() === 'S') {
      this.facing2 = this.facing2.turnRight();
      return;
    }

    if (this.facing2.getValue() === 'E') {      
      this.facing2 = this.facing2.turnRight();
      return;
    }

    if (this.facing2.getValue() === 'N') {
      this.facing2 = this.facing2.turnRight();
      return;
    }
  }
}


