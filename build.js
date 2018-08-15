const IN = './snippets'
const OUT = './dist'
const fs = require('fs');
require('json5/lib/register')

const callback = name => console.log(`Finished! ${name}`)

// build javascript
// - just copy the javascript.json to the output directory
// let JS_ON = require(IN+'/js_on.json5')
// fs.writeFile(
//   `${OUT}/js_on.json`,
//   JSON.stringify(JS_ON, null, 2),
//   'utf8',
//   callback('ts')
// )

// build typescript
// - just copy the typescript.json to the output directory
let TS = require(IN+'/typescript.json5')
let TSL = require(IN+'/tslint.json5')
fs.writeFile(
  `${OUT}/typescript.json`,
  JSON.stringify({...TSL, ...TS}, null, 2),
  'utf8',
  callback('ts')
)

// build typescript-react
let GQL = require(IN+'/gql-apollo.json5')
let REACT_JEST = require(IN+'/jest_react.json5')
let JEST = require(IN+'/jest.json5')
let REACT_FORM = require(IN+'/react_form.json5')
let REACT_REDUX = require(IN+'/react_redux.json5')
let REACT = require(IN+'/react.json5')

const TS_REACT = {
  ...REACT_FORM,
  ...REACT_REDUX,
  ...REACT,
  ...GQL,
  ...REACT_JEST,
  ...JEST,
  ...TSL,
  ...TS,
}
fs.writeFile(
  `${OUT}/typescriptreact.json`,
  JSON.stringify(TS_REACT, null, 2),
  'utf8',
  callback('ts-react')
)
