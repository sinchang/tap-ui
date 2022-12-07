import { Button } from 'ui'

export default function Web() {
  return (
    <div>
      <Button variant='primary'>Primary</Button>
      <Button variant='primary' size='small'>
        Primary
      </Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='secondary' disabled>
        Secondary
      </Button>
    </div>
  )
}
