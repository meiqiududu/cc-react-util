export default (sHtml: string) => {
  // 过滤html代码(把<>转换)
  if (!sHtml) return '';
  return sHtml.replace(/[<>&"]/g, function (c) {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
  });
};
