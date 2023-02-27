import { Dimensions } from 'react-native';

const sizeOfSmallScreen = 370;

export const isSmallScreen = Dimensions.get('window').width < sizeOfSmallScreen;

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
