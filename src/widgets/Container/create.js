import Base from '../Base';

const viewType = 'container';

function create(id) {
  const inst = Base.create({
    id,
    viewType:  viewType,
  })
  // inst.$canAddViewTypes = function(viewTypes) {

  // }
  // inst.$canBeAddedTo = function(containerModel, viewTypes) {

  // }
  return inst;
}

create.viewType = viewType;


export default create;
