// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  siteUrl: 'https://kigale.github.io',
  siteName: 'Lukas Riedel',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'Projects/*.md',
        typeName: 'Project',
        remark: {
          // remark options
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-remark-figure-caption",
          {
            // All the options here are optional
            figureClassName: "md-figure-block",
            imageClassName: "md-figure-image",
            captionClassName: "md-figure-caption"
          }
        ]
      ]
      // global remark options
    }
  }
}