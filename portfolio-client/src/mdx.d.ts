declare module '*.mdx' {
  import type { ComponentProps, ComponentType } from 'react'
  const Component: ComponentType<ComponentProps<'div'>>
  export default Component
}