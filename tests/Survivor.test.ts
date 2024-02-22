import { Survivor } from '../src/Survivor';

describe('Survivor', () => { 
    
    test('Every survivor should have a Name', ()=> {
        const survivor = new Survivor('juana')
        const sut = survivor.name
        expect(sut).toBe('juana');
    })

    test('Each survivor should start with 0 wounds', ()=> {
        const survivor = new Survivor('juana')
        const sut = survivor.wounds
         expect(sut).toBe(0);
    })

    test('A Survivor who receives 2 Wounds should die', ()=> {
        const survivor = new Survivor('juana')
        survivor.injure(2);
        const sut = survivor.alive
        expect(sut).toBe(false);
    })

})