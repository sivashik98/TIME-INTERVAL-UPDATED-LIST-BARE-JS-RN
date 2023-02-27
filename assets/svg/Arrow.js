import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

import { commonColors, commonStyles } from '../../src/styles';
import { compose } from '../../src/helpers/styles';

function ArrowSVG({
  size,
  color,
  direction = 'right',
  containerStyles,
  ...props
}) {
  const deg = { left: 180, bottom: 90, right: 0, top: 270 };

  return (
    <View
      style={[commonStyles.rotate(deg[direction]), compose(containerStyles)]}>
      <Svg
        width={size ? size - 2 : 12}
        height={size ? size : 14}
        viewBox="0 0 7 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M1 8l4-3.5L1 1"
          stroke={color ? color : commonColors.black}
          strokeWidth={1.7}
          strokeLinecap="round"
          {...props}
        />
      </Svg>
    </View>
  );
}

export default ArrowSVG;
