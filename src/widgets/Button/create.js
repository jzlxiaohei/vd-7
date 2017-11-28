import Base from '../Base';

const viewType = 'button';

function create(id) {
  const instance = Base.create({
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
      }
    }
  });

  return instance;
}

create.viewType = viewType;


export default create;
