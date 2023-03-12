import { render } from '@testing-library/react'
import { expect, describe } from 'vitest'
import React from 'react'

import { Button } from './Button'

describe('Button', () => {
  it('basic', () => {
    const { getByText } = render(<Button>Label</Button>)
    expect(getByText('Label')).toBeInTheDocument()
  })
})
