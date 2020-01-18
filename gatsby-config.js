module.exports = {
  siteMetadata: {
    title: `Drayke Friesen Portfolio`,
    description: `web-developer, web-designer and illustrator.`,
    author: `@draykefriesen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DraykeFriesen`,
        short_name: `DraykeFriesen`,
        start_url: `/`,
        background_color: `#CCCEFF`,
        theme_color: `#CCCEFF`,
        display: `minimal-ui`,
        icon: `src/media/svg/letter-logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
