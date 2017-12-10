import Base from '../Base';

const viewType = 'button';

function create(id) {
  const inst = Base.create({
    id,
    viewType:  viewType,
    isContainer: false,
    attrConfig: {
      text: {
        value: 'button text',
      }
    },
    styleConfig: {
      color: {
        type: 'color',
        value: 'red',
      },
      backgroundColor: {
        type: 'color',
        value: '',
      }
    }
  });
  inst.icon = 'square';

  return inst;
}

create.viewType = viewType;


export default create;
