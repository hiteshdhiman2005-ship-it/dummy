import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Facebook, Instagram, Twitter, Linkedin, Youtube, AlertCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { ContactFormInput } from '../types';

// Performance Optimizer: Dynamically resizes Unsplash image URLs for responsive screens
function getOptimizedUnsplashUrl(url: string, width: number, quality = 75) {
  if (!url || !url.includes('unsplash.com')) return url;
  try {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&q=${quality}&w=${width}`;
  } catch {
    return url;
  }
}

export default function Contact() {
  useSEO({
    title: 'Contact Watch Customer Service | PrestigeTime Store',
    description: "Are you searching for a reliable watch store near me or looking to buy watches online store with complete confidence? Contact watch customer service at PrestigeTime today.",
    keywords: [
      'watch store near me',
      'buy watches online store',
      'contact watch customer service',
      'watchmaker concierge',
      'prestigetime coordinates',
      'certified watch mechanics'
    ],
  });

  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [ticketId, setTicketId] = useState('');

  const socials = [
    { name: 'Facebook', icon: <Facebook className="h-4 w-4" />, url: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram className="h-4 w-4" />, url: 'https://instagram.com' },
    { name: 'X (Twitter)', icon: <Twitter className="h-4 w-4" />, url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, url: 'https://linkedin.com' },
    { name: 'YouTube', icon: <Youtube className="h-4 w-4" />, url: 'https://youtube.com' }
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Quick validations
    if (!form.name.trim()) {
      setErrorMessage('Full Name is required.');
      return;
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!form.message.trim()) {
      setErrorMessage('Please write a message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTicketId(`PT-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const resetForm = () => {
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setSubmitSuccess(false);
    setErrorMessage('');
  };

  return (
    <div id="contact-page-container" className="bg-neutral-900 text-neutral-100 font-sans min-h-screen">
      
      {/* Page Header banner */}
      <section className="relative py-20 bg-neutral-950 border-b border-neutral-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1524805444758-089113d48a6d", 1200, 75)}
            srcSet={`${getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1524805444758-089113d48a6d", 640, 70)} 640w,
                    ${getOptimizedUnsplashUrl("https://images.unsplash.com/photo-1524805444758-089113d48a6d", 1200, 75)} 1200w`}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
            alt="Dials on a table background"
            className="w-full h-full object-cover object-center scale-105 filter blur-xs"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/80 to-neutral-950" />
        
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-black tracking-wide text-white mb-3">
            CONTACT <span className="text-amber-500">US</span>
          </h1>
          <div className="h-0.5 w-16 bg-amber-500 mx-auto rounded" />
          <p className="mt-4 text-neutral-400 text-sm sm:text-base font-light tracking-wide uppercase">
            We would love to hear from you
          </p>
        </div>
      </section>

      {/* Main Form & details divided section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column Left (Details & Hours & Socials) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold font-mono">
                Get In Touch
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight">
                PrestigeTime Headquarters
              </h2>
              <div className="h-0.5 w-16 bg-amber-500 rounded" />
              <p className="text-neutral-300 text-sm font-light leading-relaxed">
                Connect directly with our boutique sales specialists, historical horology curators, or corporate customer care. If you are searching for a premium <span className="text-white font-medium">watch store near me</span> or want to securely <span className="text-white font-medium">buy watches online store</span> orders, you can easily <span className="text-white font-medium">contact watch customer service</span> using our direct lines or the secure contact form below.
              </p>
            </div>

            {/* Direct Details list */}
            <div className="bg-neutral-950 p-6 sm:p-8 rounded-xl border border-neutral-800/80 space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-amber-400 shrink-0">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Our Address</h4>
                  <p className="text-white text-sm mt-1">
                    PrestigeTime Headquarters<br />
                    125 Luxury Avenue<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-amber-400 shrink-0">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Direct Phone</h4>
                  <a href="tel:+18005557890" className="text-white hover:text-amber-400 text-sm mt-1 block transition-colors focus:outline-none focus:underline focus:text-amber-400 rounded">
                    +1 (800) 555-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-amber-400 shrink-0">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">General Email</h4>
                  <a href="mailto:info@prestigetime.com" className="text-white hover:text-amber-400 text-sm mt-1 block transition-colors focus:outline-none focus:underline focus:text-amber-400 rounded">
                    info@prestigetime.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-amber-400 shrink-0">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Business Hours</h4>
                  <div className="text-white text-sm mt-1.5 space-y-1">
                    <div className="flex justify-between w-48 text-neutral-300">
                      <span>Monday – Friday:</span>
                      <span className="text-white font-medium">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between w-48 text-neutral-300">
                      <span>Saturday:</span>
                      <span className="text-white font-medium">10:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between w-48 text-neutral-300">
                      <span>Sunday:</span>
                      <span className="text-neutral-500 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Channels list */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                Follow PrestigeTime
              </h4>
              <div className="flex items-center space-x-3">
                {socials.map((social) => (
                  <a
                    id={`contact-social-${social.name.toLowerCase().replace(/\s/g, '')}`}
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-neutral-950 border border-neutral-800 hover:border-amber-500/20 text-neutral-400 hover:text-amber-400 rounded-md transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    title={social.name}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Column Right (Dynamic Interactive Contact Form / Success prompt) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800/80 rounded-xl p-8 shadow-xl">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                
                <motion.form
                  id="contact-form"
                  key="contact-form-component"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-white">Send Us A Message</h3>
                    <p className="text-xs text-neutral-400">Fill in the fields below and we'll reply to your inquiry within 1 business day.</p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-md flex items-center space-x-2.5" role="alert">
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full name */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="text-xs text-neutral-400 font-medium block">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-3 px-4 text-xs text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="text-xs text-neutral-400 font-medium block">
                        Email Address <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="e.g. email@example.com"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-3 px-4 text-xs text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="form-phone" className="text-xs text-neutral-400 font-medium block">
                        Phone Number
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. (555) 7890"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-3 px-4 text-xs text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                      />
                    </div>
                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="form-subject" className="text-xs text-neutral-400 font-medium block">
                        Subject
                      </label>
                      <input
                        id="form-subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleInputChange}
                        placeholder="e.g. Elite watch warranty"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-3 px-4 text-xs text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-xs text-neutral-400 font-medium block">
                      Message <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="Write your message details here..."
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-3 px-4 text-xs text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:bg-neutral-800 text-neutral-950 font-extrabold text-xs tracking-widest uppercase rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">DISPATCHING INQUIRY...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="h-3.5 w-3.5" aria-hidden="true" />
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                
                <motion.div
                  id="contact-form-success"
                  key="contact-success-component"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="mx-auto w-14 h-14 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-white">Thank You, {form.name}</h3>
                    <p className="text-sm text-neutral-300">Your message has been successfully routed to our New York offices.</p>
                  </div>

                  <div className="bg-neutral-900 rounded-lg p-5 border border-neutral-800/80 max-w-sm mx-auto text-left space-y-2 font-sans text-xs">
                    <div className="flex justify-between border-b border-neutral-800/85 pb-2">
                      <span className="text-neutral-500 uppercase">Support Ticket</span>
                      <span className="text-amber-500 font-mono font-bold">{ticketId}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-neutral-500">Contact Email:</span>
                      <span className="text-neutral-200 font-medium">{form.email}</span>
                    </div>
                    {form.phone && (
                      <div className="flex justify-between pb-1">
                        <span className="text-neutral-500">Phone Number:</span>
                        <span className="text-neutral-200 font-medium">{form.phone}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Response ETA:</span>
                      <span className="text-emerald-400 font-medium">Under 24 Business Hours</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 italic">
                    A copy of this transmission docket has been sent to your listed digital address.
                  </p>

                  <button
                    id="success-form-reset"
                    onClick={resetForm}
                    className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xs font-bold tracking-wider rounded uppercase transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* Head Office Coordinates / Map representation overlay block */}
      <section className="py-12 bg-neutral-950 border-t border-neutral-800 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border border-neutral-800 rounded-xl overflow-hidden h-72 relative bg-neutral-900 flex items-center justify-center">
            {/* Visual map graphic grids */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute inset-0 opacity-5 bg-linear-to-r from-teal-500 to-indigo-500" />
            
            <div className="relative text-center space-y-2 z-10 p-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-extrabold block">MAP RADAR</span>
              <h3 className="font-serif text-lg font-bold text-white">125 LUXURY AVENUE, NEW YORK, NY</h3>
              <p className="text-neutral-300 text-xs max-w-sm mx-auto font-mono">
                Latitude: 40.7128° N • Longitude: 74.0060° W
              </p>
              <div className="pt-3 inline-flex items-center space-x-1.5 py-1.5 px-3 bg-neutral-950 rounded border border-neutral-800/80">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" aria-hidden="true" />
                <span className="text-white text-[10px] uppercase font-mono tracking-wider font-semibold">PrestigeTime HQ Flagship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
