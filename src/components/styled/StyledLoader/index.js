import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {compose, when} from '../../../helpers/styles';
import {commonColors, commonStyles} from '../../../styles';

const defaultColor = '#000';
const defaultSize = 'small';

const StyledLoader = ({size, color, loaderStyles, isTransparent}) => {
  return (
    <View
      style={compose(
        styles.styledLoader,
        when(isTransparent, styles['styledLoader--transparent']),
        loaderStyles,
      )}>
      <ActivityIndicator
        size={size || defaultSize}
        color={color || defaultColor}
        style={styles.styledLoader__loader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  styledLoader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 5,
    ...commonStyles.justifyContentCenter,
    ...commonStyles.alignItemsCenter,
  },

  'styledLoader--transparent': {
    backgroundColor: 'transparent',
  },

  styledLoader__loader: {
    backgroundColor: commonColors.white,
    padding: 15,
    borderRadius: 8,
  },
});

export default StyledLoader;
