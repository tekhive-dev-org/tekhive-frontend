import React, { useState } from 'react';
import image1WhyChooseUs from "../../assets/Images/image1WhyChooseUs.svg";
import image2WhyChooseUs from "../../assets/Images/image2WhyChooseUs.svg";
import customerserviceicon1 from "../../assets/Images/icons/customerserviceicon1.svg";
import securepaymentlineicon2 from "../../assets/Images/icons/securepaymentlineicon2.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from '../Button/button';
import humanicon from "../../assets/Images/icons/humanicon.svg";
import doubleQuote from "../../assets/Images/icons/doubleQuote.svg";

const features = [
    {
        title: "Seamless Collaboration",
        desc: "Our user-friendly platform ensures a seamless collaboration experience. Communicate with clients and track project progress effortlessly.",
        icon: customerserviceicon1,
    },
    {
        title: "Secure and Reliable",
        desc: "Protect your data with industry-leading security and reliable systems designed for trust.",
        icon: securepaymentlineicon2,
    },
    {
        title: "Support & Community",
        desc: "Join a thriving community with 24/7 support and peer collaboration to solve challenges faster.",
        icon: securepaymentlineicon2,
    },
];

const testimonials = [
    {
        quote:
            "I recently hired TechWise for a project, and I couldn't be happier with the results. The work exceeded my expectations in every way. Communication was smooth, deadlines were met, and the quality was outstanding.",
        author: "Chidi British",
        position: "CEO at Cube Ltd",
        avatar: humanicon,
    },
    {
        quote:
            "Working with TechWise has been a game-changer for our business. Their innovative solutions and dedicated support team helped us streamline our operations and increase productivity by 40%.",
        author: "Sarah Johnson",
        position: "CTO at InnovateTech",
        avatar: humanicon
    },
    {
        quote:
            "The level of expertise and professionalism shown by TechWise is unmatched. They delivered our complex project on time and within budget, exceeding all our requirements.",
        author: "Michael Chen",
        position: "Founder at StartupHub",
        avatar: humanicon,
    },
    {
        quote:
            "TechWise transformed our digital presence completely. Their strategic approach and cutting-edge technology solutions helped us reach new markets and double our revenue.",
        author: "Emily Rodriguez",
        position: "Marketing Director at GrowthCorp",
        avatar: humanicon,
    },
];

function WhyChooseUsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="why" className="py-5 px-6 bg-white">
            {/* Heading */}
            <div className="py-16 px-6 text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Why Choose Us!</h2>
                <p className="max-w-2xl mx-auto text-sm text-[#525866] mb-3">
                    Choose us for unmatched quality, exceptional service and a commitment to <br />
                    <span>exceeding your expectations</span>
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left image */}
                <div className="relative flex">
                    <img
                        src={image1WhyChooseUs}
                        alt="Happy customer"
                        className="max-w-sm w-full  rounded-lg"
                    />
                    <div className="absolute top-[-3rem] right-[10rem] transform translate-x-1/4 -translate-y-1/4">
                        <img className="max-w-sm w-60" src={image2WhyChooseUs} alt="" />
                    </div>
                </div>

                {/* Right features */}
                <div className="space-y-6">
                    {features.map((f, idx) => (
                        <div key={idx} className="flex items-start space-x-4">
                            <div className="border-0 bg-[#CDD0D5] p-2 rounded-full overflow-hidden flex-shrink-0">
                                <img
                                    src={f.icon }
                                    alt={f.title}
                                    className="w-full h-10 object-contain "
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#0A0D14]">{f.title}</h3>
                                <p className="text-sm text-[#525866]">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-[#F5F7FA]  rounded-2xl p-8 lg:p-12 shadow-lg mt-12">
                <div className='flex sm:flex-row flex-col justify-between items-center mb-8 gap-6'>
                    <h3 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                        What Our Customers Say
                    </h3>

                    <div className="flex flex-col lg:flex-row items-start gap-8">
                        {/* Testimonial Content */}
                        <div className="flex-1">
                            <div className="mb-6 transition-all duration-500 ease-in-out">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                                    <img src={doubleQuote} alt="doubleQuote" className='w-4 h-4' />
                                    {/* <span className="text-gray-400 text-xl">"</span> */}
                                </div>
                                <p className="text-gray-700 text-base leading-relaxed mb-6">
                                    {testimonials[currentTestimonial].quote}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 mb-6 transition-all duration-500 ease-in-out">
                                <img
                                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                                    alt={testimonials[currentTestimonial].author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonials[currentTestimonial].author}</h4>
                                    <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].position}</p>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex gap-2 lg:self-end">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevTestimonial}
                            className="w-10 h-10 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent hover:border-blue-600 transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent hover:border-blue-600 transition-colors"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                    {/* Indicators */}
                    <div className="flex gap-2 mb-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUsSection;