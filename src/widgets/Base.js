import { types, getParent, destroy } from 'mobx-state-tree';
import _ from 'lodash';


const WidgetBase = types.model('WidgetBase', {
  id: types.identifier(types.string),
  viewType: types.string,
  style: types.frozen,
  attr: types.frozen,
  dataAttr: types.frozen,
  cssText: types.string,
  jsText: types.string,
  children: types.array(types.late(() => WidgetBase)), // array of WidgetBase, maybe type.late is better,
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
    afterCreate() {
      console.log(self);
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
    assignAttr(_attr) {
      const attr = _.assign({}, self.style, _attr);
      self.attr = attr;
    },
    sortChildren(oldIndex, newIndex) {
      // 拖拽排序
      const list = self.children;
      const moveItem = list.splice(oldIndex, 1)[0];
      list.splice(newIndex, 0, moveItem);
    }
  }
});

WidgetBase.createDefaultInstance = function(
  {id , viewType, ...others } = {},
  { isContainer, attrConfig, styleConfig } = {}
) {
  const instance =  WidgetBase.create({
    id,
    viewType,
    style: {},
    attr: {},
    dataAttr: {},
    cssText: '',
    jsText: '',
    isContainer: true,
    children: [],
    ...others,
  });
  instance.isContainer = isContainer;
  instance.initConfig(attrConfig, styleConfig);
  return instance;
}
export default WidgetBase;
