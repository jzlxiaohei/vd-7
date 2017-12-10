export function findModelById(root, id) {
  if(root.id === id) {
    return root;
  }
  for(let i=0; i < root.children.length; i++){
    const item = root.children[i];
    const foundOne = findModelById(item, id)
    if (foundOne) {
      return foundOne;
    }
  }

  return null;
}
