import Script from 'next/script';
import { Fragment } from 'react';
import Header from '../components/common/Header';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <h1>Hello!</h1>
    </Fragment>
  );
}
