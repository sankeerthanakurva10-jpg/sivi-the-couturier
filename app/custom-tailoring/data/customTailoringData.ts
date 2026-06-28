// data/customTailoringData.ts
import { 
    HeroData, IntroData, JourneyStep, FabricCollection, 
    GalleryItem, Testimonial, FAQItem, StartJourneyData 
  } from '../types/customTailoring';
  
  export const heroData: HeroData = {
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sewing-machine-stitching-a-piece-of-fabric-41710-large.mp4",
    fallbackImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1920&auto=format&fit=crop",
    title: "CUSTOM TAILORING",
    subtitle: "Designed exclusively for you. Experience bespoke craftsmanship created around your personality.",
    ctaTextPrimary: "BOOK CONSULTATION",
    ctaTextSecondary: "CHAT ON WHATSAPP",
    whatsappLink: "https://wa.me/919999999999"
  };
  
  export const introData: IntroData = {
    heading: "The Art of Bespoke",
    subheading: "A testament to timeless elegance, crafted painstakingly over days by human hands.",
    paragraphs: [
      "At Sivi The Couturier, custom tailoring is not a service—it is an intimate artistic collaboration. Your garment is mapped meticulously from a completely blank canvas, crafted to speak the unique vocabulary of your silhouette and personal heritage.",
      "Every stitch honors age-old traditional Indian handloom methodologies coupled with modern avant-garde structural patterns. We do not manufacture; we breathe life into textile art tailored explicitly for you."
    ],
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop"
  };
  
  export const journeySteps: JourneyStep[] = [
    { number: "01", title: "Consultation", description: "Discuss your creative vision, preferred aesthetics, occasion dynamics, and design goals." },
    { number: "02", title: "Fabric Selection", description: "Choose from an exclusive, highly curated archival selection of hand-spun, raw natural fibers." },
    { number: "03", title: "Design Blueprint", description: "Finalize the technical sketch, structural lines, neck profiles, and secure your dimensional profile." },
    { number: "04", title: "Handcrafting", description: "Our generational master craftsmen and master tailors construct your heirloom silhouette piece by piece." },
    { number: "05", title: "Delivery", description: "Your custom couture masterpiece arrives elegantly enveloped within custom wood-accented luxury packaging." }
  ];
  
  export const fabricCollections: FabricCollection[] = [
    { id: "1", title: "Handloom Cotton", description: "Lightweight, dynamically breathable premium organic luxury cotton spun gracefully across legacy country looms.", imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop" },
    { id: "2", title: "Pure Mulberry Silk", description: "Rich, deeply lustrous mulberry fibers featuring natural fluid drape metrics and unrivaled weight distribution.", imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop" },
    { id: "3", title: "Swadeshi Khadi Swathes", description: "Textured, iconic variations celebrating pure organic structural irregularities that reflect real hand-spun character.", imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop" },
    { id: "4", title: "Artisanal Luxury Weaves", description: "Intricate metallic Zari threads layered neatly with raw jamdani and custom-dyed handloom jacquards.", imageUrl: "https://images.unsplash.com/photo-1576016770956-debb63d90029?q=80&w=800&auto=format&fit=crop" }
  ];
  
  export const galleryItems: GalleryItem[] = [
    { id: "1", imageUrl: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=800&auto=format&fit=crop", caption: "Initial design blueprint concept draft sketch.", aspectClass: "md:col-span-1 row-span-1" },
    { id: "2", imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop", caption: "Selecting fine hand-spun linen materials.", aspectClass: "md:col-span-1 row-span-2 h-full" },
    { id: "3", imageUrl: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=800&auto=format&fit=crop", caption: "Precision measurements and panel structural alignment.", aspectClass: "md:col-span-2 row-span-1" },
    { id: "4", imageUrl: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop", caption: "Finished bespoke tuxedo trial run.", aspectClass: "md:col-span-1 row-span-1" }
  ];
  
  export const testimonials: Testimonial[] = [
    { id: "1", quote: "The outfit fit like an ethereal extension of my soul. The weave of the handloom linen was incredibly breathable and visually striking.", author: "Aishwarya R.", city: "Mumbai" },
    { id: "2", quote: "Sivi is redefining luxury fashion architecture. The multi-step fitting consultation felt deeply therapeutic and professional.", author: "Devendra K.", city: "New Delhi" }
  ];
  
  export const faqItems: FAQItem[] = [
    { id: "1", question: "How long does the entire bespoke tailoring process require?", answer: "Typically, a custom luxury garment requires 4 to 6 weeks from the initial creative baseline consultation to the final physical delivery." },
    { id: "2", question: "Can I modify my design parameters midway through production?", answer: "Design silhouettes are completely frozen post the blueprint finalization step. Minor measurement modifications can be incorporated before cutting stages begin." },
    { id: "3", question: "Do you ship custom luxury ensembles internationally?", answer: "Yes, we ship globally using highly secured premium courier services, maintaining protective temperature controlled climate packaging profiles." }
  ];
  
  export const startJourneyData: StartJourneyData = {
    title: "Start Your Journey",
    description: "Every bespoke garment begins with a profound conversation. Book your complimentary luxury design consultation and allow us to orchestrate something completely custom for your individual aura.",
    ctaText: "BOOK A CONSULTATION"
  };