import Container from './Container';
import Button from './Button';
import Swipe from './Swipe'
import Picture from './Picture';

export default function init(registerTable) {
  if(module.hot) {
    registerTable.clear();
  }
  registerTable.register(Button);
  registerTable.register(Container);
  registerTable.register(Swipe);
  registerTable.register(Picture);
}
