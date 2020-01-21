function printerError(s) {
  let err = 0;

  for (let i = 0; i < s.length; i++) {
    s.charCodeAt(i) > 109 ? err++ : null;
  }

  return `${err}/${s.length}`;
}