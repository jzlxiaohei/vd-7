import Base from '../Base';

const viewType = 'button';

function create(id) {
  return Base.create({
    id,
    viewType:  viewType,
    isContainer: false,
    attr: {
      text: 'button',
    }
  });
  // instance.attr.put({key: 'text', value: 'button'})
}

create.viewType = viewType;


export default create;
