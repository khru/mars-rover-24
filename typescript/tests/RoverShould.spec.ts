import { Rover } from '../src/Rover'

describe('Rover should', () => {
    let rover: Rover;

    beforeEach(()=> {
        rover = new Rover()
    })

    it.each([
        ['be facing east when it rotates right and it was facing north', 'R', '0:0:E'],
        ['be facing south when it rotates right and it was facing east', 'RR', '0:0:S'],
        ['be facing west when it rotates right and it was facing south', 'RRR', '0:0:W'],
        ['be facing north when it rotates right and it and was facing west', 'RRRR', '0:0:N'],
        ['be facing west when it rotates left and it was facing north', 'L', '0:0:W'],
        ['be facing south when it rotates left and it was facing west', 'LL', '0:0:S'],
        ['be facing east when it rotates left and it was facing south', 'LLL', '0:0:E'],
        ['be facing north when it rotates left and it was facing east', 'LLLL', '0:0:N'],
    ])('%s', (description: string, commandList: string, expectedResult: string) => {
        expect(rover.command(commandList)).toBe(expectedResult)
    })

    it('move one coordinate ahead in the positive direction of the vertical axis', ()=> {
        expect(rover.command('M')).toBe('0:1:N');
    })

    it('move two coordinates ahead in the positive direction of the vertical axis', ()=> {
        expect(rover.command('MM')).toBe('0:2:N');
    })

    it('move three coordinates ahead in the positive direction of the vertical axis', ()=> {
        expect(rover.command('MMM')).toBe('0:3:N');
    })
})
