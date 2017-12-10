import Base from '../Base';

const viewType = 'container';

function create(id) {
  const inst = Base.create({
    id,
    viewType:  viewType,
    styleConfig: {},
    attrConfig: {},
  })
  // inst.$canAddViewTypes = function(viewTypes) {

  // }
  // inst.$canBeAddedTo = function(containerModel, viewTypes) {

  // }
  // inst.takeOverChildrenEditor = true;
  inst.icon = 'folder-open-o';
  return inst;
}

create.viewType = viewType;


export default create;
