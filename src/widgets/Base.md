```javascript
 style = {
  color: {
    type: 'color', // string(default), bool, color
    title: '字体颜色'
  },
 };

attr = {
  text: {
    value: 'button',
  }
  inline: {
    type: 'bool',
    value: false,
  },
  cols: {
    value: 0,
    show(model) {
      return model.attr.get('inline'); // attr 是 observerMap
    },
  }
 }
```

attr 和style 的配置一样，意义不一样

```javascript
 shortcut: [
  { title: '底部固定', apply(model) {
    model.assignStyle({
      position: fixed,
      bottom: 0,
     })
  }}
 ]
```
