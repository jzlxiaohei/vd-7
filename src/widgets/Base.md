```javascript
 style = {
  color: {
    type: 'color', // string(default), options,
    title: '字体颜色'
  },
 };

attr = {
  text: {
    value: 'button',
  }
  // id
 }
```

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
