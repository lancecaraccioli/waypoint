module.exports = {
  options: {
    'manifest': {
      'manifest_version': 2,
      'name': '<%= pkg.brand %>',
      'description': '<%= pkg.description %>',
      'version': '<%= pkg.version %>',
      'icons': {
        '128': 'app/img/icon_128.png',
        '48': 'app/img/icon_48.png',
        '16': 'app/img/icon_16.png'
      },
      'app': {
        'background': {
          'scripts': ['app/background.js']
        }
      },
      'permissions': [
        'idle',
        'desktopCapture',
        'notifications',
        'tts', 'storage',
        'fileSystem',
        {'fileSystem': ['write', 'retainEntries', 'directory']},
        'unlimitedStorage',
        'app.window.alwaysOnTop'
      ]
    },
    dest: '<%= build.dest %>/manifest.json'
  },
  dev: {},
  dist: {}
};
