module.exports = {
  'options': {
    'hostname': 'right-angles.logos',
    'base': ['<%= build.dest %>', '<%= source.app %>']
  },
  'test': {
    'options': {
      'port': 10080
    }
  },
  'serve': {
    'options': {
      'port': 9080,
      'keepalive': true
    }
  }
};
