import './require-hook';

import json from './code/test.json';
import RegisterTable from 'widgets/RegisterTable';
import initRegisterTable from 'widgets/initRegisterTable';
import _ from 'lodash';
import stringifyObject from './utils/stringify-object';

const rTable = new RegisterTable();
initRegisterTable(rTable);


function getPreviews(json) {
  const result = {};
  const viewType = json.viewType;
  if(!(viewType in result)) {
    result[viewType] = rTable.getPreview(viewType);
  }
  json.children.forEach(ch => {
    const childResult = getPreviews(ch);
    _.forOwn(childResult, (val, key) => {
      if(!(key in result)) {
        result[key] = rTable.getPreview(viewType);
      }
    })
  })
  return result;
}

const result = getPreviews(json);

function indent(deep) {
  return _.repeat(' ', 2 * deep);
}

function BuildJsx(json, deep = 0) {
  const viewType = json.viewType;
  const elName = viewType[0].toUpperCase() + viewType.substr(1);
  const containerIndent = indent(deep);
  const chIndent = indent(deep + 1);
  const styleStr = stringifyObject(json.style, { indent:'' });
  const attrStr = stringifyObject(json.attr, { indent:'' });
  if (json.children.length) {
    return '' +
`${containerIndent}<${elName} style={${styleStr}} {...${attrStr}}>
${json.children.map(ch => chIndent + BuildJsx(ch, deep + 1)).join('\n')}
${containerIndent}</${elName}>`
  }
  return `<${elName} style={${styleStr}} {...${attrStr}} />`;
}
const jsx = BuildJsx(json);
console.log(jsx);
console.log(result);
