(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.eat = factory());
}(this, function () { 'use strict';

  if (document) {
    const root = document.documentElement;
  }

  const setProperty = (key, value) => {
    const initialValue = keys.startsWith("--") ? keys : "--" + keys;
    root.style.setProperty(initialValue, value);
  };

  const changeCSSCustomVariable = (keys, value = null) => {
    if (!!root) {
      throw Error('Document not found')
    }
    if (typeof keys == 'string'){
      setProperty(keys, value);
    }
    if(typeof keys == 'object') {
      Object.keys(keys).forEach(name => {
        setProperty(name, keys[name]);
      });
    }
  };

  return changeCSSCustomVariable;

}));
