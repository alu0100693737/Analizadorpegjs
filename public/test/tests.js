
var assert = chai.assert;

suite('Analizador Descendente Recursivo Predictivo',
function() {
    test('Suma y asignacion: ', function() {
original.value = "a = 2+3";
var wait = '[\n  {\n    "type": "=",\n    "left": {\n      "type": "ID",\n      "value": "a"\n    },\n    "right": {\n      "type": "+",\n      "left": {\n        "type": "NUM",\n        "value": 2\n      },\n      "right": {\n        "type": "NUM",\n        "value": 3\n      }\n    }\n  }\n]' ;

main ();
       assert.deepEqual(OUTPUT.innerHTML, wait);
    });

test('If then: ', function() {
original.value = "a = 4*2; if a > 6 then p a";
var wait = '[\n  [\n    {\n      "type": "=",\n      "left": {\n        "type": "ID",\n        "value": "a"\n      },\n      "right": {\n        "type": "*",\n        "left": {\n          "type": "NUM",\n          "value": 4\n        },\n        "right": {\n          "type": "NUM",\n          "value": 2\n        }\n      }\n    }\n  ],\n  {\n    "type": "IF",\n    "left": {\n      "type": "&gt;",\n      "left": {\n        "type": "ID",\n        "value": "a"\n      },\n      "right": {\n        "type": "NUM",\n        "value": 6\n      }\n    },\n    "right": {\n      "type": "P",\n      "value": {\n        "type": "ID",\n        "value": "a"\n      }\n    }\n  }\n]';
main ();
       assert.deepEqual(OUTPUT.innerHTML, wait);
    });
test('While do: ', function() {
original.value = "while a != 1 do b = 4";
var wait = '[\n  {\n    "type": "WHILE",\n    "left": {\n      "type": "!=",\n      "left": {\n        "type": "ID",\n        "value": "a"\n      },\n      "right": {\n        "type": "NUM",\n        "value": 1\n      }\n    },\n    "right": {\n      "type": "=",\n      "left": {\n        "type": "ID",\n        "value": "b"\n      },\n      "right": {\n        "type": "NUM",\n        "value": 4\n      }\n    }\n  }\n]';
main ();
       assert.deepEqual(OUTPUT.innerHTML, wait);
    });
test('Error: ', function() {
original.value = "a = 3 + (4; b = 5";
main ();
       assert.match(OUTPUT.innerHTML, /Error/);
    });
});