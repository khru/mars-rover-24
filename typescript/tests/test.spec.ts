import { Rover } from '../src/Rover'

describe('Rovers should', () => {
    let rover: Rover;

    beforeEach(()=> {
        rover = new Rover()
    })


    it('be facing east when it rotates right', () => {
        expect(rover.command('R')).toBe('0:0:E')
    })

    it('be facing south when it rotates two times right', () => {
        expect(rover.command('RR')).toBe('0:0:S')
    })

    it('be facing west when it rotates three times right', () => {
        expect(rover.command('RRR')).toBe('0:0:W')
    })

    it('be facing north when it rotates four times right', () => {
        expect(rover.command('RRRR')).toBe('0:0:N')
    })

    it('be facing west when it rotates left', () => {
        expect(rover.command('L')).toBe('0:0:W')
    })

    it('be facing south when it rotates left', () => {
        expect(rover.command('LL')).toBe('0:0:S')
    })

    it('be facing east when it rotates left', () => {
        expect(rover.command('LLL')).toBe('0:0:E')
    })

    it('be facing north when it rotates left', () => {
        expect(rover.command('LLLL')).toBe('0:0:N')
    })
})
