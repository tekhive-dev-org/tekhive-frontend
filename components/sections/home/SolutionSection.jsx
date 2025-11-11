import React, { useState } from 'react';
import { useIsClient } from '../../../lib/hooks';
import { Card, CardContent } from '../../common/Card';
import { Button } from '../../common/Button';
import { CheckCircle, ArrowForward, TrendingUp, Speed, Security, Assessment, Computer, People, AccountBalance, BarChart } from '@mui/icons-material';

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const isClient = useIsClient();

  const solutions = [
    {
      id: 'crm',
      title: 'Customer Relationship Management',
      shortTitle: 'CRM Systems',
      description: 'Build stronger customer relationships with our intelligent CRM platform. Track interactions, manage sales pipelines, and drive revenue growth.',
      icon: People,
      color: 'blue',
      features: ['360° Customer View', 'Sales Pipeline', 'Marketing Automation', 'Analytics & Reporting'],
      benefits: [
        { label: 'Increase in Sales', value: '35%' },
        { label: 'Customer Retention', value: '92%' },
        { label: 'Response Time', value: '-40%' }
      ]
    },
    {
      id: 'hrm',
      title: 'Human Resource Management',
      shortTitle: 'HR Solutions',
      description: 'Streamline HR operations from recruitment to retirement. Empower your workforce with modern tools for performance and engagement.',
      icon: Computer,
      color: 'green',
      features: ['Employee Self-Service', 'Automated Payroll', 'Performance Management', 'Recruitment Tools'],
      benefits: [
        { label: 'HR Efficiency', value: '+45%' },
        { label: 'Employee Satisfaction', value: '94%' },
        { label: 'Processing Time', value: '-60%' }
      ]
    },
    {
      id: 'erp',
      title: 'Enterprise Resource Planning',
      shortTitle: 'ERP Systems',
      description: 'Unify your business operations with our comprehensive ERP solution. Integrate finance, supply chain, and operations seamlessly.',
      icon: AccountBalance,
      color: 'purple',
      features: ['Financial Management', 'Supply Chain', 'Inventory Control', 'Real-time Intelligence'],
      benefits: [
        { label: 'Operational Efficiency', value: '+50%' },
        { label: 'Cost Reduction', value: '30%' },
        { label: 'Data Accuracy', value: '99%' }
      ]
    },
    {
      id: 'bi',
      title: 'Business Intelligence & Analytics',
      shortTitle: 'Analytics & BI',
      description: 'Transform data into actionable insights. Make informed decisions with real-time dashboards and predictive analytics.',
      icon: BarChart,
      color: 'orange',
      features: ['Real-time Visualization', 'Predictive Analytics', 'Custom Dashboards', 'AI-Powered Insights'],
      benefits: [
        { label: 'Faster Decisions', value: '3x' },
        { label: 'Data Accessibility', value: '100%' },
        { label: 'Forecast Accuracy', value: '95%' }
      ]
    }
  ];

  const currentSolution = solutions[activeTab];
  const IconComponent = currentSolution.icon;

  const colorClasses = {
    blue: { gradient: 'from-blue-600 to-blue-700', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:bg-blue-100' },
    green: { gradient: 'from-green-600 to-green-700', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', hover: 'hover:bg-green-100' },
    purple: { gradient: 'from-purple-600 to-purple-700', bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', hover: 'hover:bg-purple-100' },
    orange: { gradient: 'from-orange-600 to-orange-700', bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', hover: 'hover:bg-orange-100' }
  };

  const colors = colorClasses[currentSolution.color];

  return (
    <section className='relative py-20 lg:py-32 bg-white overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-white'></div>
      
      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6'>
            <TrendingUp sx={{ fontSize: 16 }} />
            Enterprise Solutions
          </div>
          
          <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
            Powerful Solutions for
            <br />
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Modern Businesses
            </span>
          </h2>
          
          <p className='text-xl text-gray-600 leading-relaxed'>
            Streamline operations, boost productivity, and accelerate growth
          </p>
        </div>

        {/* Tab Navigation */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${colorClasses[solution.color].gradient} text-white shadow-lg scale-105`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className='hidden sm:inline'>{solution.title}</span>
              <span className='inline sm:hidden'>{solution.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        {isClient && (
          <div className='grid lg:grid-cols-2 gap-12 items-start'>
            {/* Left: Solution Details */}
            <div className='space-y-8'>
              <div className='flex items-start gap-4'>
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${colors.gradient} text-white shadow-lg`}>
                  <IconComponent sx={{ fontSize: 40 }} />
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-gray-900 mb-2'>{currentSolution.title}</h3>
                  <p className='text-lg text-gray-600'>{currentSolution.description}</p>
                </div>
              </div>

              <div>
                <h4 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                  <Speed className={colors.text} />
                  Key Features
                </h4>
                <div className='grid sm:grid-cols-2 gap-3'>
                  {currentSolution.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center gap-3 p-4 rounded-xl ${colors.bg} border ${colors.border} transition-all duration-300 ${colors.hover}`}>
                      <CheckCircle className={colors.text} sx={{ fontSize: 20 }} />
                      <span className='font-medium text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button size='lg' className={`w-full sm:w-auto bg-gradient-to-r ${colors.gradient} text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                Explore {currentSolution.shortTitle}
                <ArrowForward className='ml-2 group-hover:translate-x-1 transition-transform' sx={{ fontSize: 20 }} />
              </Button>
            </div>

            {/* Right: Benefits Card */}
            <Card className='bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 shadow-xl'>
              <CardContent className='p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className={`p-3 rounded-xl ${colors.bg}`}>
                    <Assessment className={colors.text} sx={{ fontSize: 32 }} />
                  </div>
                  <div>
                    <h4 className='text-2xl font-bold text-gray-900'>Proven Results</h4>
                    <p className='text-gray-600'>Real impact on your business</p>
                  </div>
                </div>

                <div className='space-y-6'>
                  {currentSolution.benefits.map((benefit, idx) => (
                    <div key={idx} className='relative'>
                      <div className='flex items-baseline justify-between mb-2'>
                        <span className='font-medium text-gray-700'>{benefit.label}</span>
                        <span className={`text-3xl font-bold ${colors.text}`}>{benefit.value}</span>
                      </div>
                      <div className='h-2 bg-gray-200 rounded-full overflow-hidden'>
                        <div className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-1000 ease-out`} style={{ width: isClient ? '100%' : '0%', transitionDelay: `${idx * 200}ms` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='mt-8 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4 text-center'>
                  <div>
                    <div className='flex items-center justify-center mb-1'>
                      <Security className={colors.text} sx={{ fontSize: 24 }} />
                    </div>
                    <div className='text-sm font-semibold text-gray-900'>Secure</div>
                    <div className='text-xs text-gray-600'>Enterprise-grade</div>
                  </div>
                  <div>
                    <div className='flex items-center justify-center mb-1'>
                      <Speed className={colors.text} sx={{ fontSize: 24 }} />
                    </div>
                    <div className='text-sm font-semibold text-gray-900'>Fast</div>
                    <div className='text-xs text-gray-600'>High performance</div>
                  </div>
                  <div>
                    <div className='flex items-center justify-center mb-1'>
                      <TrendingUp className={colors.text} sx={{ fontSize: 24 }} />
                    </div>
                    <div className='text-sm font-semibold text-gray-900'>Scalable</div>
                    <div className='text-xs text-gray-600'>Grows with you</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Bottom CTA */}
        <div className={`mt-20 text-center bg-gradient-to-r ${colors.gradient} rounded-3xl p-12 text-white transition-all duration-500`}>
          <h3 className='text-3xl font-bold mb-4'>Ready to Transform Your Business?</h3>
          <p className='text-xl mb-8 text-white/90 max-w-2xl mx-auto'>
            Join thousands of companies already using our solutions to drive growth and innovation
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' className='bg-white hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300' style={{ color: currentSolution.color === 'blue' ? '#2563eb' : currentSolution.color === 'green' ? '#16a34a' : currentSolution.color === 'purple' ? '#9333ea' : '#ea580c' }}>
              Schedule a Demo
            </Button>
            <Button size='lg' variant='outline' className='border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300'>
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
