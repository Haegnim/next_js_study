import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
// 12버전 : LegacyImage
import LegacyImage from 'next/legacy/image';
import example from '/public/example.jpg';
const Images: NextPage = () => {
  return (
    <main>
      {/* loading check */}
      {/*<section style={{ height: '500vh' }}>long long content</section>*/}

      <hr style={{ margin: '32px 0' }} />

      <h1>next/image</h1>
      {/* MEMO : 
      파일을 static하게 import 하기 때문에 다양한 최적화를 지원해줄 수 있다.
      - quality : 이미지의 퀄리티를 조절가능 기본은 75
      - width/height : 이미지 크기 조절
      - placeholder:blur : 로딩되는 동안 블러 이미지를 보여줌
      */}
      <figure>
        <Image
          src={example}
          alt="v13 image"
          width={500}
          height={100}
          // placeholder="blur"
          quality={100}
        />
        <figcaption>v13 image</figcaption>
      </figure>
      {/* MEMO : 
          외부링크를 사용할 경우 next는 이미지의 크기를 알 수 없기 때문에 이미지의 크기를 명시해줘야한다. 
          명시해줘야 정적으로 이미지를 제공할 수 있다.
          - fill : 이미지의 크기를 모르겠다면 부모요소의 크기와 맞춤
      */}
      <figure style={{ position: 'relative', width: '500px', height: '100px' }}>
        <Image
          src="/example.jpg"
          alt="v13 fill"
          // width={500}
          // height={100}
          fill
          style={{ objectFit: 'cover' }}
        />
      </figure>
    </main>
  );
};

export default Images;
