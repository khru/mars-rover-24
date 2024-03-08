import { Rover } from '../src/Rover'

describe('Rovers should', () => {
    it('rotate right when is facing north', () => {
        const rover = new Rover()

        expect(rover.command('N')).toBe('0:0:E')
    })
})
