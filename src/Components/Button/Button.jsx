import React from "react"

const Button = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <button
    ref={ref}
    className={`px-4 py-2 cursor-pointer rounded font-medium transition-colors duration-200 focus:outline-none ${className}`}
    {...props}
  >
    {children}
  </button>
))

Button.displayName = "Button"

export { Button }
