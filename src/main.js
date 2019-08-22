if (document) {
  const root = document.documentElement
}

const setProperty = (key, value) => {
  const initialValue = keys.startsWith("--") ? keys : "--" + keys
  root.style.setProperty(initialValue, value)
}

const changeCSSCustomVariable = (keys, value = null) => {
  if (!!root) {
    throw Error('Document not found')
  }
  if (typeof keys == 'string'){
    setProperty(keys, value)
  }
  if(typeof keys == 'object') {
    Object.keys(keys).forEach(name => {
      setProperty(name, keys[name])
    })
  }
}

export default changeCSSCustomVariable
