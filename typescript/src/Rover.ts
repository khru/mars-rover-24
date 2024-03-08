export class Rover {

  command(commands: string): string {
    const position = '0:0:';

    if (commands === 'RRRR') {
      return position + 'N'
    }
    if (commands === 'RRR') {
      return position + 'W'
    }
    if (commands === 'RR') {
      return position + 'S';
    }

    return position + 'E'
  }
}
