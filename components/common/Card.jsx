import * as React from "react"

const Card = ({ className = "", children, ...props }) => (
  <div 
    className={`rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md ${className}`} 
    {...props} 
  >
    {children}
  </div>
)

const CardHeader = ({ className = "", children, ...props }) => (
  <div 
    className={`flex flex-col space-y-1.5 p-6 ${className}`} 
    {...props} 
  >
    {children}
  </div>
)

const CardTitle = ({ className = "", children, as: Component = "h3", ...props }) => {
  const Comp = Component
  return (
    <Comp 
      className={`text-2xl font-semibold leading-none tracking-tight text-gray-900 ${className}`} 
      {...props} 
    >
      {children}
    </Comp>
  )
}

const CardDescription = ({ className = "", children, ...props }) => (
  <p 
    className={`text-sm text-gray-600 leading-relaxed ${className}`} 
    {...props} 
  >
    {children}
  </p>
)

const CardContent = ({ className = "", children, ...props }) => (
  <div 
    className={`p-6 pt-0 ${className}`} 
    {...props} 
  >
    {children}
  </div>
)

const CardFooter = ({ className = "", children, ...props }) => (
  <div 
    className={`flex items-center p-6 pt-0 ${className}`} 
    {...props} 
  >
    {children}
  </div>
)

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export default Card