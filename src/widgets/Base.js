import { types, getParent, destroy, detach } from 'mobx-state-tree';
import _ from 'lodash';

// const KeyValue = types.model({
//   k: types.identifier(types.string),
//   v: types.string,
// })

// id, viewType, isContainer 设置了就不会变
const WidgetBase = types.model('WidgetBase', {
  id: types.identifier(types.string),
  viewType: types.string,
  isContainer: types.optional(types.boolean, true),
  style: types.optional(types.map(types.string), () => ({})),
  attr: types.optional(types.map(types.string), () => ({})),
  dataAttr: types.optional(types.map(types.string), () => ({})),
  cssText: types.optional(types.string, ''),
  jsText: types.optional(types.string, ''),
  children: types.optional(types.array(types.late(() => WidgetBase)), []), // array of WidgetBase, maybe type.late is better,
  selected: types.optional(types.boolean, false),
  expanded: types.optional(types.boolean, true),
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
        self.style.set(key, val);
      })
    },
    assignAttr(_attr) {
      _.forOwn(_attr, (val, key) => {
        self.attr.set(key, val);
      })
    },
    assignDataAttr(_dataAttr) {
      _.forOwn(_dataAttr, (val, key) => {
        self.dataAttr.set(key, val);
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
