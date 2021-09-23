const icaotransliteration = require('icaotransliteration');

test('strips diacritics', () => {
  expect(icaotransliteration('ä laФ Є حسن')).toBe('a<laF<IE<xhsn');
});

