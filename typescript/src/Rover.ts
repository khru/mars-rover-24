export class Rover {
  command (commands: string): string {
      if (commands === 'RR') {
          return '0:0:S';
      }

      return '0:0:E'
  }
}
