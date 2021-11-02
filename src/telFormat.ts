export default (tel: string) => {
  if (tel) {
    return tel.substring(0, 3) + '****' + tel.substring(7);
  }
  return '-';
};
