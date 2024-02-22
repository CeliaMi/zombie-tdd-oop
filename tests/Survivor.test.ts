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

    test('A survivor who receives 2 Wounds should die', ()=> {
        const survivor = new Survivor('juana')
        survivor.injure(2);
        const sut = survivor.alive
        expect(sut).toBe(false);
    })

    test('Each survivor should start with the ability to perform 3 actions per shift', ()=> {
        const survivor = new Survivor('juana')
        const sut = survivor.actions.length
        expect(sut).toBe(3);
    })

    test('Each Survivor can carry up to 5 pieces of Equipment', ()=> {
        const survivor = new Survivor('juana')
        const EquipamentsToAdd = ['Baseball Bat', 'Flashlight', 'Gasoline', 'Axe', 'Pistol']
        EquipamentsToAdd.forEach(equipament => survivor.addEquipament(equipament))
        const sut = survivor.equipment.length
        expect(sut).toBe(5);
    })

})