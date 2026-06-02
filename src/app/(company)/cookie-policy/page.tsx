
export const metadata = {
  title: 'Cookie Policy | ARRTECH',
  description: 'Our Cookie Policy explains how we use cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
            Cookie Policy
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Information about our use of cookies.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-slate-700 leading-relaxed space-y-6 text-lg">
          <p className="text-xl text-slate-600 mb-10">
            This Cookie Policy explains how ARRTECH uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our online properties.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>

        </div>
      </section>

          </div>
  );
}
