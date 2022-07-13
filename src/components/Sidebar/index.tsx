import { NextPage } from 'next';
import { Container } from './styles';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect, useState } from 'react';
import CartItem from '../CartItem';
import { eraseAllCart } from '../../store/modules/cart/actions';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const Sidebar: NextPage<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) => {
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState(0);
  const cart = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    let count: number = 0;
    cart.map((item) => {
      count = parseInt(item.product.price) * item.amount + count;
    });
    setTotal(count);
  }, [cart]);

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function eraseCart() {
    setIsSidebarOpen(false);
    dispatch(eraseAllCart());
  }

  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <header>
        <h2>
          Carrinho <br /> de compras
        </h2>
        <button onClick={closeSidebar}>X</button>
      </header>

      <div className='cartItems'>
        {cart.map((item) => (
          <CartItem item={item} key={item.product.id} />
        ))}
      </div>

      <footer>
        <div className='total'>
          <span>Total:</span>
          <span>R$ {total}</span>
        </div>

        <button onClick={eraseCart}>Finalizar compra</button>
      </footer>
    </Container>
  );
};

export default Sidebar;
