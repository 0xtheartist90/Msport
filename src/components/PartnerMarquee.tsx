import Image from 'next/image';

const partnerLogos = [
  { name: 'Srixon', src: '/images/Logos/srixon logo.png' },
  { name: 'Singha', src: '/images/Logos/Singha logo.png' },
  { name: 'Titleist', src: '/images/Logos/Titleist logo.png' },
  { name: 'Chang', src: '/images/Logos/Chang logo.png' },
  { name: 'PING', src: '/images/Logos/Ping logo.png' },
  { name: 'Singha Water', src: '/images/Logos/Singha water logo.png' },
  { name: 'BMW', src: '/images/Logos/bmw logo.png' },
  { name: 'Thai PGA', src: '/images/Logos/Thai pga logo.png' }
];

const PartnerMarquee = () => (
  <section className="w-full bg-black border-t border-white/5 py-2 overflow-hidden">
    <div className="relative">
      <div className="flex w-max flex-nowrap animate-marquee-seamless-top gap-28 px-6">
        {[0, 1, 2, 3].map(loopIndex =>
          partnerLogos.map(logo => (
            <div key={`${logo.name}-${loopIndex}`} className="flex items-center opacity-95">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={480}
                height={180}
                className="h-24 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))
        )}
      </div>
    </div>
  </section>
);

export default PartnerMarquee;
