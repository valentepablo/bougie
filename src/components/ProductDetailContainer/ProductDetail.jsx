const ProductDetail = ({ product }) => {
  return (
    <div className='text-slate-200 p-4'>
      <img src={`${product.imagen}`} alt={`${product.nombre}`} />
      <h2 className='text-3xl mt-3'>{product.nombre}</h2>
      <p className='capitalize mt-2 py-2 border-t border-zinc-800'>{product.linea}</p>
      <p className='mt-4 text-zinc-400'>{product.descripcion}</p>
    </div>
  );
};

export default ProductDetail;
