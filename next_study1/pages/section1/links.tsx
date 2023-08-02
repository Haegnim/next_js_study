import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Links() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/section1/getStaticProps');
  }, [router]);
  return (
    <main>
      <h1>links</h1>
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        /getStaticProps
      </button>
      {/* link를 대체할 수 있지만 프리패치를 해주지는 않는다.  */}
      {/* <Link href="/section1/getStaticProps"></Link> */}
      {/* 12버전 전까지는 a태그를 같이 사용해야 스타일링이 가능했다. legacyBehavior */}
    </main>
  );
}
