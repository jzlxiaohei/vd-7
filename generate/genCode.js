
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
        result[key] = rTable.getPreview(key);
      }
    })
  })
  return result;
}

const previewFiles = getPreviews(json);

console.log(previewFiles);
function indent(deep) {
  return _.repeat(' ', 2 * deep);
}

function clearProperty(obj) {
  const result = {};
  _.forOwn(obj, (v, k) => {
    if (v !== '') {
      result[k] = v;
    }
  })
  return result;
}

function viewTypeToName(viewType) {
  return viewType[0].toUpperCase() + viewType.substr(1);
}


function BuildJsx(json, deep = 0) {
  const viewType = json.viewType;
  const compName = viewTypeToName(viewType);
  const containerIndent = indent(deep);
  const chIndent = indent(deep + 1);
  let propsStr = '';
  const otherProps = {};
  if(json.attr.id) {
    otherProps.id = json.attr.id;
  }
  if(!_.isEmpty(json.style)) {

    const style = clearProperty(json.style);
    if(!_.isEmpty(style)) {
      otherProps.style = style;
    }
  }
  // otherProps.onClick = this.handleClick;

  const attr =  _.omit(json.attr, ['id']);
  if(!_.isEmpty(otherProps)) {
    const otherPropsStr = stringifyObject(clearProperty(otherProps), { indent:'' });
    propsStr = `otherProps={${otherPropsStr}}`;
  }
  if(!_.isEmpty(attr)) {
    const attrStr = stringifyObject(clearProperty(attr), { indent:'' });
    propsStr = propsStr + ` attr={${attrStr}}`//propsStr + ` {...${attrStr}}`;
  }

  if (json.children.length) {
    return '' +
`${containerIndent}<${compName} ${propsStr}>
${json.children.map(ch => chIndent + BuildJsx(ch, deep + 1)).join('\n')}
${containerIndent}</${compName}>`
  }
  return `<${compName} ${propsStr} />`;
}
const jsx = BuildJsx(json);

const importStr = _.keys(previewFiles).map(viewType => {
  const compName = viewTypeToName(viewType);
  return `import ${compName} from '${previewFiles[viewType]}'`
}).join('\n');

const fileContent = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  ${importStr}

  class Vd extends React.Component {
    render() {
      return (
      ${jsx}
      );
    }
  }

  ReactDOM.render(
    <Vd />,
    document.getElementById('root'),
  )
`
console.log(fileContent);
export default fileContent;
