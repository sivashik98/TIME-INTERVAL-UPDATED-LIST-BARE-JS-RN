import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

import { compose } from '../../src/helpers/styles';

function AnchorSVG({ containerStyles, size = 14 }) {
  return (
    <View style={compose(containerStyles)}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M10.826.25c-.685 0-1.37.26-1.892.782L6.025 3.94a2.676 2.676 0 000 3.784.286.286 0 10.404-.404 2.096 2.096 0 010-2.98l2.905-2.91c.83-.829 2.156-.829 2.985 0 .829.83.829 2.156 0 2.985l-1.817 1.812a.284.284 0 10.404.4l1.812-1.812A2.676 2.676 0 0010.826.25h0zM8.246 5.19a.284.284 0 00-.173.488c.829.83.829 2.152 0 2.98l-2.905 2.91a2.102 2.102 0 01-2.985 0 2.102 2.102 0 010-2.985L4 6.77a.284.284 0 10-.404-.4L1.784 8.182a2.676 2.676 0 003.784 3.784l2.909-2.909a2.676 2.676 0 000-3.784.284.284 0 00-.231-.084h0z"
          fill="#1A98E4"
          stroke="#1A98E4"
          strokeWidth={0.5}
        />
      </Svg>
    </View>
  );
}

export default AnchorSVG;
