import type { Meta, StoryObj } from '@storybook/react'
import { Display } from './Display'

const meta: Meta<typeof Display> = { component: Display }
export default meta
type Story = StoryObj<typeof Display>

export const Normal: Story = { args: { value: '12345' } }
export const Limit: Story = { args: { value: '123456789' } }
export const Error: Story = { args: { value: 'ERROR' } }
