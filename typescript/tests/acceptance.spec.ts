import { Rover } from '../src/Rover'

describe('Testing Rovers positions', () => {
    it('Given command MMRMMLM rovers is in 2:3:N', () => {
        const rover = new Rover()

        expect(rover.command('MMRMMLM')).toBe('2:3:N')
    })
})
