describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
});
  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
    assert.equal(cipher.encode ('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
  });
  it('debería retornar "abc" para "DEF" con offset 3',() => {
    assert.equal(cipher.encode ('abc', 3), 'DEF');
  });

  it('debería retornar " " para espacio vacio con offset 3',() => {
    assert.equal(cipher.encode ('', 3), '');
  });
  
 
});

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() => {
    assert.equal(cipher.decode ('HIJKLMNOPQRSTUVWXYZABCDEFG', 33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });
  it('debería retornar "abc" para "XYZ" con offset 3',() => {
    assert.equal(cipher.decode ('abc', 3), 'XYZ');
  });

  it('debería retornar " " para espacio vacio con offset 3',() => {
    assert.equal(cipher.decode ('', 3), '');
  });
  
 
});
