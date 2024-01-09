// test dadojs with jest
const dadojs = require('../dist/cjs/index.js');

// test para probar las caras de un dado
test('test dadojs', () => {
    expect(dadojs.lanzar()).toBeGreaterThanOrEqual(1);
    expect(dadojs.lanzar()).toBeLessThanOrEqual(6);
});

