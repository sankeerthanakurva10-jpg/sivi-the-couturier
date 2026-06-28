import {
    HandloomHeroData,
    BrandStoryData,
    ArtisanSpotlightData,
    ProcessStep,
    HandloomCollectionCard,
    HandloomProduct,
    FabricCard,
    Testimonial,
    SustainabilityPillar
  } from '../types/handloom';
  
  export const handloomHeroContent: HandloomHeroData = {
    media: {
      type: 'video', // Change this to 'image' anytime via your future dashboard panel!
      url: "https://assets.mixkit.co/videos/preview/mixkit-womans-feet-walking-in-a-silky-skirt-43285-large.mp4"
    },
    title: "HANDLOOM EDIT",
    subtitle: "Where heritage meets contemporary elegance.",
    buttonText: "EXPLORE COLLECTION"
  };
  
  export const artisanSpotlightContent: ArtisanSpotlightData = {
    title: "Artisan Spotlight",
    artisanName: "Ramaniah Devudu",
    location: "Mangalagiri Cluster",
    storyText: "Ramaniah has spent over four decades tuning the micro-tensions of pit looms. His hands intuitively remember the precise alignment needed to blend fine cotton counts.",
    craftDetails: "This special collection utilizes double-warp cotton combinations requiring up to twelve days of warp setup.",
    media: {
      type: 'image',
      url: "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=1200&auto=format&fit=crop"
    }
  };
  
  export const handloomCollectionsList: HandloomCollectionCard[] = [
    { 
      id: "c1", 
      title: "Cotton Heritage", 
      description: "Airy weave geometries capturing architectural geometric layouts.", 
      media: { type: 'image', url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" }
    },
    { 
      id: "c2", 
      title: "Summer Weaves", 
      description: "Whisper-weight fabrics designed to capture gentle structural movements.", 
      media: { type: 'image', url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop" }
    },
    { 
      id: "c3", 
      title: "Festive Handloom", 
      description: "Opulent pure metallic zari overlays inlaid manually inside silk bounds.", 
      media: { type: 'image', url: "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?q=80&w=1200&auto=format&fit=crop" }
    }
  ];
  
  export const handloomProductsList: HandloomProduct[] = [
    { id: "pr1", name: "Mangalagiri Striped Ivory Saree", price: "₹14,500", media: { type: 'image', url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" }, isSoldOut: false },
    { id: "pr2", name: "Crushed Khadi Silk Kaftan Dress", price: "₹18,200", media: { type: 'image', url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop" }, isSoldOut: false },
    { id: "pr3", name: "Asymmetrical Fine Handloom Overlay", price: "₹12,800", media: { type: 'image', url: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop" }, isSoldOut: true }
  ];
  
  // Structural placeholders mapping standard text metrics
  export const brandStoryContent: BrandStoryData = { quote: "At Sivi The Couturier, every single weave carries a distinct human signature.", paragraphOne: "Our handloom collections celebrate generations of quiet craftsmanship...", paragraphTwo: "By working directly with master weaving centers across India..." };
  export const weavingProcessSteps: ProcessStep[] = [ { id: "p1", stepNumber: "01", title: "Yarn Selection", description: "Sourcing premium organic cotton filaments." }, { id: "p2", stepNumber: "02", title: "Natural Pigmenting", description: "Infusing dynamic color profiles." }, { id: "p3", stepNumber: "03", title: "Traditional Weaving", description: "Interlacing structured threads." }, { id: "p4", stepNumber: "04", title: "Luxury Finishing", description: "Handwashing and organic pressing." } ];
  export const fabricEducationList: FabricCard[] = [ { id: "f1", name: "Fine Cotton", feel: "Cool, breathable...", texture: "Crisp ribbed...", benefits: "Perfect thermoregulation...", craftsmanship: "Hand-spun at 80s..." } ];
  export const handloomTestimonials: Testimonial[] = [ { id: "t1", quote: "The weight and drape feel like wrapped architecture.", author: "Meera R.", location: "Mumbai" } ];
  export const sustainabilityPillarsList: SustainabilityPillar[] = [ { id: "s1", title: "Slow Fashion Architecture", description: "Limiting production runs to prioritize textile integrity." } ];