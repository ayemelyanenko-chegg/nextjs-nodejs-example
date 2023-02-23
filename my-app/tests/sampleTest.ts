fixture`Sample test`
  .meta({
    fixtureID: 'f-0001',
    author: 'GDG',
    app: '',
  })
  .beforeEach(async (t) => {
    await t.navigateTo(
      'https://localhost:3001');
  });

test.meta({
  testID: 't-0001',
  testType: 'Smoke',
  testRailCaseId: '277066',
  priority: 'p1',
})('Sample test', async (t) => {
  console.log('Just logging text');
});

