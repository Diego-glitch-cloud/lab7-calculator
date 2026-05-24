import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = { component: Button }
export default meta
type Story = StoryObj<typeof Button>

export const Numeric: Story = { args: { label: '7', type: 'num' } }
export const Operator: Story = { args: { label: '+', type: 'op' } }
export const Action: Story = { args: { label: 'AC', type: 'action' } }
