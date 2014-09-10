module.exports = {
  'dist': {
    'options': {},
    'files': {
      '<%= build.dest %>/app/app.css': '<%= build.dest %>/app/app.scss'
    }
  },
  'dev': {
    'options': {
      'sourcemap': true,
      'trace': true,
      'style': 'expanded',
      'lineNumbers': true
    },
    'files': {
      '<%= build.dest %>/app/app.css': '<%= build.dest %>/app/app.scss'
    }
  }
};
