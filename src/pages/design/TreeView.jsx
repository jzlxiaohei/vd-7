import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'
import _ from 'lodash';
import  SortableTree from 'react-sortable-tree';
import FormInput from 'comps/form-item/Input';

function getTreeData(json, { isRoot = false } = {}) {
  const treeData = {
    title: json.viewType,
    subtitle: json.viewType,
    expanded: json.expanded,
    selected: json.selected,
    id: json.id,
    isRoot,
    origin: json,
  };
  if(json.children.length) {
    treeData.children = json.children.map(ch => getTreeData(ch))
  }
  return treeData;
}

function findById(treeData, id) {
  for(let i = 0; i < treeData.length; i++) {
    const item = treeData[i]
    if(item.id === id) {
      return item;
    }
    if(item.children) {
      const childrenFindResult = findById(item.children, id);
      if(childrenFindResult) {
        return childrenFindResult;
      }
    }
  }
  return null;
}

@observer
class TreeView extends React.Component {

  static propTypes = {
    treeRoot: PropTypes.shape({
      children: PropTypes.shape({
        map: PropTypes.func.isRequired,
      }),
      expanded: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
    setSelectedModel: PropTypes.func.isRequired,
  }

  convertToTreeData() {
    const treeData = getTreeData(this.props.treeRoot, { isRoot: true });
    return [
      treeData,
    ]
  }

  handleTreeDataChange = () => {}

  handleMoveNode = (data) => {
    const { prevPath, nextPath, nextTreeIndex, prevTreeIndex, treeData, node } = data;
    console.log(data);
    // mainContainer 不能拖拽，所以这里 所以的path，至少有2个元素
    if (nextTreeIndex === prevTreeIndex) {
      return;
    }
    const prevParentId = _.nth(prevPath, -2);
    const nextParentId = _.nth(nextPath, -2);
    if (prevParentId === nextParentId) {
      const parentNode = findById(treeData, nextParentId);
      parentNode.origin.reassignChildren(parentNode.children.map(ch => ch.origin))
    } else {
      const nextParentNode = findById(treeData, nextParentId);
      const prevParentNode = findById(treeData, prevParentId);
      prevParentNode.origin.removeChild(node.origin);
      nextParentNode.origin.reassignChildren(nextParentNode.children.map(ch => ch.origin))

    }
  }

  handleVisibilityToggle = (data) => {
    data.node.origin.setExpanded(data.expanded);
  }

  nodeCanDrag = item => {
    if(item.node.isRoot) {
      return false;
    }
    return true;
  }

  nodeCanDrop = item => {
    if(item.nextPath.length <= 1) {
      return false;
    }
    return true;
  }

  handleSubtitleChange = (data, model) => {
    model.assignAttr({
      [data.path]: data.value,
    })
  }

  render() {
    return (
      <SortableTree
        treeData={this.convertToTreeData()}
        onChange={treeData => this.handleTreeDataChange({ treeData })}
        onVisibilityToggle={this.handleVisibilityToggle}
        onMoveNode={this.handleMoveNode}
        getNodeKey={item => item.node.id}
        canDrag={this.nodeCanDrag}
        canDrop={this.nodeCanDrop}
        rowHeight={80}
        generateNodeProps={rowInfo => {
          const origin = rowInfo.node.origin;
          return {
            subtitle() {
              const id = origin.attr.get('id');
              if(id) {
                return `#${id}`;
              }
              return '';
            },
            className: rowInfo.node.selected ?
                `selected widget-tree-item` : 'widget-tree-item',
            onClick: () => {
                // TODO: select rowInfo.node.origin ;
                this.props.setSelectedModel(origin);
              }
            }
          }
        }
      />
    )
  }
}

export default TreeView;
