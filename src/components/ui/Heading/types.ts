export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string

export type HeadingProps = {
  level?: HeadingTag
  children: React.ReactNode
  className?: string
  size?: HeadingSize
}

export type StyledHeadingProps = {
  size: string
}
