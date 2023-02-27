export const moveToSpecificScreenOut =
  navigation =>
  (screen, params = {}) => {
    navigation.navigate(screen, params);
  };

export const resetSpecificStack = (
  navigation,
  index = 0,
  key = '',
  routes = [],
) => {
  navigation.reset({
    index,
    key,
    routes,
  });
};
