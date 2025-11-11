import * as React from "react"

const Button = React.forwardRef(({ 
  className = "", 
  children, 
  variant = "default", 
  size = "default", 
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 shadow-sm hover:shadow-md",
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 shadow-sm hover:shadow-md",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500 shadow-sm hover:shadow-md",
    outline: "border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus-visible:ring-gray-500",
    ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500",
    link: "text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-500",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus-visible:ring-blue-500 shadow-lg hover:shadow-xl",
    danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 shadow-sm hover:shadow-md",
    success: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500 shadow-sm hover:shadow-md"
  }
  
  const sizes = {
    sm: "h-9 px-3 py-2 text-sm",
    default: "h-10 px-4 py-2 text-base",
    lg: "h-12 px-6 py-3 text-lg",
    xl: "h-14 px-8 py-4 text-xl"
  }

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export { Button }
export default Button