import { useAppDispatch } from '../../store/hooks';
import { addProductToCart } from '../../store/modules/cart/actions';
import { Product } from '../../store/modules/product/types';

import { FiShoppingBag } from 'react-icons/fi';
import Card from './styles';

interface IProductCard {
  product: Product;
}

export default function ProductCard({ product }: IProductCard) {
  const dispatch = useAppDispatch();

  function addProduct() {
    dispatch(addProductToCart(product));
  }

  return (
    <Card key={product.id}>
      <figure>
        <img src={product.photo} alt={product.name} />
      </figure>

      <div className='infos'>
        <span className='cardTitle'>{product.name}</span>
        <strong>R${product.price}</strong>
      </div>

      <p>{product.description}</p>

      <button onClick={addProduct}>
        <FiShoppingBag size={20} /> Comprar
      </button>
    </Card>
  );
}
