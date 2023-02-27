import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import StyledText from '../styled/StyledText';
import AnchorSVG from '../../../assets/svg/Anchor';

import { compose } from '../../helpers/styles';
import { commonColors, commonStyles, commonThings } from '../../styles';
import ContentLoader from '../ContentLoader';

const Link = ({
  isLoading,
  text = 'Source link',
  isIcon,
  onPress,
  containerStyles,
  ...rest
}) => {
  if (isLoading) {
    return (
      <ContentLoader
        containerStyles={[
          {
            height: 16,
            marginLeft: 5,
            marginRight: 5,
          },
          compose(styles),
        ]}
      />
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={commonThings.activeOpacity}
      onPress={onPress}
      style={compose(containerStyles)}>
      <View style={commonStyles.rowCenterStart}>
        {isIcon ? (
          <AnchorSVG size={17} containerStyles={{ marginRight: 4 }} />
        ) : null}

        <View>
          <StyledText regular fontSize={14} color={commonColors.blue} {...rest}>
            {text}
          </StyledText>

          <View style={styles.linkUnderline} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {},

  linkUnderline: {
    height: 1,
    backgroundColor: commonColors.blue,
  },
});

export default Link;
