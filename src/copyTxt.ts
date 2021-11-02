export default (message: string, fn?: () => void) => {
  const input = document.createElement('input');
  input.value = message;
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, input.value.length);
  document.execCommand('Copy');
  document.body.removeChild(input);
  if (fn) {
    fn();
  }
};
