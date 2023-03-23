import styles from './button.module.scss'
import classNames from 'classnames'
import { ReactNode } from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'link'
  size?: 'large' | 'medium' | 'small'
  danger?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export const Button = ({
  variant = 'primary',
  size = 'large',
  children,
  className,
  danger = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const btnClass = classNames(className, {
    [styles.danger]: danger,
    [styles[variant]]: true,
    [styles[size]]: true,
  })

  return (
    <button className={btnClass} {...props}>
      {leftIcon ? <span className={styles.leftIcon}>{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span className={styles.rightIcon}>{rightIcon}</span> : null}
    </button>
  )
}
