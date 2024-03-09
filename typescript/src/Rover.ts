export class Rover {
  private facing = 'N';

  command(commands: string): string {
    const position = '0:0:';    

    const commandList = commands.split('');
    commandList.forEach(()=> {
        this.turnRight();  
    });
    return position + this.facing;
  }

  turnRight() {
    if (this.facing === 'W') {
      this.facing = 'N';
      return;
    }

    if (this.facing === 'S') {
      this.facing = 'W';
      return;
    }

    if (this.facing === 'E') {
      this.facing = 'S';
      return;
    }

    if (this.facing === 'N') {
      this.facing = 'E';
      return;
    }
  }
}

