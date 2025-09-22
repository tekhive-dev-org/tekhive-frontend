import * as React from "react"

const Card = ({ className, ...props }) => (
  <div className={` ${className}`} {...props} />
)

const CardHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
)

const CardTitle = ({ className, ...props }) => (
  <h3 className={`text-2xl font-bold leading-none ${className}`} {...props} />
)

const CardDescription = ({ className, ...props }) => (
  <p className={`text-[1rem] text-muted-foreground ${className}`} {...props} />
)

const CardContent = ({ className, ...props }) => (
  <div className={`p-6 pt-0  ${className}`} {...props} />
)

export { Card, CardHeader, CardTitle, CardDescription, CardContent }