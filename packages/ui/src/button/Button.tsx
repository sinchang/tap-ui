import styles from './button.module.scss'
import classNames from 'classnames'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'link'
  size?: 'large' | 'medium' | 'small'
  danger?: boolean
}

export const Button = ({
  variant = 'primary',
  size = 'large',
  children,
  className,
  danger = false,
  ...props
}: ButtonProps) => {
  const btnClass = classNames(className, {
    [styles.danger]: danger,
    [styles[variant]]: true,
    [styles[size]]: true,
  })

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  )
}
