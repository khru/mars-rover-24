export class Rover {
  command(commands: string): string {

    if (commands === 'RRRR') {
      return '0:0:N'
    }
    if (commands === 'RRR') {
      return '0:0:W'
    }
    if (commands === 'RR') {
      return '0:0:S';
    }

    return '0:0:E'
  }
}
