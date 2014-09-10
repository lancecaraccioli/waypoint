module.exports = {
  'options': {
    overwrite: true
  },
  'app': {
    'expand': true,
    'cwd': '<%= source.path.app %>',
    'src': '*',
    'dest': '<%= build.dest %>/app'
  },
  'bower_components': {
    'src': '<%= source.path.bower_components %>',
    'dest': '<%= build.dest %>/bower_components'
  }
};
