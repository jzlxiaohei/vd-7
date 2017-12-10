import Base from '../Base';

const viewType = 'link';

function create(id) {
  const inst = Base.create({
    id,
    viewType:  viewType,
    styleConfig: {},
    attrConfig: {
      text: {
        value: '',
      },
      link: {
        value: '',
      },
    },
  })

  inst.icon = 'link';
  return inst;
}

create.viewType = viewType;


export default create;
