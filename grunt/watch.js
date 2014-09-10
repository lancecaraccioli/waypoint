module.exports = {
  'scripts': {
    'files': 'app/**/*.js',
    'tasks': []
  },
  'styles': {
    'files': 'src/app/**/*.scss',
    'tasks': ['sass:<%= build.target %>']
  }
};
