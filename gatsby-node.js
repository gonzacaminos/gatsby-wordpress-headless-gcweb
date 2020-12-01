const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const posts = await graphql(`
    {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
    }
  `).then(res => res.data )

 
  posts.allWordpressPost.edges.forEach(({ node }) => {
    createPage({
      path: "proyectos/" + node.slug,
      component: path.resolve(`./src/templates/proyect.js`),
      context: {
        
        slug: node.slug,
      },
    })
  })

  const users = await graphql(`
    {
      allWordpressWpUsers {
        edges {
          node {
            id
            name
            authored_wordpress__POST {
              slug
            }
            slug
            avatar_urls {
              wordpress_96
            }
          }
        }
      }
    }
  `).then(res => res.data )

 
  users.allWordpressWpUsers.edges.forEach(({ node }) => {
    createPage({
      path: "autores/" + node.slug,
      component: path.resolve(`./src/templates/autor.js`),
      context: {
        
        slug: node.slug,
      },
    })
  })

  const pages = await graphql(`
  {
    allWordpressPage {
      edges {
        node {
        title
        slug
        content
        }
      }
    }
  } 
  
  `).then(res => res.data )

 
  pages.allWordpressPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/static.js`),
      context: {
        slug: node.slug,
      },
    })
  })
 
}
