module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/content/verbose-giggle/content`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
};
