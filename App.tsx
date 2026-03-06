import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sofa, 
  Bed, 
  Armchair, 
  Hammer, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Menu, 
  X,
  Youtube,
  Facebook,
  Music2,
  Award,
  Trees,
  ArrowDown,
  ArrowUp,
  MessageCircle
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Timber', href: '#timber' },
    { name: 'Services', href: '#services' },
    { name: 'Showroom', href: '#showroom' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm ${scrolled ? 'py-2 md:py-3' : 'py-3 md:py-4'}`}>
      <div className="absolute top-0 left-0 h-[2px] bg-accent transition-all duration-100" style={{ width: `${scrollProgress}%` }}></div>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="serif text-xl font-bold tracking-tight leading-none text-wood-dark">SHREE BISWAKARMA</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-wood-dark/70">Furniture & Timber Udyog</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium transition-colors uppercase tracking-wider text-wood-dark hover:text-accent whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-wood-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium border-b border-black/5 pb-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Furniture" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="serif text-5xl md:text-8xl text-white leading-[0.9] mb-8">
            The Art of <br />
            <span className="italic">Fine Living.</span>
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed">
            <span className="relative inline-block">
              <span className="relative z-10">Shree Biswakarma Kath Chiran Thatha Furniture Udyog</span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-1 left-0 h-3 bg-accent/60 z-0"
              />
            </span> brings you the finest handcrafted wooden furniture and premium timber services. From raw logs to finished masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#showroom" className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-all text-center">
              Explore Showroom
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all text-center">
              Give an Order
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1914&auto=format&fit=crop" 
                alt="Workshop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-wood-dark p-8 rounded-2xl shadow-xl hidden lg:block">
              <div className="text-white text-center">
                <span className="block text-4xl font-bold serif mb-1">20+</span>
                <span className="text-xs uppercase tracking-widest opacity-60">Years of Legacy</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="serif text-4xl md:text-5xl mb-6 leading-tight">
              Crafting Heritage Through <span className="italic">Wood & Soul.</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by our visionary owner, <span className="relative inline-block font-semibold text-gray-900">
                <span className="relative z-10">Madan Thakur</span>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-0.5 left-0 h-3 bg-accent/30 z-0"
                />
              </span>, our establishment has been a cornerstone of quality woodworking for over two decades. We specialize in "Kath Chiran" (Timber Sawing) and custom furniture manufacturing.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our showroom features a wide array of designs, from traditional Nepali carvings to modern minimalist aesthetics. Every piece is crafted using seasoned timber, ensuring durability that lasts generations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Certified Quality</h4>
                  <p className="text-xs text-gray-500">Premium Grade Timber</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <Trees size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Sustainable</h4>
                  <p className="text-xs text-gray-500">Ethically Sourced Wood</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              <div className="text-center">
                <span className="block text-2xl font-bold text-wood-dark">35+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Projects</span>
              </div>
              <div className="text-center border-x border-gray-100">
                <span className="block text-2xl font-bold text-wood-dark">10+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Artisans</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-wood-dark">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Satisfied</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Timber Selection",
      desc: "We hand-pick the finest seasoned logs, ensuring the perfect grain and moisture content.",
      icon: "01"
    },
    {
      title: "Precision Sawing",
      desc: "Our 'Kath Chiran' process uses advanced machinery for millimetre-perfect dimensions.",
      icon: "02"
    },
    {
      title: "Master Crafting",
      desc: "Artisans shape the wood using traditional joinery techniques for lifelong durability.",
      icon: "03"
    },
    {
      title: "Fine Finishing",
      desc: "Multiple stages of sanding and premium polishing bring out the natural soul of the wood.",
      icon: "04"
    }
  ];

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block">How We Work</span>
            <h2 className="serif text-4xl md:text-5xl leading-tight">From Raw Log to <br /><span className="italic">Finished Masterpiece.</span></h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Our process combines traditional wisdom with modern precision to ensure every piece of furniture tells a story of quality.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gray-100 -z-0"></div>
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 group"
            >
              <div className="w-12 h-12 bg-wood-dark text-white rounded-full flex items-center justify-center font-bold mb-6 group-hover:bg-accent transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="serif text-xl mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimberTypes = () => {
  const timbers = [
    { name: "Teak (Sagaun)", properties: "Durable, Water-resistant, Golden Brown", use: "Luxury Furniture" },
    { name: "Sal (Sakhuwa)", properties: "Hard, Heavy, Termite-resistant", use: "Door Frames & Beams" },
    { name: "Sisau (Rosewood)", properties: "Fine Grain, Rich Color, Strong", use: "Premium Carvings" },
    { name: "Simal", properties: "Lightweight, Soft, Easy to work", use: "Plywood & Boxes" }
  ];

  return (
    <section id="timber" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
            <h2 className="serif text-4xl md:text-5xl mb-8">Premium Timber <br /><span className="italic">Selection.</span></h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We source and process various types of high-quality timber, each selected for its unique properties and suitability for different applications.
            </p>
            <div className="space-y-4">
              {timbers.map((timber, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 border-l-2 border-accent/20 hover:border-accent transition-colors bg-wood-light/30"
                >
                  <h4 className="font-bold text-wood-dark">{timber.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{timber.properties} • Best for {timber.use}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-wood-light shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop" 
                alt="Timber Texture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-white text-center p-4 rotate-12 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest">Seasoned Timber Only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Kath Chiran (Timber Sawing)",
      desc: "State-of-the-art milling services to process raw logs into precise timber planks for construction and furniture.",
      icon: <Hammer className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Custom Furniture",
      desc: "Bespoke furniture design tailored to your space. We bring your sketches and ideas to life with expert craftsmanship.",
      icon: <Sofa className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-wood-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block">What We Do</span>
          <h2 className="serif text-4xl md:text-5xl">Our Specialized Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="serif text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a href="#contact" className="inline-flex items-center text-accent font-semibold text-sm group/link">
                  Learn More <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Showroom = () => {
  const categories = ["All", "Living Room", "Bedroom", "Dining", "Office"];
  const [activeTab, setActiveTab] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const products = [
    // These first 6 will be shown in the "All" tab
    { name: "Royal Teak Bed", category: "Bedroom", img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop" },
    { name: "Classic Sofa Set", category: "Living Room", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop" },
    { name: "Oak Dining Table", category: "Dining", img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop" },
    { name: "Executive Desk", category: "Office", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop" },
    { name: "Modern Wardrobe", category: "Bedroom", img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2070&auto=format&fit=crop" },
    { name: "Accent Armchair", category: "Living Room", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2070&auto=format&fit=crop" },

    // These will be shown in their respective categories (3 each)
    // Living Room (3 more)
    { name: "Teak Coffee Table", category: "Living Room", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070&auto=format&fit=crop" },
    { name: "TV Console Unit", category: "Living Room", img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop" },
    { name: "Leather Recliner", category: "Living Room", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop" },
    
    // Bedroom (3 more)
    { name: "Luxury Nightstand", category: "Bedroom", img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=2070&auto=format&fit=crop" },
    { name: "Wooden Dresser", category: "Bedroom", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop" },
    { name: "Velvet Headboard", category: "Bedroom", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2070&auto=format&fit=crop" },
    
    // Dining (3 more)
    { name: "Handcrafted Sideboard", category: "Dining", img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2070&auto=format&fit=crop" },
    { name: "Dining Chair Set", category: "Dining", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2070&auto=format&fit=crop" },
    { name: "Marble Top Buffet", category: "Dining", img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2070&auto=format&fit=crop" },
    
    // Office (3 more)
    { name: "Ergonomic Wood Chair", category: "Office", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop" },
    { name: "Library Bookshelf", category: "Office", img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=2070&auto=format&fit=crop" },
    { name: "File Cabinet", category: "Office", img: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=2070&auto=format&fit=crop" },
  ];

  const filteredProducts = activeTab === "All" 
    ? products.slice(0, isMobile ? 3 : 6) 
    : products.filter(p => p.category === activeTab).slice(0, 3);

  return (
    <section id="showroom" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block">Our Collection</span>
            <h2 className="serif text-4xl md:text-5xl leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Shree Biswakarma Furniture & Timber Udyog</span>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute bottom-1 left-0 h-4 bg-accent/25 z-0"
                />
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === cat ? 'bg-wood-dark text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-2xl overflow-hidden shadow-sm ${idx === 0 && activeTab === 'All' ? 'md:col-span-2 md:row-span-2 aspect-[16/9] md:aspect-auto' : 'aspect-square'}`}
              >
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{product.category}</span>
                  <h4 className="text-white text-2xl serif">{product.name}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Rajesh Hamal",
      text: "The quality of furniture given by this Showroom is wonderful. Madan Thakur's attention to detail is truly commendable.",
      avatar: "https://i.pravatar.cc/150?u=rajesh"
    },
    {
      name: "Sita Sharma",
      text: "Exceptional craftsmanship and attention to detail. Every piece we ordered exceeded our expectations in both beauty and durability.",
      avatar: "https://i.pravatar.cc/150?u=sita"
    },
    {
      name: "Binod Chaudhary",
      text: "A truly professional experience from start to finish. Their timber selection is top-notch and the final products are absolute masterpieces.",
      avatar: "https://i.pravatar.cc/150?u=binod"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-wood-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
          <h2 className="serif text-4xl md:text-5xl">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-sm text-wood-dark">{review.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const text = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A%0A` +
      `*Message:*%0A${message}`;
    
    const whatsappNumber = "9779804781284";
    
    // Small delay to show feedback
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-wood-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="serif text-4xl md:text-5xl mb-8">
              Visit Our <span className="relative inline-block">
                <span className="relative z-10">Showroom</span>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute bottom-1 left-0 h-4 bg-accent/40 z-0"
                />
              </span>
            </h2>
            <p className="text-white/60 mb-12 max-w-md leading-relaxed">
              Have a project in mind? Or want to see our collection in person? Visit our showroom or give us a call. We're here to help you create your dream home.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-white/60">मिर्चैया बतहा पुल टाटा मोटर्सको अगाडि<br />(Mirchaiya, batha pull opposite of Tata motors)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-white/60">+977 9804781284</p>
                  <p className="text-white/60">+977 9852832781</p>
                  <p className="text-white/60">+977 9825711545</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Clock />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    Working Hours
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-800">
                      Open Now
                    </span>
                  </h4>
                  <p className="text-white/60">Everyday (Except major public holidays in nepal):</p>
                  <p className="text-white/60">9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40">Full Name</label>
                  <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Madan Thakur" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40">Phone Number</label>
                  <input name="phone" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="+977" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/40">Email Address</label>
                <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="madanthakur284@gmail.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/40">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows={1} 
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = `${target.scrollHeight}px`;
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none overflow-hidden min-h-[120px]" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="serif text-2xl font-bold tracking-tight leading-none mb-2">SHREE BISWAKARMA</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Furniture & Timber Udyog</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <a href="#showroom" className="text-[10px] uppercase tracking-widest text-accent font-bold hover:text-white transition-colors">
              Click to view our latest collections:-
            </a>
            <div className="flex space-x-6">
              {[
                { icon: <Facebook size={18} />, url: "https://www.facebook.com/profile.php?id=61584627837681" },
                { icon: <Youtube size={18} />, url: "https://youtube.com/@biswakarma-store?si=witYA3zfHDyedOI7" },
                { icon: <Music2 size={18} />, url: "https://tiktok.com/@shree.biswakarma3?_r=1&_t=ZS-91xmhbawdam" }
              ].map((social, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <motion.div 
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2 }}
                    className="text-accent"
                  >
                    <ArrowDown size={14} />
                  </motion.div>
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Shree Biswakarma Kath Chiran Thatha Furniture Udyog. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollControl = () => {
  const sections = ['home', 'about', 'process', 'timber', 'services', 'showroom', 'testimonials', 'contact'];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let foundIndex = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          foundIndex = i;
          break;
        }
      }
      setCurrentSectionIndex(foundIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isAtTop = currentSectionIndex === 0;
  const isAtBottom = currentSectionIndex === sections.length - 1;

  const openWhatsApp = () => {
    window.open('https://wa.me/9779804781284', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl border-2 border-white/20"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.button>

      <AnimatePresence>
        {!isAtTop && (
          <motion.button
            key="up-btn"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(currentSectionIndex - 1)}
            className="w-14 h-14 rounded-full bg-[#D32F2F] text-white flex items-center justify-center shadow-2xl border-2 border-white/20"
            title="Previous Section"
          >
            <ArrowUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isAtBottom && (
          <motion.button
            key="down-btn"
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(currentSectionIndex + 1)}
            className="w-14 h-14 rounded-full bg-[#D32F2F] text-white flex items-center justify-center shadow-2xl border-2 border-white/20"
            title="Next Section"
          >
            <ArrowDown size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <TimberTypes />
      <Services />
      <Showroom />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollControl />
    </div>
  );
}
