import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../../Components/Button/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../Components/Ui/Cards";
import { Input } from "../../../Components/Ui/Input";
import { Textarea } from "../../../Components/Ui/Textarea";
import { Label } from "../../../Components/Ui/Label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
  lastName: Yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^[+]?[0-9]?[\d]{10,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const mapRef = useRef(null);

  // Define initial form values without type annotations
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", values);
        setSubmitStatus("success");
        resetForm();
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Intersection Observer for lazy loading the map
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsMapVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  // Effect to handle minimum loading time
  useEffect(() => {
    if (isMapVisible) {
      // Reset loading states
      setIsMapLoaded(false);
      setMinTimePassed(false);

      // Set timeout to mark minimum time as passed
      const timer = setTimeout(() => {
        setMinTimePassed(true);
      }, 1000); // Minimum 1 second loading time

      return () => clearTimeout(timer);
    }
  }, [isMapVisible]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <Card className="mt-6">
              <CardHeader className="space-y-0">
                <CardTitle className="text-3xl font-bold text-[#0A0D14] mb-2 text-balance">Contact Us</CardTitle>
                <CardDescription className="text-lg text-[#525866] text-muted-foreground">
                  We endeavor to reply to all enquiries as quickly as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form className="space-y-6">
                      {/* Name Fields Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium text-[#0A0D14]">First name</Label>
                          <Field
                            as={Input}
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            className={errors.firstName && touched.firstName ? "border-red-500" : "border-[#E2E4E9]"}
                          />
                          <ErrorMessage name="firstName" component="p" className="text-sm text-red-500 " />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium text-[#0A0D14]">Last name</Label>
                          <Field
                            as={Input}
                            id="lastName"
                            name="lastName"
                            placeholder="Enter your last name"
                            className={errors.lastName && touched.lastName ? "border-red-500" : "border-[#E2E4E9]"}
                          />
                          <ErrorMessage name="lastName" component="p" className="text-sm text-red-500 " />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-[#0A0D14]">Email address</Label>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          className={errors.email && touched.email ? "border-red-500" : "border-[#E2E4E9]"}
                        />
                        <ErrorMessage name="email" component="p" className="text-sm text-red-500 " />
                      </div>

                      {/* Phone Field */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-[#0A0D14]">Phone number</Label>
                        <Field
                          as={Input}
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className={errors.phone && touched.phone ? "border-red-500" : "border-[#E2E4E9]"}
                        />
                        <ErrorMessage name="phone" component="p" className="text-sm text-red-500 " />
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-[#0A0D14]">Message</Label>
                        <Field
                          as={Textarea}
                          id="message"
                          name="message"
                          placeholder="Enter your message"
                          rows={5}
                          className={errors.message && touched.message ? "border-destructive" : "border-[#E2E4E9]"}
                        />
                        {/* <ErrorMessage name="message" component="p" className="text-sm text-red-500 " /> */}
                      </div>

                      {/* Submit Status Messages */}
                      {submitStatus === "success" && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                          <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                        </div>
                      )}
                      {submitStatus === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                          <p className="text-red-500">
                            Sorry, there was an error sending your message. Please try again.
                          </p>
                        </div>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#0066FF] text-sm hover:bg-primary/90 text-white font-semibold py-3"
                      >
                        {isSubmitting ? "Sending Message..." : "Send Message"}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </div>

          {/* Map and Contact Info Section */}
          <div className="space-y-6">
            {/* Map Container */}
            <Card className="mt-6">
              <CardContent className="p-0">
               
<div
  ref={mapRef}
  className="h-64 lg:h-[600px] w-full lg:w-[400px] xl:w-[600px] bg-gray-100 rounded-lg overflow-hidden relative"
>
  {!isMapVisible ? (
    <div className="flex items-center justify-center h-full bg-gray-100">
      <p className="text-gray-500">Map will load when visible</p>
    </div>
  ) : !minTimePassed ? (
    <div className="flex items-center justify-center h-full">
      <LoadingSpinner size="large" text="Map loading..." />
    </div>
  ) : (
    <div className="relative w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7708465394!2d3.3792057!3d6.4281395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1647834567890!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lagos, Nigeria Location"
        className={`transition-opacity duration-500 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsMapLoaded(true)}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  )}
</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;