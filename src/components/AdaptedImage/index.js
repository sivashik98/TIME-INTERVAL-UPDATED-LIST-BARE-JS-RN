import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { compose, getHeightOfImage } from '../../helpers/styles';
import { commonStyles } from '../../styles';

const AdaptedImage = ({ source, containerStyles, imgStyles, ...props }) => {
  return (
    <View
      style={[
        commonStyles.alignItemsCenter,
        commonStyles.justifyContentCenter,
        compose(containerStyles),
      ]}>
      <Image
        source={source}
        style={[
          {
            width: '100%',
            height: getHeightOfImage(source),
          },
          compose(imgStyles),
        ]}
        resizeMode="contain"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AdaptedImage;
