import { types, getParent, destroy, detach } from 'mobx-state-tree';
import _ from 'lodash';

// const KeyValue = types.model({
//   k: types.identifier(types.string),
//   v: types.string,
// })


function getDefaultValueByConfig(config) {
  const result = {};
  const keys = _.keys(config);
  keys.forEach((key) => {
    result[key] = ('value' in config[key]) ? config[key].value : '';
  });
  return result;
}

function returnEmptyObj() {
  return {}
}

const BasicValue = types.union(types.string, types.boolean, types.number);

// id, viewType, isContainer 设置了就不会变
const WidgetBase = types.model('WidgetBase', {
  id: types.identifier(types.string),
  viewType: types.string,
  isContainer: types.optional(types.boolean, true),
  style: types.optional(types.map(BasicValue), returnEmptyObj),
  attr: types.optional(types.map(BasicValue), returnEmptyObj),
  dataAttr: types.optional(types.map(types.string), returnEmptyObj),
  cssText: types.optional(types.string, ''),
  jsText: types.optional(types.string, ''),
  children: types.optional(types.array(types.late(() => WidgetBase)), []), // array of WidgetBase, maybe type.late is better,
  selected: types.optional(types.boolean, false),
  expanded: types.optional(types.boolean, true),
  // attrConfig: types.optional(types.frozen, returnEmptyObj),
  // styleConfig: types.optional(types.frozen, returnEmptyObj),
})
.views(self => {
  return {
    getParent() {
      let result = null;
      try {
        result = getParent(self, 2);
      } catch(e) {}
      return result;
    },
  }
})
.actions(self => {
  return {
    postProcessSnapshot(snapshot) {
      return _.omit(snapshot, [
        'selected', 'expanded',
      ])
    },
    initConfig(attrConfig, styleConfig) {
      // TODO:
      const attr = getDefaultValueByConfig(
        {
          id: { title: 'Custom ID'},
          ...attrConfig,
        }
      );
      const style = getDefaultValueByConfig(styleConfig);
      self.assignAttr(attr);
      self.assignStyle(style);
    },
    setExpanded(expanded) {
      self.expanded = expanded;
    },
    setSelected(selected) {
      self.selected = selected;
    },
    push(model) {
      self.children.push(model);
    },
    remove() {
      const parent = self.getParent();
      parent.removeChild(self);
    },
    removeChildByIndex(index) {
      detach(self.children[index]);
    },
    removeChild(model) {
      detach(model);
    },
    destroyChild(model) {
      destroy(model);
    },
    assignStyle(_style) {
      _.forOwn(_style, (val, key) => {
        if(val === '$d') {
          self.style.delete(key)
        } else {
          self.style.set(key, val);
        }
      })
    },
    assignAttr(_attr) {
      _.forOwn(_attr, (val, key) => {
        if(val === '$d') {
          self.attr.delete(key)
        } else {
          self.attr.set(key, val);
        }
      })
    },
    assignDataAttr(_dataAttr) {
      _.forOwn(_dataAttr, (val, key) => {
        if(val === '$d') {
          self.dataAttr.delete(key)
        } else {
          self.dataAttr.set(key, val);
        }
      })
    },
    // sortChildren(oldIndex, newIndex) {
    //   // 拖拽排序
    //   const list = self.children;
    //   const moveItem = list.splice(oldIndex, 1)[0];
    //   list.splice(newIndex, 0, moveItem);
    // },
    reassignChildren(children) {
      self.children = children;
    }
  }
});

const oldCreate = WidgetBase.create.bind(WidgetBase);
WidgetBase.create = function(initialValue) {
  const { styleConfig, attrConfig } = initialValue;

  if(!attrConfig) {
    throw new Error('attrConfig is required. use empty object ({}) if not config');
  }

  if(!styleConfig) {
    throw new Error('styleConfig is required. use empty object ({}) if not config');
  }

  const inst = oldCreate(
    _.omit(initialValue, ['styleConfig', 'attrConfig'])
  );
  const _attrConfig = {
    ...attrConfig,
    draggable: { type: 'bool', value: false },
  };
  console.log(_attrConfig);
  inst.attrConfig = _attrConfig;
  inst.styleConfig = styleConfig;
  inst.initConfig(inst.attrConfig, inst.styleConfig);
  return inst;
}

// WidgetBase.getDefaultSnapshot = function() {
//   return {
//     style: {},
//     attr: {},
//     dataAttr: {},
//     cssText: '',
//     jsText: '',
//     isContainer: true,
//     selected: false,
//     children: [],
//   }
// };

// WidgetBase.createDefaultInstance = function(
//   {id , viewType, ...others } = {},
//   { isContainer = true, attrConfig, styleConfig } = {}
// ) {
//   const instance =  WidgetBase.create({
//     id,
//     viewType,
//     style: {},
//     attr: {},
//     dataAttr: {},
//     cssText: '',
//     jsText: '',
//     isContainer: true,
//     children: [],
//     ...others,
//   });
//   instance.isContainer = isContainer;
//   instance.initConfig(attrConfig, styleConfig);
//   return instance;
// }

export default WidgetBase;
