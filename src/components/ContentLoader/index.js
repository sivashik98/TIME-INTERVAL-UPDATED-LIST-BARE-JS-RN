import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { MaterialIndicator } from "react-native-indicators";
import { compose } from '../../helpers/styles';
import { commonStyles } from '../../styles';

const defaultColors = ['rgba(246,246,246,0.85)', 'rgba(222,222,222,0.5)'];
const positionStart = { x: 0, y: 0.5 };
const positionEnd = { x: 0, y: 1 };

const ContentLoader = ({ containerStyles }) => {
  return (
    <LinearGradient
      start={positionStart}
      end={positionEnd}
      colors={defaultColors}
      style={[styles.stockLoader, compose(containerStyles)]}
    />
  );
};

const styles = StyleSheet.create({
  stockLoader: {
    ...commonStyles.flex,
    borderRadius: 8,
    // marginRight: 2,
    // marginLeft: 2,
  },
});

export default ContentLoader;
