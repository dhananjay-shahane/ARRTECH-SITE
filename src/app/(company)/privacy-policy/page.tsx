
export const metadata = {
  title: 'Privacy Policy | ARRTECH',
  description: 'Our Privacy Policy outlines how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            How we handle and protect your data.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-slate-700 leading-relaxed space-y-6 text-lg">
          <p className="text-xl text-slate-600 mb-10">
            At ARRTECH, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or otherwise when contacting us.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect or receive to communicate with you, fulfill and manage your requests, and to improve our services and website functionality.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Data Protection</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may contact us using the information provided on our Contact page.
          </p>
        </div>
      </section>

          </div>
  );
}
