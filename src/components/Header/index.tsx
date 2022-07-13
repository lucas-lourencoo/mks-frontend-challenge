import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import { useAppSelector } from '../../store/hooks';
import { FaShoppingCart } from 'react-icons/fa';
import { Container } from './styles';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const cart = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    let count: number = 0;
    cart.map((item) => {
      count = item.amount + count;
    });
    setTotal(count);
  }, [cart]);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  return (
    <Container>
      <div className='headerCenter'>
        <div className='logo'>
          <h1>
            MKS<span>Sistemas</span>
          </h1>
        </div>

        <button onClick={openSidebar}>
          <FaShoppingCart />
          {total}
        </button>
      </div>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </Container>
  );
}
