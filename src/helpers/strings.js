export const getReducedString = (str, maxLength) => {
  let result = '';

  for (let i = 0; i < maxLength; i++) {
    if (str[i]) {
      result += str[i];
    }
  }

  if (result.length < str.length) {
    result = `${result}...`;
  }

  return result;
};

export const getHighlightedString = (value, fullValue) => {
  const index = fullValue.toLowerCase().indexOf(value.toLowerCase());

  const start = fullValue.slice(0, index);
  const middle = fullValue.slice(index, start.length + value.length);
  const end = fullValue.slice(start.length + middle.length);

  return { start, middle, end };
};

export const makeFirstSymbolCapitalize = (str = '') => {
  if (str && str.length) {
    const firstCapitalize = str.split('')[0].toUpperCase();

    return `${firstCapitalize}${str.slice(1)}`;
  }

  return str;
};

export const excludeSymbols = (str, symbols) => {
  return str
    ?.split('')
    .filter(el => !symbols?.split('').includes(el))
    .join('');
};
