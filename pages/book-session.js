import Head from 'next/head';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MotionWrapper } from '../components/ui';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShieldIcon from '@mui/icons-material/Shield';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, 'Phone number must be 10-15 digits')
    .required('Phone number is required'),
  preferredDate: Yup.date()
    .min(new Date(), 'Date must be in the future')
    .required('Preferred date is required'),
  preferredTime: Yup.string()
    .required('Preferred time is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
  privacyConsent: Yup.boolean()
    .oneOf([true], 'You must accept the privacy policy')
    .required('Privacy consent is required'),
});

export default function BookSession() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Mock submission - log to console
    console.log('Form submitted:', values);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      resetForm();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Book a Session - TechHive</title>
        <meta
          name="description"
          content="Schedule a free consultation with TechHive. Let's discuss how we can help launch and grow your business."
        />
      </Head>

      <main className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-light py-16 text-white">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Book a Free Session
                </h1>
                <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                  Let&apos;s discuss your business goals and how we can help you achieve them
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircleIcon className="h-20 w-20 text-success mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      Thank You!
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                      Your session request has been received. We&apos;ll get back to you within 24 hours.
                    </p>
                    <p className="text-sm text-gray-500">
                      Check your email for confirmation details.
                    </p>
                  </motion.div>
                ) : (
                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      phone: '',
                      preferredDate: '',
                      preferredTime: '',
                      message: '',
                      privacyConsent: false,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting, touched, errors }) => (
                      <Form className="space-y-6">
                        {/* Name Field */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            className={`w-full px-4 py-3 rounded-lg border ${
                              touched.name && errors.name
                                ? 'border-danger'
                                : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-accent transition-colors`}
                            placeholder="Enter your full name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger text-sm mt-1"
                          />
                        </div>

                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            className={`w-full px-4 py-3 rounded-lg border ${
                              touched.email && errors.email
                                ? 'border-danger'
                                : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-accent transition-colors`}
                            placeholder="your.email@example.com"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger text-sm mt-1"
                          />
                        </div>

                        {/* Phone Field */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <Field
                            type="tel"
                            id="phone"
                            name="phone"
                            className={`w-full px-4 py-3 rounded-lg border ${
                              touched.phone && errors.phone
                                ? 'border-danger'
                                : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-accent transition-colors`}
                            placeholder="08012345678"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-danger text-sm mt-1"
                          />
                        </div>

                        {/* Date and Time Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                              Preferred Date *
                            </label>
                            <Field
                              type="date"
                              id="preferredDate"
                              name="preferredDate"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                touched.preferredDate && errors.preferredDate
                                  ? 'border-danger'
                                  : 'border-gray-300'
                              } focus:outline-none focus:ring-2 focus:ring-accent transition-colors`}
                            />
                            <ErrorMessage
                              name="preferredDate"
                              component="div"
                              className="text-danger text-sm mt-1"
                            />
                          </div>

                          <div>
                            <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                              Preferred Time *
                            </label>
                            <Field
                              as="select"
                              id="preferredTime"
                              name="preferredTime"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                touched.preferredTime && errors.preferredTime
                                  ? 'border-danger'
                                  : 'border-gray-300'
                              } focus:outline-none focus:ring-2 focus:ring-accent transition-colors`}
                            >
                              <option value="">Select time</option>
                              <option value="morning">Morning (9AM - 12PM)</option>
                              <option value="afternoon">Afternoon (12PM - 4PM)</option>
                              <option value="evening">Evening (4PM - 7PM)</option>
                            </Field>
                            <ErrorMessage
                              name="preferredTime"
                              component="div"
                              className="text-danger text-sm mt-1"
                            />
                          </div>
                        </div>

                        {/* Message Field */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                            Tell Us About Your Project *
                          </label>
                          <Field
                            as="textarea"
                            id="message"
                            name="message"
                            rows="5"
                            className={`w-full px-4 py-3 rounded-lg border ${
                              touched.message && errors.message
                                ? 'border-danger'
                                : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none`}
                            placeholder="Share details about your business goals, challenges, or specific services you're interested in..."
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="text-danger text-sm mt-1"
                          />
                        </div>

                        {/* Privacy Consent */}
                        <div className="flex items-start">
                          <Field
                            type="checkbox"
                            id="privacyConsent"
                            name="privacyConsent"
                            className="mt-1 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                          />
                          <label htmlFor="privacyConsent" className="ml-3 text-sm text-gray-600">
                            I agree to the privacy policy and consent to TechHive storing my information for this consultation. *
                          </label>
                        </div>
                        <ErrorMessage
                          name="privacyConsent"
                          component="div"
                          className="text-danger text-sm"
                        />

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Submitting...' : 'Book My Session'}
                        </motion.button>
                      </Form>
                    )}
                  </Formik>
                )}
              </div>
            </MotionWrapper>

            {/* Trust Badges */}
            <MotionWrapper delay={0.2}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <VerifiedUserIcon className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-1">NDPA 2023 Compliant</h3>
                  <p className="text-sm text-gray-600">Your data is protected</p>
                </div>
                <div className="text-center">
                  <LockIcon className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-1">Confidential</h3>
                  <p className="text-sm text-gray-600">All discussions are private</p>
                </div>
                <div className="text-center">
                  <ShieldIcon className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-1">No Spam</h3>
                  <p className="text-sm text-gray-600">We respect your inbox</p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  );
}
