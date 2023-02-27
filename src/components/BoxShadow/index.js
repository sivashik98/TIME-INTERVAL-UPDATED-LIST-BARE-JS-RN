import React from 'react';
import {StyleSheet, View} from 'react-native';

import {commonColors} from '../../styles';
import {compose} from '../../helpers/styles';

const BoxShadow = ({children, containerStyles}) => {
  return (
    <View style={[styles.boxShadow, compose(containerStyles)]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: commonColors.white,
    elevation: 7,
    shadowOffset: {width: 0.5, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});

export default BoxShadow;
