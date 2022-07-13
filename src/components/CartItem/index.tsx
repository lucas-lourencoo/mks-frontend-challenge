import { useAppDispatch } from '../../store/hooks';
import {
  addProductToCart,
  decrementProductAmount,
  removeProductOfCart,
} from '../../store/modules/cart/actions';

import { ICartItem } from '../../store/modules/cart/types';

import Container from './styles';

interface ICartProps {
  item: ICartItem;
}

export default function CartItem({ item }: ICartProps) {
  const dispatch = useAppDispatch();

  function removeItem() {
    dispatch(removeProductOfCart(item.product.id));
  }

  function decrementItem() {
    dispatch(decrementProductAmount(item.product.id));
  }

  function incrementItem() {
    dispatch(addProductToCart(item.product));
  }

  return (
    <Container key={item.product.id}>
      <figure>
        <img src={item.product.photo} alt={item.product.name} />
      </figure>

      <span>{item.product.name}</span>

      <div className='down'>
        <div className='quantity'>
          <p>Qtd.</p>

          <div className='incrementor'>
            <button onClick={decrementItem}>-</button>
            <span>{item.amount}</span>
            <button onClick={incrementItem}>+</button>
          </div>
        </div>
        <span className='itemValue'>
          R${parseInt(item.product.price) * item.amount}
        </span>
      </div>

      <button className='removeItemButton' onClick={removeItem}>
        X
      </button>
    </Container>
  );
}
