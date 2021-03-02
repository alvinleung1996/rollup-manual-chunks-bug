const App = () => {
  import('./common.strings.en.js');
  import('./form.strings.en.js').then(function (n) { return n.l; });
  import('./form.strings.en.js').then(function (n) { return n.r; });
};

export { App };
