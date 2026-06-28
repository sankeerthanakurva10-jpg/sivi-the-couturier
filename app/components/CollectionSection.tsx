"use client";
import React from 'react';
import { homeCampaignStream } from '../data/homepageData';

export default function CollectionSection() {
  return (
    <div className="w-full bg-[#FAF9F6] space-y-0 flex flex-col">
      {homeCampaignStream.map((campaign) => (
        <section 
          key={campaign.id} 
          className="relative w-full h-screen min-h-[600px] overflow-hidden group"
        >
          {/* Media Engine Layer */}
          <div className="w-full h-full relative">
            {campaign.type === 'video' ? (
              <video 
                src={campaign.mediaUrl} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-102" 
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={campaign.mediaUrl} 
                alt={campaign.collectionName} 
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-102" 
              />
            )}
            {/* Cinematic Overlay Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-colors duration-700 group-hover:from-black/70" />
          </div>

          {/* Bottom-Aligned Layout Content Block */}
          {/* Changed justify-center to justify-end and added pb-20 md:pb-28 for clean alignment */}
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 pb-20 md:pb-28 z-10 text-white select-none">
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-[0.25em] mb-6 uppercase max-w-4xl leading-tight drop-shadow-sm">
              {campaign.collectionName}
            </h2>
            <div>
              <a 
                href={campaign.buttonLink} 
                className="inline-block px-10 py-3.5 bg-white text-black text-xs font-sans tracking-[0.25em] uppercase font-medium border border-white hover:bg-transparent hover:text-white transition-all duration-400 shadow-sm"
              >
                {campaign.buttonText}
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}