export default (text: string, type?: number) => {
  // type: 1 - 所有空格  2 - 前后空格  3 - 前空格 4 - 后空格
  if (!text) return '';
  const trimType = type || 1;
  switch (trimType) {
    case 1:
      return text.replace(/\s+/g, '');
    case 2:
      return text.replace(/(^\s*)|(\s*$)/g, '');
    case 3:
      return text.replace(/(^\s*)/g, '');
    case 4:
      return text.replace(/(\s*$)/g, '');
    default:
      return text;
  }
};
