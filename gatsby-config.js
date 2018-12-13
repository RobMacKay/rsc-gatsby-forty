module.exports = {
  siteMetadata: {
    title: "RSC Media",
    author: "Rob MacKay",
    description: "RSC Media Company Site based on Forty by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'RSC Media',
        short_name: 'RSCMedia',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', //This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    //'gatsby-plugin-offline'
  ],
}
