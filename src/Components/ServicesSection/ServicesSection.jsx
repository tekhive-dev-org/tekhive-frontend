import React from 'react'
import { Asterisk } from 'lucide-react';
import { Button } from '../Button/button';

const features = [
  {
    title: "What Our Clients Say",
    description: "We deliver exceptional results that exceed expectations and drive business growth.",
    image: "/placeholder-m7gcc.png",
    stats: "98% Client Satisfaction",
  },
  {
    title: "Expert Team",
    description: "Our certified professionals bring years of experience in cutting-edge technology solutions.",
    image: "/placeholder-h9esb.png",
    stats: "50+ Experts",
  },
  {
    title: "Proven Results",
    description: "Track record of successful implementations across various industries and business sizes.",
    image: "/placeholder-0u8v8.png",
    stats: "200+ Projects",
  },
]

const ServicesSection = () => {
    return (
        <section className="py-16 bg-[#0066FF] w-full lg:py-24 bg-muted">
            <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className=" text-white text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-bold text-foreground mb-6 text-balance">
                            <span className='text-[#06202C]'>Discover </span>Some Of Our Outstanding Workmanship &
                            Services.
                        </h1>
                        <p className="text-sm sm:text-sm lg:text-sm text-white text-muted-foreground mb-8 text-pretty">
                            Techhive is a dynamic startup designed to equip industries, clients and individuals with in-depth and industry-based products, leveraging technology and innovationskills. Techhive offers the following below;
                        </p>


                    </div>
                    {/* <div className="grid grid-cols-2 gap-4">
            <img src="/modern-office-with-business-professionals-working.jpg" alt="Business Operations" className="rounded-lg shadow-lg" />
            <img src="/financial-technology-dashboard-and-analytics.jpg" alt="Financial Technology" className="rounded-lg shadow-lg mt-8" />
          </div> */}
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mb-2.5">
                    <div className="flex items-center  w-full sm:w-1/2 lg:w-1/4">
                        <div className=" bg-accent rounded-full flex-shrink-0" />
                        <span className="text-white text-sm font-medium">Technical Assistance in Product Build</span>
                    </div>

                    <div className="flex items-center  w-full sm:w-1/2 lg:w-1/4">
                     <Asterisk color='#669C54' className='mr-2' />
                        <div className=" bg-accent rounded-full flex-shrink-0" />
                        <span className="text-white text-sm font-medium">Product Visibilty & Management</span>
                    </div>

                    <div className="flex items-center  w-full sm:w-1/2 lg:w-1/4">
                        <Asterisk color='#669C54' className='mr-2' />
                        <div className=" bg-accent rounded-full flex-shrink-0" />
                        <span className="text-white text-sm font-medium">Community & Networking.</span>
                    </div>
                </div>
                <Button className="mt-4 border-1 border-white text-white text-sm">For Talent</Button>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            WHY CHOOSE US
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We create amazing solutions to transform financial operations and drive digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {feature.stats}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
            </div>
        </section>
    )
}

export default ServicesSection