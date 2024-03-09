import { Rover } from '../src/Rover'

describe('Rovers should', () => {
    it('be facing east when it rotates right', () => {
        const rover = new Rover()

        expect(rover.command('R')).toBe('0:0:E')
    })

    it('be facing south when it rotates two times right', () => {
        const rover = new Rover()

        expect(rover.command('RR')).toBe('0:0:S')
    })

    it('be facing west when it rotates three times right', () => {
        const rover = new Rover()

        expect(rover.command('RRR')).toBe('0:0:W')
    })

    it('be facing north when it rotates four times right', () => {
        const rover = new Rover()

        expect(rover.command('RRRR')).toBe('0:0:N')
    })

    it('be facing west when it rotates left', () => {
        const rover = new Rover()
        expect(rover.command('L')).toBe('0:0:W')
    })

    it('be facing south when it rotates left', () => {
        const rover = new Rover()
        expect(rover.command('LL')).toBe('0:0:S')
    })

    it('be facing east when it rotates left', () => {
        const rover = new Rover()
        expect(rover.command('LLL')).toBe('0:0:E')
    })
})
