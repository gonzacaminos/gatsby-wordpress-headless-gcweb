/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `GCWEB`,
    description: `Contenido hecho web.`,
    author: `@gonza`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'demo.wp-api.org' or 'www.example-site.com'
         */
        baseUrl: `${process.env.WP_URL}`,
        // The protocol. This can be http or https.
        protocol: `http`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on WordPress.com
        useACF: false,
      },
    },
    
  ],
}
