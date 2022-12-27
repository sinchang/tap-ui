import styles from './button.module.scss'
import classNames from 'classnames'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'large' | 'small'
}

export const Button = ({
  variant = 'primary',
  size = 'large',
  children,
  className,
  ...props
}: ButtonProps) => {
  const btnClass = classNames(className, {
    [styles[variant]]: true,
    [styles[size]]: true,
  })

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  )
}
