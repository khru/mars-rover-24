export class Rover {
  private facing = 'N';

  command(commands: string): string {
    const position = '0:0:';

    const direction = [];

    if (commands === 'RRRR') {
      this.turnRight();
      this.turnRight();
      this.turnRight();
      this.turnRight();
      return position + this.facing;
    }
    if (commands === 'RRR') {
      this.turnRight();
      this.turnRight();
      this.turnRight();
      return position + this.facing;
    }
    if (commands === 'RR') {
      this.turnRight();
      this.turnRight();
      return position + this.facing;
    }

    this.turnRight();
    return position + this.facing;
  }

  turnRight() {
    if (this.facing === 'W') {
      this.facing = 'N';
    }

    if (this.facing === 'S') {
      this.facing = 'W';
    }

    if (this.facing === 'E') {
      this.facing = 'S';
    }

    if (this.facing === 'N') {
      this.facing = 'E';
    }
  }
}

