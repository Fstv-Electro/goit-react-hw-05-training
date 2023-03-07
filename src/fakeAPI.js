const products = [
  { id: 'h-1', name: 'Coca-cola' },
  { id: 'h-2', name: 'Pepsi' },
  { id: 'h-3', name: 'Fanta' },
  { id: 's-1', name: 'Sandora Multi' },
  { id: 's-2', name: 'Sandora Grapefruit' },
  { id: 's-3', name: 'Sandora Banana' },
  { id: 's-4', name: 'Sandora Totamo' },
  { id: 'p-1', name: 'Beer' },
  { id: 'p-2', name: 'Tequilla' },
  { id: 'p-3', name: 'Champagne' },
];

export const getProducts = () => {
  return products;
};

export const getProductById = productId => {
  return products.find(product => product.id === productId);
};
