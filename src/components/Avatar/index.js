import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';

import { compose, when } from '../../helpers/styles';
import EmptyAvatar from '../../../assets/svg/EmptyAvatar';
// import SquareLoader from '../Loaders/SquareLoader';

const colorLoader = '#ededed';
const sizeLoader = 35;

const Avatar = ({
  isLoading,
  source,
  withShadow,
  imageStyles,
  containerStyles,
}) => {
  const [loader, setLoader] = useState(true);

  const handleLoadEnd = () => {
    setLoader(false);
  };

  if (isLoading) {
    return (
      <View style={compose(containerStyles)}>
        {/*<SquareLoader radius={68} size={68} />*/}
      </View>
    );
  }

  return (
    <View
      style={[
        styles.avatar,
        when(withShadow, styles.avatar__shadow),
        compose(containerStyles),
      ]}>
      <>
        {source && loader ? (
          <PulseIndicator
            size={sizeLoader}
            color={colorLoader}
            style={styles.avatar__loader}
          />
        ) : null}

        {source ? (
          <Image
            source={{ uri: source || '' }}
            style={[styles.avatar__img, compose(imageStyles)]}
            resizeMode="contain"
            onLoadEnd={handleLoadEnd}
          />
        ) : (
          <EmptyAvatar />
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    // backgroundColor: "pink",
  },

  avatar__shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
  },

  avatar__img: {
    height: 68,
    width: 68,
    borderRadius: 50,
  },

  'avatar__img--loading': {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: '#fff',
  },

  avatar__loader: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
});

export default Avatar;
