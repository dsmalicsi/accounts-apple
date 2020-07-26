Package.describe({
  name: 'dsmalicsi:accounts-apple',
  version: '1.1.3',
  summary: 'OAuth2 for Sign in with Apple - fork from bigowl and quavedev',
  git: 'https://github.com/dsmalicsi/accounts-apple',
  documentation: 'README.md',
});

Package.onUse(api => {
  api.versionsFrom('1.8.1');
  api.use(['ecmascript']);
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('dsmalicsi:apple-oauth@1.3.4');
  api.imply('dsmalicsi:apple-oauth');

  api.use(
    ['accounts-ui'],
    ['client', 'server'],
    {
      weak: true,
    },
  );
  api.addFiles('notice.js');

  api.addFiles('apple.js');
});
