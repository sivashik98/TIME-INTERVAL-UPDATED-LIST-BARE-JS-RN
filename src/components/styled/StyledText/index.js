import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { compose, when } from '../../../helpers/styles';
import { commonColors } from '../../../styles';
import ContentLoader from '../../ContentLoader';

const StyledText = ({
  isLoading,
  bold,
  uppercase,
  fontSize,
  lineHeight,
  color,
  styles,
  children,
  ...props
}) => {
  if (isLoading) {
    return (
      <ContentLoader
        containerStyles={[
          {
            height: fontSize ? fontSize * 1.5 : 18,
            marginLeft: 5,
            marginRight: 5,
          },
          compose(styles),
        ]}
      />
    );
  }

  return (
    <Text
      style={[
        defaultStyles.styledText,
        when(bold, defaultStyles['styledText--bold']),
        when(uppercase, defaultStyles['styledText--uppercase']),
        when(color, { color }),
        when(lineHeight, { lineHeight }),
        when(fontSize, { fontSize }),
        styles,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

const defaultStyles = StyleSheet.create({
  styledText: {
    color: commonColors.black,
    fontWeight: 'normal',
    flexShrink: 1,
    fontSize: 18,
  },

  'styledText--bold': {
    fontWeight: 'bold',
  },

  'styledText--uppercase': {
    textTransform: 'uppercase',
  },
});

export default StyledText;
