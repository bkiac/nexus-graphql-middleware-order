import { rule } from 'nexus-plugin-shield'

const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    ctx.log.info('Authentication Rule')
    const userId = ctx.req.headers.authorization
    return Boolean(userId)
  },
)

const rules = {
  Query: {
    hello: isAuthenticated,
  },
}

export { rules }
