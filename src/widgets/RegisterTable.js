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

  create(viewType) {
    const id = `v5_${shortid.generate()}`;
    const create = this.getCreate(viewType);
    return create(id);
  }

  clear() {
    this.table = {};
  }
}



export default RegisterTable;
