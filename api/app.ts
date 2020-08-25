import { schema, use } from 'nexus'
import { shield } from 'nexus-plugin-shield'
import { rules } from './permissions'

schema.middleware((_config) => {
  return async (root, args, ctx, info, next) => {
    ctx.log.info('Before Resolver')
    await next(root, args, ctx, info)
    ctx.log.info('After Resolver')
  }
})

// Enables the Shield plugin
use(
  shield({
    rules,
  }),
)
