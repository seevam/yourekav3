import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseClass = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200'

  const variantClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
  }

  return (
    <button
      className={`${baseClass} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
