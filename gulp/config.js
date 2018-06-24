// -------------------- Export Configs
module.exports = {
  // -------------------- autoprefixer
  autoprefixer: {
    opts: {
      browsers: ["last 8 versions"],
      cascade: false
    }
  },
  // -------------------- browsersync
  browsersync: {
    opts: {
      server: './src/'
    },
    watch: [
      './src/assets/styles/css/**/*.css',
      './src/assets/scripts/js/**/*.js',
      './src/**/*.html'
    ]
  },
  // -------------------- clean
  clean: {
    folders: [
      './dist/'
    ]
  },
  html: {
    src: ['./src/**/*.html', '!src/template/**/*'],
    htmlmin: { // In case more html file operations are needed.
      opts: {
        // https://github.com/kangax/html-minifier
        collapseWhitespace: true,
        removeComments: true
      }
    },
    dest: './dist/'
  },
  // -------------------- sass
  sass: {
    src: [
      "./src/assets/styles/sass/**/*.{scss,sass}"
    ],
    dest: './dist/assets/css/'
  },
  // -------------------- scripts
  scripts: {
    src: [
      './src/assets/scripts/js/**/*.js',
    ],
    dest: './dist/assets/js'
  },
  // -------------------- images
  img: {
    src: [
      './src/assets/img/**/*',
    ],
    dest: './dist/assets/img'
  },
  // -------------------- fonts
  fonts: {
    src: [
      './src/assets/fonts/**/*',
    ],
    dest: './dist/assets/fonts'
  },
  // -------------------- vendors
  vendors: {
    js: {
      src: './src/assets/vendors/js/**/*.js',
      dest: './dist/assets/vendors/js'
    },
    css: {
      src: './src/assets/vendors/css/**/*.css',
      dest: './dist/assets/vendors/css'
    },
    sass: {
      src: './src/assets/vendors/sass/**/*.{scss,sass}',
      dest: './dist/assets/vendors/css'
    },
    fonts: {
      src: './src/assets/vendors/fonts/**/*',
      dest: './dist/assets/vendors/fonts'
    }
  }
}