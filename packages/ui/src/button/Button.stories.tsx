import type { Meta, StoryObj } from '@storybook/react'
import { PlusIcon } from '@radix-ui/react-icons'

import { Button, type ButtonProps } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
    },
    danger: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    children: 'Label',
  },
}

export const All = () => (
  <>
    <div
      style={{ display: 'flex', gap: 16, padding: 32, alignItems: 'center' }}
    >
      <Button variant='primary'>Primary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
    </div>
    <div
      style={{
        display: 'flex',
        gap: 16,
        padding: 32,
        alignItems: 'center',
      }}
    >
      <Button variant='primary' danger>
        Primary
      </Button>
      <Button variant='outline' danger>
        Outline
      </Button>
      <Button variant='ghost' danger>
        Ghost
      </Button>
      <Button variant='link' danger>
        Link
      </Button>
    </div>
  </>
)

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 16, padding: 32, alignItems: 'center' }}>
    <Button variant='primary'>Large</Button>
    <Button variant='primary' size='medium'>
      Medium
    </Button>
    <Button variant='primary' size='small'>
      Small
    </Button>
  </div>
)

export const Disabled = () => (
  <div style={{ display: 'flex', gap: 16, padding: 32, alignItems: 'center' }}>
    <Button variant='primary' disabled>
      Primary
    </Button>
    <Button variant='outline' disabled>
      Outline
    </Button>
    <Button variant='ghost' disabled>
      Ghost
    </Button>
    <Button variant='link' disabled>
      Link
    </Button>
  </div>
)

export const Icon = () => (
  <>
    <div
      style={{ display: 'flex', gap: 16, padding: 32, alignItems: 'center' }}
    >
      <Button variant='primary' leftIcon={<PlusIcon width={16} height={16} />}>
        Primary
      </Button>
      <Button variant='outline' leftIcon={<PlusIcon width={16} height={16} />}>
        Outline
      </Button>
      <Button variant='ghost' leftIcon={<PlusIcon width={16} height={16} />}>
        Ghost
      </Button>
      <Button variant='link' leftIcon={<PlusIcon width={16} height={16} />}>
        Link
      </Button>
    </div>
    <div
      style={{ display: 'flex', gap: 16, padding: 32, alignItems: 'center' }}
    >
      <Button variant='primary' rightIcon={<PlusIcon width={16} height={16} />}>
        Primary
      </Button>
      <Button variant='outline' rightIcon={<PlusIcon width={16} height={16} />}>
        Outline
      </Button>
      <Button variant='ghost' rightIcon={<PlusIcon width={16} height={16} />}>
        Ghost
      </Button>
      <Button variant='link' rightIcon={<PlusIcon width={16} height={16} />}>
        Link
      </Button>
    </div>
  </>
)
