interface WidgetProps {
  children: React.ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export default function Widget({ children, className = '', size = 'medium' }: WidgetProps) {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-40 h-40', 
    large: 'w-48 h-48'
  }

  return (
    <div className={`
      ${sizeClasses[size]}
      bg-white/20 
      backdrop-blur-md 
      rounded-2xl 
      p-4 
      shadow-lg 
      border 
      border-white/30
      ${className}
    `}>
      {children}
    </div>
  )
}