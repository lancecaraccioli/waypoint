module.exports = {
  'root': './src',
  'app': './src/app',
  'path': {
    'app': '<%= source.app %>',
    'bower_components': '<%= source.root %>/bower_components'
  },
  'html': {
    'bower_components': ['<%= source.path.bower_components %>/**/*.html'],
    'window': ['<%= source.app %>/**/*.html']
  },
  'scripts': {
    'bower_components': [
      '<%= source.path.bower_components %>/**/jquery.min.js',
      '<%= source.path.bower_components %>/**/angular.min.js',
      '<%= source.path.bower_components %>/**/!(bootstrap|sizzle).min.js'
    ],
    'background': ['<%= source.app %>/background.js'],
    'ours': [
      '<%= source.app %>/app.js',
      '<%= source.app %>/**/experiments-service.js',
      '<%= source.app %>/**/navbar.js',
      '<%= source.app %>/**/*service.js',
      '<%= source.app %>/**/*controller.js'
    ],
    'app': [
      '<%= source.scripts.bower_components %>',
      '<%= source.scripts.ours %>'
    ],
    'tests': [
      '<%= source.app %>/**/*_test.js'
    ]

  },
  'styles': {
    'window': ['<%= source.app %>/**/*.scss']
  },
  'images': {
    'window': ['<%= source.app %>/**/*.{gif,jpg,png}']
  }
};
