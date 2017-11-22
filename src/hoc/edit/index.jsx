import { hoistStatics } from 'recompose';

function edit(options) {
  const hoc = function(OriginComponent) {
    return OriginComponent;
  }

  return hoistStatics(hoc);
}

export default edit;
