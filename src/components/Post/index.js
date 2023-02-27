import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import StyledText from '../../components/styled/StyledText';
import BoxShadow from '../../components/BoxShadow';
import AdaptedImage from '../../components/AdaptedImage';

import { compose } from '../../helpers/styles';
import {
  getReducedString,
  makeFirstSymbolCapitalize,
} from '../../helpers/strings';
import { titlesHandler } from '../../helpers/valuesHandler';

const Post = ({ isLoading, title, content, onPress, containerStyles }) => {
  const source = require('../../../assets/img/Newspaper.png');
  const verifiedTitle = makeFirstSymbolCapitalize(titlesHandler(title));
  const verifiedContent = getReducedString(titlesHandler(content), 40);

  const handlePress = () => {
    if (!isLoading) {
      onPress && onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <BoxShadow containerStyles={compose(containerStyles)}>
        <StyledText isLoading={isLoading} bold fontSize={22}>
          {verifiedTitle}
        </StyledText>

        <StyledText isLoading={isLoading} styles={{ marginTop: 10 }}>
          {verifiedContent}
        </StyledText>

        <AdaptedImage source={source} />
      </BoxShadow>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Post;
