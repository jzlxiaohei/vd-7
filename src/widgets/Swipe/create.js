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

  return inst;
}

create.viewType = viewType;


export default create;
