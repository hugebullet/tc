export function prettifyColumnName(name) {
  name = name.replace(/([A-Z])/g, ' $1');
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name.replace(/Id/g, 'ID');
}
