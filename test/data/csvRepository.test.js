import repository from '../../src/data/csvRepository';
describe('csv test', () => {
    test('parse csv', () => {
        const csv = new repository();
        console.log("hola")
        repository.parseCsv()
    });
});