// lighthouserc.js
module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:3000'],
        startServerCommand: 'pnpm start',
        numberOfRuns: 3,
      },
      assert: {
        preset: 'lighthouse:recommended',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
  // lighthouserc.js
module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:3000'],
        startServerCommand: 'pnpm start',
        numberOfRuns: 3,
      },
      assert: {
        preset: 'lighthouse:recommended',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
  