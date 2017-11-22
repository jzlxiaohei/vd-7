import Base from '../Base';

const viewType = 'container';

function create(id) {
  return Base.create({
    id,
    viewType:  viewType,
  })
}

create.viewType = viewType;


export default create;
