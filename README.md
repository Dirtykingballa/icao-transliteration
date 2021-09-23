
# icaotransliteration.js

Simple library to transliterate strings to ICAO characters. Compare [https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf](https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf)

## Install

```
npm install icao-transliteration
```

## Usage

ES module

```javascript
import icaotransliteration from 'icao-transliteration';
icaotransliteration('ä laФ Є حسن'); // => 'a<laF<IE<xhsn
```

node.js CommonJS

```javascript
let icaotransliteration = require('icao-transliteration');
icaotransliteration('ä laФ Є حسن');
```

AMD

```javascript
require(['icao-transliteration'], function(icaotransliteration){
  icaotransliteration('ä laФ Є حسن');
});
```

browser

```html
<script src="../icaotransliteration.js"></script>
<script>
    document.write(icaotransliteration('ä laФ Є حسن'));
</script>
```

You can use the `icaotransliteration.characters` object to access the translation table or to change the mapping:

```javascript
icaotransliteration.characters['Ω'] = 'O';

// modify the behavior for special need
_.extend(icaotransliteration.characters,
  {'Ä': 'AE'});
```

## Details

Is is a lookup table taken from [https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf](https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf) packaged for node and browser.
