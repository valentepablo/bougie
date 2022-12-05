const ProductList = ({ products }) => {
  return (
    <ul className='grid grid-cols-2 px-4 gap-4'>
      {products.map((product) => (
        <div key={product.nombre} className='border border-zinc-200 p-2'>
          <img src={product.imagen} alt='product artesanal' />
          <p className='text-xl font-semibold'>{product.nombre}</p>
          <p className='text-zinc-500'>Color: {product.color}</p>
          {product.aroma !== null && <p className='text-zinc-500'>Aroma: {product.aroma}</p>}
          <p className='uppercase text-xs mt-2 bg-zinc-200 max-w-max p-1'>{product.linea}</p>
        </div>
      ))}
    </ul>
  );
};

export default ProductList;
