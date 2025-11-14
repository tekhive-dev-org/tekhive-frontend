import Head from 'next/head';
import { MotionWrapper } from '../components/ui';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - TechHive</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on business, technology, and digital marketing from TechHive."
        />
      </Head>

      <main className="pt-20">
        <section className="bg-gradient-to-br from-primary to-primary-light py-20 text-white">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionWrapper>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-cyan-300">Blog</span>
                </h1>
                <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                  Coming Soon - Insights and updates from TechHive
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </>
  );
}