import _ from 'lodash';
import shortid from 'shortid';

class RegisterTable {

  table = {}

  register(widget) {
    const viewType = widget.create.viewType;
    if (process.env.NODE_ENV !== 'production') {
      if(!viewType) {
        throw new Error(`viewType is required. Got ${viewType}`);
      }
      if (viewType in this.table) {
        throw new Error(`widget with viewType: ${viewType} has been registered!`);
      }
    }
    this.table[viewType] = widget;
  }

  getEdit(viewType) {
    return this.table[viewType].Edit;
  }

  getPreview(viewType) {
    return this.table[viewType].Preview;
  }

  // getCreate(viewType) {
  //   return this.table[viewType].create;
  // }

  getAllViewTypes() {
    return _.keys(this.table);
  }

  create(viewType) {
    if(!(viewType in this.table)) {
      throw new Error(`can not find viewType:${viewType}. use registerTable.getAllViewTypes to check all existed viewTypes`);
    }
    const id = `v7_${shortid.generate()}`;
    const create = this.table[viewType].create;
    return create(id);
  }

  clear() {
    this.table = {};
  }
}



export default RegisterTable;
