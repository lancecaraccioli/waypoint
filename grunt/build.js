module.exports = {
  'root': './build',
  'dest': '<%= build.root %>/<%= build.target %>',
  'temp': '<%= build.root %>/temp',
  'target': 'dev',
  'targets': [
    'dist',
    'dev'
  ]
};
