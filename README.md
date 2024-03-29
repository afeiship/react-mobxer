# react-mobxer
> React mobx manager.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-mobxer
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-mobxer/dist/style.css";

  // or use sass
  @import "~@jswork/react-mobxer/dist/style.scss";

  // customize your styles:
  $react-mobxer-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactMobxer from '@jswork/react-mobxer';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactMobxer />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-mobxer/

## license
Code released under [the MIT license](https://github.com/afeiship/react-mobxer/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-mobxer
[version-url]: https://npmjs.org/package/@jswork/react-mobxer

[license-image]: https://img.shields.io/npm/l/@jswork/react-mobxer
[license-url]: https://github.com/afeiship/react-mobxer/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-mobxer
[size-url]: https://github.com/afeiship/react-mobxer/blob/master/dist/react-mobxer.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-mobxer
[download-url]: https://www.npmjs.com/package/@jswork/react-mobxer
