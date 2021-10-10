export default function classNames(classes) {
  return classes.filter((x) => x !== false).join(' ')
}
