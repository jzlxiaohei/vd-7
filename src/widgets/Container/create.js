import Base from '../Base';

const viewType = 'container';

function create(id) {
  const inst = Base.create({
    id,
    viewType:  viewType,
    styleConfig: {},
    attrConfig: {
      inline: {
        type: 'bool',
        value: false,
      },
    },
  })

  // inst.takeOverChildrenEditor = true;
  inst.icon = 'folder-open-o';
  return inst;
}

create.viewType = viewType;


export default create;
