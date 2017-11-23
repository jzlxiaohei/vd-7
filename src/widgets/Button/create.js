import Base from '../Base';

const viewType = 'button';

function create(id) {
  const instance = Base.create({
    id,
    viewType:  viewType,
    isContainer: false,
  });
  // instance.attr.put({key: 'text', value: 'button'})
  instance.assignAttr({
    text: 'button',
  })
  return instance;
}

create.viewType = viewType;


export default create;
