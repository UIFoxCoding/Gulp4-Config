// -------------------- Export Configs
module.exports = {
  production: false,
  // -------------------- Project
  projectDir: './../_package/',
  projectName: 'project-name',
  projectVersion: 'v1.1.2',
  // -------------------- Path
  path: {
    clean: './dist/'
  },
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
      server: {
        baseDir: './dist/'
      },
      port: 4000,
      notify: false
    },
    watch: [
      './src/assets/styles/sass/**/*.{scss,sass}',
      './src/assets/scripts/js/**/*.js',
      './src/**/*.html'
    ]
  },
  html: {
    src: [
      './src/**/*.html',
      '!src/template/**/*'
    ],
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
  // -------------------- favicons
  favicons: {
    src: [
      './src/favicons/*.{jpg,jpeg,png,gif}'
    ],
    opts: {
      icons: {
        appleIcon: true,
        favicons: true,
        online: false,
        appleStartup: false,
        android: true,
        firefox: false,
        yandex: false,
        windows: false,
        coast: false
      }
    },
    dest: './dist/favicons/'
  },
  // -------------------- vendors
  vendors: {
    js: {
      src: [
        './node_modules/jquery/dist/jquery.slim.js'
      ],
      dest: './dist/assets/js/vendors'
    },
    css: {
      src: [
        './node_modules/bootstrap/dist/css/bootstrap.css'
      ],
      dest: './dist/assets/css/vendors'
    },
    //sass: {
    //src: [
    //'./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss'
    //],
    //dest: './dist/assets/css/vendors'
    //},
    fonts: {
      src: [
        './node_modules/@fortawesome/fontawesome-free/webfonts/**/*'
      ],
      dest: './dist/assets/fonts/vendors'
    }
  }
}