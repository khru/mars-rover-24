export class Rover {
  private facing = 'N';

  command(commands: string): string {
    const position = '0:0:';

    if (commands === 'RRRR') {

      const commandList = commands.split('');
      commandList.forEach(()=> {
          this.turnRight();  
      });

      return position + this.facing;
    }
    if (commands === 'RRR') {
      const commandList = commands.split('');
      commandList.forEach(()=> {
          this.turnRight();  
      });
      return position + this.facing;
    }
    if (commands === 'RR') {
      const commandList = commands.split('');
      commandList.forEach(()=> {
          this.turnRight();  
      });
      return position + this.facing;
    }

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

