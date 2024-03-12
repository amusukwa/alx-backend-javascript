export default function startString(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  return filteredValues.join('-').replace(new RegExp(`^${startString}`), '');
}
