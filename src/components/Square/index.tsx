import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {View} from 'react-native';

interface Props {
  colors: Array<string>;
}

export interface RefSquare {
  getCurrentColor: () => string;
}

const Square: React.ForwardRefRenderFunction<RefSquare, Props> = (
  {colors},
  ref,
) => {
  const [currentColor] = useState<string>(() => {
    if (!colors.length) {
      return 'blue';
    }

    const randomNumber = Math.random() * colors.length;
    const index = Math.floor(randomNumber);
    return colors[index];
  });

  useImperativeHandle(
    ref,
    () => ({
      getCurrentColor: () => currentColor,
    }),
    [currentColor],
  );

  return (
    <View style={{width: 50, height: 50, backgroundColor: currentColor}} />
  );
};

export default forwardRef(Square);
