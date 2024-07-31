export default function fUserRoles(roles) {
  const parsedData = JSON.parse(roles);
  const title = parsedData.title;
  return `(${title})`;
}
