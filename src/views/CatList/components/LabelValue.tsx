import { type FC } from 'react'

import { Text } from '@/components'

import type { LabelValueProps } from './types'

const LabelValue: FC<LabelValueProps> = ({ label, children, className }) => (
  <Text as="p" className={className}>
    <strong>{label}</strong> {children}
  </Text>
)

export default LabelValue
