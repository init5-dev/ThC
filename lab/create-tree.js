items = [
  "/about",
  "/blog",
  "/contact",
  "/resources/library",
  "/resources/links",
  "/resources/links/por paises",
  "/"
]

const createTree = (items, root = '/') => {
  const tree = [root]

  for (let item of items) {
    const itemElements = item.split('/').filter(el => el.length)

    if (!itemElements.length) continue

    if (itemElements.length > 1) {
      console.log(JSON.stringify(itemElements, null, 2))
      const subitems = itemElements.join('/')

      // console.log('SUBITEMS:', subitems)
      const subtree = createTree(itemElements.slice(1), itemElements[0])
      console.log('SUBTREE:', subtree)
      tree.push(subtree)
    } else {
      tree.push(item)
    }
  }

  return tree
}

const tree = createTree(items)
// console.log(JSON.stringify(tree, null, 2))