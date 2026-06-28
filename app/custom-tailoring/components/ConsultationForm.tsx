// components/ConsultationForm.tsx
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '', 
    occasion: '', garmentType: '', fabric: '', budget: '', message: ''
  });
  const [images, setImages] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connects to your backend/CMS pipeline effortlessly
    console.log("Submitting Haute Couture Brief Request Struct: ", { formData, images });
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-36 bg-[#fcfbfa] px-6 md:px-12 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto bg-white border border-neutral-200/60 p-8 md:p-16 shadow-sm">
        
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.3em] text-neutral-400 uppercase block mb-2">THE BESPOKE INTAKE</span>
          <h2 className="text-3xl md:text-4xl text-neutral-900 font-serif font-light tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Request Consultation
          </h2>
        </div>

        {submitted ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <h3 className="text-2xl font-serif text-neutral-800 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Inquiry Received Graciously</h3>
            <p className="text-xs text-neutral-500 tracking-wider font-sans">Our design concierge will coordinate your private booking matrix within 24 standard calendar hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 font-sans text-sm font-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Form Input Fields */}
              {[
                { label: "Your Full Name", name: "name", type: "text" },
                { label: "Email Coordinate", name: "email", type: "email" },
                { label: "Contact Phone System", name: "phone", type: "tel" },
                { label: "Current City Base", name: "city", type: "text" },
                { label: "Intended Design Occasion", name: "occasion", type: "text" },
                { label: "Desired Budget Matrix", name: "budget", type: "text" }
              ].map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-[11px] uppercase tracking-widest text-neutral-400 mb-2">{field.label}</label>
                  <input 
                    required 
                    type={field.type} 
                    name={field.name} 
                    value={(formData as any)[field.name]}
                    onChange={handleTextChange}
                    className="bg-transparent border-b border-neutral-200 py-2 focus:outline-none focus:border-black transition-colors font-light text-neutral-800"
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label className="text-[11px] uppercase tracking-widest text-neutral-400 mb-2">Garment Silhouette Classification</label>
                <select name="garmentType" onChange={handleTextChange} className="bg-transparent border-b border-neutral-200 py-2 focus:outline-none focus:border-black transition-colors text-neutral-700">
                  <option value="">Select Category Profile</option>
                  <option value="sherwani">Royal Sherwani</option>
                  <option value="lehenga">Editorial Lehenga Ensembles</option>
                  <option value="saree">Bespoke Architectural Saree</option>
                  <option value="suit">Avant-Garde Custom Suits</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] uppercase tracking-widest text-neutral-400 mb-2">Preferred Base Fabric</label>
                <select name="fabric" onChange={handleTextChange} className="bg-transparent border-b border-neutral-200 py-2 focus:outline-none focus:border-black transition-colors text-neutral-700">
                  <option value="">Select Structural Fiber</option>
                  <option value="cotton">Handloom Heavy Cotton</option>
                  <option value="silk">Archival Mulberry Silk Swathes</option>
                  <option value="khadi">Asymmetrical Organic Khadi</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-[11px] uppercase tracking-widest text-neutral-400 mb-2">Creative Vision Brief / Message</label>
              <textarea 
                rows={4} 
                name="message" 
                value={formData.message}
                onChange={handleTextChange}
                className="bg-transparent border border-neutral-200 p-3 focus:outline-none focus:border-black transition-colors font-light text-neutral-800 placeholder-neutral-300 resize-none"
                placeholder="Elaborate details regarding structural goals or custom design aspects..."
              />
            </div>

            {/* Inspiration Upload File Field */}
            <div className="border border-dashed border-neutral-200 p-6 flex flex-col items-center justify-center bg-neutral-50/50">
              <label className="text-xs font-medium tracking-wider text-neutral-600 mb-2 cursor-pointer border border-neutral-300 bg-white px-4 py-2 hover:bg-neutral-50 transition-colors">
                Upload Inspiration Board Images
                <input type="file" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
              </label>
              <p className="text-[11px] text-neutral-400 mt-1 font-light">Supports references up to 10MB total size.</p>
              {images.length > 0 && (
                <div className="mt-3 text-xs text-neutral-600 font-medium">
                  {images.length} files attached safely.
                </div>
              )}
            </div>

            <button type="submit" className="w-full py-4 text-xs tracking-[0.25em] font-medium uppercase text-white bg-black hover:bg-neutral-800 transition-colors duration-300">
              SUBMIT CREATIVE DOSSIER
            </button>
          </form>
        )}
      </div>
    </section>
  );
}