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
import mapicon from '../../../assets/Images/mapicon.svg';

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
  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const mapRef = useRef(null);

  // Define initial form values without type annotations
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setApiError(null);
    setSuccessMessage(null);

    try {
      // Try multiple possible field name formats
      const apiData = {
        // Format 1: Basic snake_case
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone: values.phone,
        message: values.message,
        
        // Format 2: Alternative field names
        name: `${values.firstName} ${values.lastName}`,
        inquiry: values.message,
        
        // Format 3: Additional metadata
        subject: "Contact Form Submission",
        company: "TekHive",
        source: "Website",
        timestamp: new Date().toISOString(),
        
        // Format 4: Direct field mapping
        firstname: values.firstName,
        lastname: values.lastName,
        phonenumber: values.phone,
      };
      
      const response = await fetch('https://techhive-backend-zmq5.onrender.com/api/contact/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'TekHive-Frontend/1.0'
        },
        body: JSON.stringify(apiData),
        signal: AbortSignal.timeout(15000)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || errorData.message || `Server responded with status ${response.status}`;
        setApiError(errorMessage);
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setSuccessMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.");
      setSubmitStatus("success");
      
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      
      resetForm();
    } catch (error) {
      if (error.name === 'AbortError') {
        setApiError("Request timed out. Please try again.");
      } else if (error.message.includes('Failed to fetch')) {
        setApiError("Network error. Please check your internet connection.");
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };


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


  useEffect(() => {
    if (isMapVisible) {
      setIsMapLoaded(false);
      setMinTimePassed(false);

      const timer = setTimeout(() => {
        setMinTimePassed(true);
      }, 1000);

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
                          className={errors.message && touched.message ? "border-red-500" : "border-[#E2E4E9]"}
                        />
                        <ErrorMessage name="message" component="p" className="text-sm text-red-500 " />
                      </div>

                      {/* API Error Message */}
                      {apiError && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                          <p className="text-red-500">
                            {apiError}
                          </p>
                          <p className="text-xs text-red-400 mt-1">
                            Please check all fields are filled correctly.
                          </p>
                        </div>
                      )}

                      {/* Success Message */}
                      {successMessage && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                          <p className="text-green-800">{successMessage}</p>
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
                        id="contact-map"
                        src={mapicon}
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