module.exports = {
  siteMetadata: {
    title: 'fn.css - Docs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120403674-1",
        head: false,
      },
    }
  ],
};
