const fs = require('fs');

const packages = [
  // 'application-extension',
  'application',
  'apputils-extension',
  'apputils',
  'attachments',
  'cells',
  'celltags-extension',
  'celltags',
  'codeeditor',
  'codemirror-extension',
  'codemirror',
  'completer-extension',
  'completer',
  'console-extension',
  'console',
  'coreutils',
  'csvviewer-extension',
  'csvviewer',
  'docmanager-extension',
  'docmanager',
  'docregistry',
  'documentsearch-extension',
  'documentsearch',
  'extensionmanager-extension',
  'extensionmanager',
  'filebrowser-extension',
  'filebrowser',
  'fileeditor-extension',
  'fileeditor',
  'help-extension',
  'htmlviewer-extension',
  'htmlviewer',
  'hub-extension',
  'imageviewer-extension',
  'imageviewer',
  'inspector-extension',
  'inspector',
  'javascript-extension',
  'json-extension',
  'launcher-extension',
  'launcher',
  'logconsole-extension',
  'logconsole',
  'mainmenu-extension',
  'mainmenu',
  'markdownviewer-extension',
  'markdownviewer',
  'mathjax2-extension',
  'mathjax2',
  // 'metapackage',
  // 'nbconvert-css',
  'nbformat',
  'shared-models',
  'docprovider',
  'notebook-extension',
  'notebook',
  'observables',
  'outputarea',
  'pdf-extension',
  'property-inspector',
  'rendermime-extension',
  'rendermime-interfaces',
  'rendermime',
  'running-extension',
  'running',
  'services',
  'settingeditor-extension',
  'settingeditor',
  'settingregistry',
  'shortcuts-extension',
  'statedb',
  'statusbar-extension',
  'statusbar',
  'terminal-extension',
  'terminal',
  'theme-dark-extension',
  'theme-light-extension',
  'tooltip-extension',
  'tooltip',
  'ui-components-extension',
  'ui-components',
  'vdom-extension',
  'vdom',
  'vega5-extension'
];

const entryPoints = packages
  .flatMap(p => [`packages/${p}/src/index.ts`, `packages/${p}/src/index.tsx`])
  .filter(function (path) {
    return fs.existsSync(path);
  });

const exclude =
  packages.flatMap(p => [`packages/${p}/test`]) +
  [
    'packages/application-extension/src/index.tsx'
    //'packages/*/test/*.spec.ts',
  ];

module.exports = {
  entryPoints,
  exclude,
  name: '@jupyterlab',
  out: 'docs/api',
  // json: 'docs/api.json',
  readme: 'README.md',
  theme: 'typedoc-theme',
  tsconfig: 'tsconfigdoc.json'

  // theme: minimal,
  // excludePrivate: true,
  // excludeProtected: true,
  // excludeExternals: true,
  // hideGenerator: true

  // gitRevision: 'master',
  // 'sourcefile-url-prefix': `https://github.com/sinnerschrader/feature-hub/tree/${git.short()}/packages/`,
};
