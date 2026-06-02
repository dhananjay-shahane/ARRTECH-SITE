'use client';

import Script from 'next/script';

export const ElevenLabsWidget = () => {
  return (
    <>
      <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="lazyOnload" />
      {/* Wrapper to scale down the widget on small devices */}
      <div 
        className="fixed inset-0 z-[60] origin-bottom-right scale-[0.80] min-[400px]:scale-100 pointer-events-none"
        dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_3701ksms20y1ex5vqqrpk4y7f9r7" style="pointer-events: auto;"></elevenlabs-convai>'
        }} 
      />
    </>
  );
};
