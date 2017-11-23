import { types, getParent, destroy } from 'mobx-state-tree';
import _ from 'lodash';

const KeyValue = types.model({
  k: types.identifier(types.string),
  v: types.string,
})

// id, viewType, isContainer 设置了就会变
const WidgetBase = types.model('WidgetBase', {
  id: types.identifier(types.string),
  viewType: types.string,
  isContainer: types.optional(types.boolean, true),
  style: types.optional(types.map(KeyValue), () => ({})),
  attr: types.optional(types.map(KeyValue), () => ({})),
  dataAttr: types.optional(types.map(KeyValue), () => ({})),
  cssText: types.optional(types.string, ''),
  jsText: types.optional(types.string, ''),
  children: types.optional(types.array(types.late(() => WidgetBase)), []), // array of WidgetBase, maybe type.late is better,
  selected: types.optional(types.boolean, false),
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
        'selected'
      ])
    },
    initConfig(attrConfig, styleConfig) {
      // TODO:
    },
    setSelected(selected) {
      self.selected = selected;
    },
    push(model) {
      self.children.push(model);
    },
    removeChildByIndex(index) {
      destroy(self.children[index]);
    },
    removeChild(model) {
      destroy(model);
    },
    assignStyle(_style) {
      const style = _.assign({}, self.style, _style);
      self.style = style;
    },
    assignAttr(attr) {
      // const attr = _.assign({}, self.style, _attr);
      // self.attr = attr;
      _.forOwn(attr, (val, key) => {
        self.attr.put({ k:key, v: val });
      })
    },
    sortChildren(oldIndex, newIndex) {
      // 拖拽排序
      const list = self.children;
      const moveItem = list.splice(oldIndex, 1)[0];
      list.splice(newIndex, 0, moveItem);
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
