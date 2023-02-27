import { Alert, Platform } from 'react-native';

export const getSampleLoaderData = (count = 4, fill = 1) =>
  new Array(count).fill(fill);

// Platform Helpers

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export const isWeb = Platform.OS === 'web';

// Alert Helper

export const customAlert = (title, message, buttons) => {
  return Alert.alert(title, message, [...buttons]);
};
