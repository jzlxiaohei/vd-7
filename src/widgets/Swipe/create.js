import Base from '../Base';

const viewType = 'swipe';

function create(id) {
  const inst = Base.create({
    id,
    viewType:  viewType,
    styleConfig: {},
    attrConfig: {},
  })

  return inst;
}

create.viewType = viewType;


export default create;
