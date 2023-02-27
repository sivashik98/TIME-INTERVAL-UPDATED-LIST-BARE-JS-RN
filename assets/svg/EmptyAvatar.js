import * as React from 'react';
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';
import { View } from 'react-native';

import { compose } from '../../src/helpers/styles';

/* SVGR has dropped some elements not supported by react-native-svg: filter */

function EmptyAvatar({ size = 70, containerStyles }) {
  return (
    <View style={compose(containerStyles)}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 68 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Circle cx={34} cy={34} r={34} fill="#CCDEFF" />
        <G
          filter="url(#filter0_d_4192:2690)"
          fillRule="evenodd"
          clipRule="evenodd">
          <Path
            d="M34 39.44c6.384 0 11.56-5.632 11.56-12.58 0-6.947-5.176-12.58-11.56-12.58-6.385 0-11.56 5.633-11.56 12.58 0 6.948 5.175 12.58 11.56 12.58zm0 5.439c-10.179 0-19.313 4.473-25.544 11.56C14.687 63.527 23.821 68 34 68s19.313-4.472 25.544-11.56C53.313 49.352 44.18 44.88 34 44.88z"
            fill="#fff"
          />
          <Path
            d="M34 39.44c6.384 0 11.56-5.632 11.56-12.58 0-6.947-5.176-12.58-11.56-12.58-6.385 0-11.56 5.633-11.56 12.58 0 6.948 5.175 12.58 11.56 12.58zm0 5.439c-10.179 0-19.313 4.473-25.544 11.56C14.687 63.527 23.821 68 34 68s19.313-4.472 25.544-11.56C53.313 49.352 44.18 44.88 34 44.88z"
            fill="url(#paint0_linear_4192:2690)"
            fillOpacity={0.2}
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear_4192:2690"
            x1={34}
            y1={68}
            x2={34}
            y2={48.5}
            gradientUnits="userSpaceOnUse">
            <Stop />
            <Stop offset={1} stopOpacity={0} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
}

export default EmptyAvatar;
