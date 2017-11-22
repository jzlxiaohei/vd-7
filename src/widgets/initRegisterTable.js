import Button from './Button';

export default function init(registerTable) {
  if(module.hot) {
    registerTable.clear();
  }
  registerTable.register(Button);
}
