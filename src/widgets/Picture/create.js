import Base from '../Base';

const viewType = 'picture';

function create(id) {
  const inst = Base.create({
    id,
    viewType:  viewType,
    isContainer: false,
    styleConfig: {
    },
    attrConfig: {
      url: {
        value: 'https://avatars1.githubusercontent.com/u/1884248?s=460&v=4',
      },
      link: {
        value: '',
      },
    },
  })
  inst.icon = 'picture-o';
  return inst;
}

create.viewType = viewType;


export default create;
