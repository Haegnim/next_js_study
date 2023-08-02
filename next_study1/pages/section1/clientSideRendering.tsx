import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('../../components/section1/NoSSR'), {
  ssr: false,
});

const Example: NextPage = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const delayInSeconds = 2;
    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    ).then((result) => setData(result));
  }, []);
  return (
    <main>
      <h1>Client-side data fetching</h1>
      <p>값: {data}</p>

      <h1>no SSR</h1>
      <NoSSR />
    </main>
  );
};

export default Example;

//MEMO:window나 documents를 useEffect 밖에서 사용할 때 오류 메세지를 많이 보게 될것이다.
