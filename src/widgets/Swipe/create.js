import Base from '../Base';

const viewType = 'swipe';


function create(id) {
  const inst = Base.create({
    id,
    viewType:  viewType,
    styleConfig: {},
    attrConfig: {},
  })
  inst.icon = 'exchange';

  const oldPush = inst.push;
  // mst make inst property readonly...
  Object.defineProperty(inst, 'push', { writable: true });
  inst.push = function(model) {
    model.assignAttr({
      draggable: '$d',
    })
    oldPush(model);
  };
  Object.defineProperty(inst, 'push', { writable: false })

  return inst;
}

create.viewType = viewType;


export default create;
