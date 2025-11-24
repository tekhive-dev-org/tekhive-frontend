import Head from 'next/head';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MotionWrapper } from '../components/ui';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShieldIcon from '@mui/icons-material/Shield';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
  serviceInterest: Yup.string()
    .required('Please select a service'),
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
  const [error, setError] = useState(null);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setError(null);
      
      // Prepare the payload for the backend
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        serviceInterest: values.serviceInterest,
        preferredDate: values.preferredDate,
        preferredTime: values.preferredTime,
        aboutProject: values.message,
        privacyConsent: values.privacyConsent,
      };

      // Send to backend API
      const response = await fetch(
        'https://techhive-backend-zmq5.onrender.com/api/contact/form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form. Please try again.');
      }

      const data = await response.json();
      
      // Destructure and log the response
      const { success, message, data: responseData, id } = data;
      
      console.log('API Response:', {
        success,
        message,
        responseData,
        id,
        fullResponse: data,
      });
      
      setSubmitted(true);
      resetForm();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
      console.error('Form submission error:', err);
      console.error('Error details:', {
        message: err.message,
        stack: err.stack,
      });
    } finally {
      setSubmitting(false);
    }
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
        <section className="relative bg-gradient-to-br from-primary via-secondary to-teal-light py-20 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <MotionWrapper>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6"
                >
                  <CalendarMonthIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold">BOOK YOUR FREE SESSION</span>
                </motion.div>
                
                <h1 className="text-3xl sm:text-6xl font-black mb-6">
                  Let&apos;s Build Your
                  <br />
                  <span className="text-cyan-300">Success Story</span>
                </h1>
                <p className="text-base sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                  In one 30-minute call, we&apos;ll audit your idea and deliver actionable steps you can execute tomorrow.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-12">
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
                    <p className="text-gray-600 text-lg mb-6 mobile:text-sm">
                      Your session request has been received. We&apos;ll get back to you within 24 hours.
                    </p>
                    <p className="text-sm text-gray-500">
                      Check your email for confirmation details.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                      >
                        <ErrorIcon className="h-5 w-5 text-danger flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-danger mb-1">Submission Failed</h3>
                          <p className="text-sm text-danger/80">{error}</p>
                        </div>
                      </motion.div>
                    )}
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        serviceInterest: '',
                        preferredDate: '',
                        preferredTime: '',
                        message: '',
                        privacyConsent: false,
                      }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                      validateOnChange={true}
                      validateOnBlur={true}
                    >
                    {({ isSubmitting, touched, errors, values, isValid }) => {
                      console.log('Form state:', { isSubmitting, isValid, errors, values });
                      return (
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

                        {/* Service Interest */}
                        <div>
                          <label htmlFor="serviceInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                            Service of Interest *
                          </label>
                          <Field
                            as="select"
                            id="serviceInterest"
                            name="serviceInterest"
                            className={`w-full px-4 py-3 rounded-lg border ${
                              touched.serviceInterest && errors.serviceInterest
                                ? 'border-danger'
                                : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-accent transition-colors`}
                          >
                            <option value="">Select a service</option>
                            <option value="consultancy">Business Consultancy & Strategy</option>
                            <option value="design">UI/UX Design & Branding</option>
                            <option value="development">Web & App Development</option>
                            <option value="marketing">Digital Marketing & Lead Generation</option>
                            <option value="multiple">Multiple Services</option>
                            <option value="not-sure">Not Sure Yet</option>
                          </Field>
                          <ErrorMessage
                            name="serviceInterest"
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
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <button
                            type="submit"
                            disabled={isSubmitting || !isValid}
                            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mobile:text-sm"
                          >
                            {isSubmitting ? 'Submitting...' : 'Book My Free Session →'}
                          </button>
                        </motion.div>

                        {/* Security Note */}
                        <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
                          <LockIcon className="h-4 w-4 mr-2" />
                          <span>Your information is secure and confidential</span>
                        </div>
                      </Form>
                    );
                    }}
                  </Formik>
                  </>
                )}
              </div>
            </MotionWrapper>

            {/* What to Expect Section */}
            <MotionWrapper delay={0.2}>
              <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                <h2 className="text-xl sm:text-3xl font-bold text-primary mb-8 text-center">
                  What to Expect in Your Free Session
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-accent">1</span>
                    </div>
                    <h3 className="font-bold text-primary mb-2">Idea Audit</h3>
                    <p className="text-gray-600 mobile:text-sm">
                      We&apos;ll review your business idea, validate market fit, and identify opportunities
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-accent">2</span>
                    </div>
                    <h3 className="font-bold text-primary mb-2">Custom Roadmap</h3>
                    <p className="text-gray-600 mobile:text-sm">
                      Receive a 90-day launch blueprint with actionable steps you can execute tomorrow
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-accent">3</span>
                    </div>
                    <h3 className="font-bold text-primary mb-2">Clear Next Steps</h3>
                    <p className="text-gray-600 mobile:text-sm">
                      Walk away with clarity on what to do next and how we can help
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* Trust Badges */}
            <MotionWrapper delay={0.3}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-white rounded-2xl p-6 shadow-md">
                  <VerifiedUserIcon className="h-12 w-12 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-1">NDPA 2023 Compliant</h3>
                  <p className="text-sm text-gray-600">Your data is protected and secure</p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-md">
                  <LockIcon className="h-12 w-12 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-1">100% Confidential</h3>
                  <p className="text-sm text-gray-600">All discussions remain private with NDAs</p>
                </div>
                <div className="text-center bg-white rounded-2xl p-6 shadow-md">
                  <ShieldIcon className="h-12 w-12 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-1">No Spam Promise</h3>
                  <p className="text-sm text-gray-600">We respect your inbox and time</p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  );
}
