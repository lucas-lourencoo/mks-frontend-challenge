import { useEffect } from 'react';
import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProductDataRequest } from '../store/modules/product/actions';
import Skeleton from 'react-loading-skeleton';

import { Container } from '../styles';
import 'react-loading-skeleton/dist/skeleton.css';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductDataRequest());
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className='cardsGrid'>
          {products.length ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <>
              <Skeleton height='30rem' />
              <Skeleton height='30rem' />
              <Skeleton height='30rem' />
              <Skeleton height='30rem' />
            </>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
