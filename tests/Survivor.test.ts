import { Survivor } from '../src/Survivor';

describe('Survivor', () => { 

    let survivor : Survivor = {} as Survivor
    beforeEach(()=>{
        survivor = new Survivor('juana')
    })

    test('Every survivor should have a Name', ()=> {

        const sut = survivor.name
        expect(sut).toBe('juana');
    })

    test('Each survivor should start with 0 wounds', ()=> {

        const sut = survivor.getWounds()
         expect(sut).toBe(0);
    })

    test('A survivor who receives 2 Wounds should die', ()=> {

        survivor.injure(2);
        const sut = survivor.getAlive()
        expect(sut).toBe(false);
    })

    test('Each survivor should start with the ability to perform 3 actions per shift', ()=> {
   
        const sut = survivor.getActions().length
        expect(sut).toBe(3);
    })

    test('Each Survivor can carry up to 5 pieces of Equipment', ()=> {
  
        const EquipamentsToAdd = ['Baseball Bat', 'Flashlight', 'Gasoline', 'Axe', 'Pistol']
        EquipamentsToAdd.forEach(equipament => survivor.addEquipament(equipament))
        const sut = survivor.getEquipment().length
        expect(sut).toBe(5);
    })

    test('Each Survivor can´t carry up more than 5 pieces of Equipment', ()=> {

        const EquipamentsToAdd = ['Baseball Bat', 'Flashlight', 'Gasoline', 'Axe', 'Pistol', 'Knife']
        EquipamentsToAdd.forEach(equipament => survivor.addEquipament(equipament))
        const sut = survivor.getEquipment().length
        expect(sut).toBe(5);
    })

    test('When a survivor tries to have more than 5 pieces of equipment the program warns that it is not possible', ()=> {

        const EquipamentsToAdd = ['Baseball Bat', 'Flashlight', 'Gasoline', 'Axe', 'Pistol']
        EquipamentsToAdd.forEach(equipament => survivor.addEquipament(equipament))
        const sut = survivor.addEquipament('Knife')
        expect(sut).toBe('The maximum number of pieces of equipment is 5');
    })

})