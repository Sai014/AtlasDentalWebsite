// ==========================================================================
// Atlas Dental Clinic — MOCK DATA
// NOTE: All data below is MOCKED for a frontend-only demo. No backend calls.
// Content & images sourced from the original atlasdentalblr.com site.
// ==========================================================================

export const clinic = {
  name: "Atlas Dental Clinic",
  tagline: "Smile with Confidence, Shine with Pride",
  logo: "https://fplogoimages.withfloats.com/actual/69ea4366f90899d3af866de9.jpeg",
  phoneLandline: "08048034495",
  phoneIntl: "+918048034495",
  whatsapp: "+917899700268",
  whatsappDigits: "917899700268",
  email: "info@atlasdentalblr.com",
  address:
    "Ramdev Garden, 2nd Cross Rd, St Thomas Town, 1st Stage, Kacharakanahalli, Bengaluru, Karnataka, 560084",
  city: "Bengaluru",
  pincode: "560084",
  facebook: "https://facebook.com/1161629167029035",
  instagram: "https://instagram.com/atlas_dental26",
  website: "https://www.atlasdentalblr.com",
  mapLat: "13.0202818",
  mapLng: "77.6294298",
  hours: [
    { day: "Monday", time: "10:00 AM – 2:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 2:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 2:00 PM" },
    { day: "Thursday", time: "10:00 AM – 2:00 PM" },
    { day: "Friday", time: "3:00 PM – 7:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const heroImages = {
  main: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2",
  secondary: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
  cta: "https://images.unsplash.com/photo-1548382131-e0ebb1f0cdea",
  patient: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  smile: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed",
};

export const clinicImages = {
  interior1: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
  interior2: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787",
};

export const aboutHighlights = [
  {
    icon: "ShieldCheck",
    title: "Painless Procedures",
    desc: "Advanced techniques and sedation options for a calm, comfortable visit.",
  },
  {
    icon: "Sparkles",
    title: "Modern Technology",
    desc: "Digital imaging and 3D diagnostics for precise, accurate treatment.",
  },
  {
    icon: "Heart",
    title: "Personalized Care",
    desc: "Tailored treatment plans for every patient, of every age.",
  },
  {
    icon: "Droplets",
    title: "Global Hygiene Standards",
    desc: "Fully sterilized equipment and a spotless, spa-like ambiance.",
  },
];

export const stats = [
  { value: "3+", label: "Years of Care" },
  { value: "18", label: "Dental Services" },
  { value: "1000+", label: "Happy Smiles" },
  { value: "5★", label: "Patient Rating" },
];

export const doctor = {
  name: "Dr. Daniya Muskaan",
  role: "Dental Surgeon",
  image:
    "https://productimages.withfloats.com/staffimages/actual/6a0c03e4c128a5e80a39d58eDaniya",
  education: "Bachelor of Dental Sciences",
  experience: "3+ years",
  location: "Bengaluru",
  mobile: "8048034495",
  membership: "61474A",
  registration: "61474A",
  bio: [
    "Dr. Daniya Muskaan is a dedicated Dental Surgeon based in Bengaluru with a passion for creating healthy, confident smiles. With a Bachelor of Dental Sciences and over three years of clinical experience, she blends modern technology with a gentle, patient-first approach.",
    "She specializes in cosmetic dentistry — including porcelain veneers, teeth whitening and gum contouring — as well as crowns and bridges in zirconia and ceramic, and restorative work such as composite fillings. Every treatment is guided by thorough diagnosis using 3D imaging and biocompatible materials.",
    "Dr. Daniya believes dental care should feel calm and reassuring. Her clinic offers a spa-like, anxiety-reducing atmosphere with sedation options, ensuring each patient receives personalized care in complete comfort.",
  ],
  specialities: [
    "Cosmetic Dentistry",
    "Porcelain Veneers",
    "Teeth Whitening",
    "Gum Contouring",
    "Zirconia & Ceramic Crowns",
    "Composite Fillings",
    "3D Imaging Diagnosis",
  ],
};

// ---------------------------------------------------------------------------
// SERVICES (all 18)
// ---------------------------------------------------------------------------
export const services = [
  {
    id: 1,
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2",
    short:
      "Professional, dentist-supervised whitening for a brighter, more confident smile.",
    description:
      "We offer professional teeth whitening treatments to give you a brighter, more confident smile. Our advanced whitening procedures effectively remove stains caused by coffee, tea, smoking, and aging. Using safe and clinically approved whitening systems, our experienced dentists ensure visible results in a short time with minimal sensitivity. Whether you want a quick smile enhancement or a complete makeover, our teeth whitening delivers long-lasting and natural-looking results.",
    highlights: [
      "Professional teeth whitening in Bangalore",
      "Removes stains and discoloration effectively",
      "Quick and visible results",
      "Safe, dentist-supervised procedure",
      "Enhances smile and confidence",
    ],
  },
  {
    id: 2,
    slug: "dental-implants",
    title: "Dental Implants",
    icon: "Anchor",
    image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9",
    short:
      "Permanent titanium tooth roots that look, feel and function naturally.",
    description:
      "We offer advanced dental implant treatment to permanently replace missing teeth with strong, natural-looking solutions. Dental implants are titanium posts placed in the jawbone that act as artificial tooth roots, providing a stable foundation for crowns, bridges, or dentures. Our experienced dentists use modern techniques and precision planning to ensure safe, accurate, and long-lasting results. Implants not only restore your smile but also help preserve jawbone structure, improve chewing ability, and maintain facial aesthetics.",
    highlights: [
      "Permanent replacement for missing teeth",
      "Natural look and feel",
      "Strong and durable titanium implants",
      "Preserves jawbone and facial structure",
      "Improves chewing and speech",
      "Long-lasting and reliable solution",
    ],
  },
  {
    id: 3,
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
    short: "Save infected teeth and relieve pain with a painless, modern RCT.",
    description:
      "We provide advanced root canal treatment to save infected or severely decayed teeth and relieve pain effectively. This procedure removes the infected pulp inside the tooth, cleans and disinfects the root canals, and seals them to prevent further infection. Our experienced dentists use modern techniques and precision equipment to ensure a comfortable, painless, and efficient treatment experience. Root canal treatment helps preserve your natural tooth, avoiding the need for extraction while restoring normal function.",
    highlights: [
      "Pain-relieving treatment for infected teeth",
      "Saves natural tooth and prevents extraction",
      "Advanced, painless root canal procedure",
      "Eliminates infection and restores function",
      "Performed with modern technology and precision",
      "Long-lasting and reliable solution",
    ],
  },
  {
    id: 4,
    slug: "emergency-dental-care",
    title: "Emergency Dental Care",
    icon: "Siren",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
    short:
      "Fast relief for severe toothache, broken teeth, swelling and infections.",
    description:
      "Our emergency dental care handles severe toothache, broken or knocked-out teeth, swelling, infections, and bleeding gums with quick diagnosis and immediate pain relief. Our team is ready to assess your situation promptly and provide the care you need to protect your oral health and get you out of discomfort as quickly as possible.",
    highlights: [
      "Rapid diagnosis and pain relief",
      "Care for broken or knocked-out teeth",
      "Treatment for swelling and infections",
      "Support for bleeding gums",
      "Prompt, compassionate attention",
    ],
  },
  {
    id: 5,
    slug: "oral-cancer-screening",
    title: "Oral Cancer Screening",
    icon: "Search",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
    short:
      "Early detection screening of lips, tongue, gums, cheeks and throat.",
    description:
      "Our oral cancer screening involves a careful examination of the lips, tongue, gums, cheeks, and throat for early detection of abnormalities or lesions. Early detection is key, and screening is especially recommended for high-risk individuals, including those who use tobacco or alcohol. A quick, painless check can make a significant difference to long-term health.",
    highlights: [
      "Comprehensive soft-tissue examination",
      "Early detection of abnormalities and lesions",
      "Recommended for high-risk individuals",
      "Quick and painless screening",
      "Peace of mind through prevention",
    ],
  },
  {
    id: 6,
    slug: "periodontics-gum-care",
    title: "Periodontics (Gum Care)",
    icon: "Leaf",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    short:
      "Deep cleaning and gum therapy for healthy gums and fresh breath.",
    description:
      "Our periodontics services include deep cleaning (scaling and root planing), gum therapy, and treatment for bleeding gums, bad breath, gum recession, and periodontal infections. Healthy gums are the foundation of a healthy smile, and our targeted treatments help restore and maintain your gum health for the long term.",
    highlights: [
      "Scaling and root planing (deep cleaning)",
      "Treatment for bleeding gums and bad breath",
      "Care for gum recession",
      "Management of periodontal infections",
      "Foundation for lasting oral health",
    ],
  },
  {
    id: 7,
    slug: "laser-dentistry",
    title: "Laser Dentistry",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1667133295315-820bb6481730",
    short:
      "Minimally invasive laser procedures with less bleeding and faster healing.",
    description:
      "Our laser dentistry offers minimally invasive, laser-based procedures for gum contouring, infection control, cavity treatment, and soft tissue work. Laser treatment means less bleeding, faster healing, and often a reduced need for anesthesia — a gentler experience with excellent, precise results.",
    highlights: [
      "Minimally invasive procedures",
      "Precise gum contouring and soft tissue work",
      "Less bleeding and faster healing",
      "Often reduced need for anesthesia",
      "Effective infection and cavity control",
    ],
  },
  {
    id: 8,
    slug: "paediatric-dentistry",
    title: "Paediatric Dentistry",
    icon: "Baby",
    image: "https://images.unsplash.com/photo-1565090568947-7293970ba471",
    short:
      "Gentle, child-friendly care for infants, children and teens.",
    description:
      "Our paediatric dentistry provides child-friendly preventive and corrective care: routine check-ups, cavity fillings, fluoride treatments, habit correction, and oral hygiene education for infants through teens. We create a calm, welcoming environment that builds positive dental habits and confidence from an early age.",
    highlights: [
      "Routine check-ups for children",
      "Cavity fillings and fluoride treatments",
      "Habit correction guidance",
      "Oral hygiene education",
      "Friendly, anxiety-free environment",
    ],
  },
  {
    id: 9,
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    icon: "LayoutGrid",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787",
    short:
      "A personalized plan combining multiple procedures to restore your smile.",
    description:
      "Full mouth rehabilitation combines multiple procedures — crowns, bridges, implants, veneers, and bite correction — into a personalized plan to restore function and aesthetics for complex dental issues. We carefully sequence each step to rebuild your smile comprehensively, comfortably and beautifully.",
    highlights: [
      "Comprehensive, personalized treatment plan",
      "Combines crowns, bridges, implants and veneers",
      "Bite correction for proper function",
      "Restores both function and aesthetics",
      "Ideal for complex dental issues",
    ],
  },
  {
    id: 10,
    slug: "complete-partial-dentures",
    title: "Complete & Partial Dentures",
    icon: "Smile",
    image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9",
    short:
      "Custom-fit, affordable dentures to restore your smile and confidence.",
    description:
      "We provide complete dentures for fully edentulous patients and partial dentures for replacing some missing teeth while preserving remaining natural teeth. Each denture is custom-fit for comfort and chosen with affordability in mind, helping you eat, speak and smile with renewed confidence.",
    highlights: [
      "Complete dentures for full arches",
      "Partial dentures preserve natural teeth",
      "Custom-fit for comfort",
      "Affordable tooth-replacement option",
      "Restores chewing and speech",
    ],
  },
  {
    id: 11,
    slug: "aligners",
    title: "Aligners (Clear Aligners)",
    icon: "AlignJustify",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe",
    short:
      "Discreet, removable clear trays to straighten teeth comfortably.",
    description:
      "Clear aligners are transparent, removable trays for discreet teeth straightening. They correct crowding, gaps, and mild-to-moderate bite issues using digital scanning for precise treatment planning. Nearly invisible and comfortable, aligners fit seamlessly into everyday life while gradually revealing a straighter smile.",
    highlights: [
      "Nearly invisible appearance",
      "Removable during meals",
      "Corrects crowding and gaps",
      "Digital scanning for treatment planning",
      "Comfortable, discreet and convenient",
    ],
  },
  {
    id: 12,
    slug: "braces",
    title: "Braces",
    icon: "Grip",
    image: "https://images.unsplash.com/photo-1667133295315-820bb6481730",
    short:
      "Metal, ceramic or aesthetic braces with a personalized orthodontic plan.",
    description:
      "We offer metal, ceramic, or aesthetic braces to correct crowding, gaps, overbite, underbite, and misalignment, guided by a personalized orthodontic plan. Our approach ensures effective, steady correction while keeping comfort and aesthetics in mind throughout your treatment journey.",
    highlights: [
      "Metal, ceramic and aesthetic options",
      "Corrects crowding, gaps and bite issues",
      "Personalized orthodontic plan",
      "Steady, reliable results",
      "Comfort-focused treatment",
    ],
  },
  {
    id: 13,
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    icon: "Minus",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
    short:
      "Safe, painless removal of damaged, decayed or impacted teeth.",
    description:
      "We perform safe removal of severely damaged, decayed, or impacted teeth (including wisdom teeth) when a tooth cannot be saved. With attention to painless technique and thorough post-care guidance, we make the process comfortable and support your smooth, quick recovery.",
    highlights: [
      "Safe removal of damaged or decayed teeth",
      "Wisdom tooth extraction",
      "Gentle, painless technique",
      "Clear post-care guidance",
      "Comfort-focused approach",
    ],
  },
  {
    id: 14,
    slug: "dental-crowns-bridges",
    title: "Dental Crowns & Bridges",
    icon: "Crown",
    image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9",
    short:
      "Custom ceramic/zirconia crowns and bridges matched to your natural teeth.",
    description:
      "We craft custom ceramic and zirconia crowns to protect damaged teeth, and bridges to replace one or more missing teeth. Each restoration is carefully matched to your natural tooth shape, size, and color, delivering strength and a seamless, natural-looking result you can rely on for years.",
    highlights: [
      "Custom ceramic and zirconia crowns",
      "Bridges to replace missing teeth",
      "Matched to natural shape, size and color",
      "Strong and durable",
      "Natural-looking results",
    ],
  },
  {
    id: 15,
    slug: "dental-veneers",
    title: "Dental Veneers",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed",
    short:
      "Thin custom shells for a complete, radiant smile makeover.",
    description:
      "Dental veneers are thin, custom porcelain or composite shells covering the front of teeth to correct discoloration, gaps, chips, and uneven alignment for a full smile makeover. Designed to look completely natural, veneers transform your smile with a bright, balanced and confident finish.",
    highlights: [
      "Custom porcelain or composite shells",
      "Corrects discoloration, gaps and chips",
      "Improves uneven alignment",
      "Natural-looking smile makeover",
      "Bright, balanced results",
    ],
  },
  {
    id: 16,
    slug: "tooth-coloured-filling",
    title: "Tooth-Coloured Filling (Composite)",
    icon: "Dot",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
    short:
      "Mercury-free, shade-matched composite fillings that look natural.",
    description:
      "Our mercury-free, shade-matched composite fillings treat cavities with a natural-looking, minimally invasive alternative to metal fillings. Matched precisely to your tooth color, these fillings restore strength and appearance while preserving as much of your natural tooth as possible.",
    highlights: [
      "Mercury-free composite material",
      "Shade-matched to natural teeth",
      "Minimally invasive treatment",
      "Natural-looking result",
      "Preserves natural tooth structure",
    ],
  },
  {
    id: 17,
    slug: "scaling-polishing",
    title: "Scaling & Polishing",
    icon: "Wind",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    short:
      "Ultrasonic professional cleaning to remove plaque, tartar and stains.",
    description:
      "Our ultrasonic professional teeth cleaning removes plaque, tartar, and stains, helping prevent gum disease, bad breath, and decay. A regular scaling and polishing keeps your teeth fresh, clean and healthy — an essential part of preventive dental care.",
    highlights: [
      "Ultrasonic professional cleaning",
      "Removes plaque, tartar and stains",
      "Prevents gum disease and bad breath",
      "Helps prevent decay",
      "Fresh, clean and healthy teeth",
    ],
  },
  {
    id: 18,
    slug: "consultation-digital-xray",
    title: "Consultation & Digital X-ray",
    icon: "ScanLine",
    image: "https://images.unsplash.com/photo-1667133295315-820bb6481730",
    short:
      "General consultation with low-radiation digital X-ray imaging.",
    description:
      "Our general dental consultation is paired with low-radiation digital X-ray imaging for accurate diagnosis and treatment planning. Digital imaging gives us a clear, detailed view of your oral health so we can recommend the right care with confidence and precision.",
    highlights: [
      "Comprehensive dental consultation",
      "Low-radiation digital X-ray imaging",
      "Accurate diagnosis",
      "Precise treatment planning",
      "Clear view of oral health",
    ],
  },
];

// ---------------------------------------------------------------------------
// GALLERY
// ---------------------------------------------------------------------------
export const gallery = [
  "https://fpimages.withfloats.com/actual/6a3a11ad09044fbc6f0db0a0.jpg",
  "https://fpimages.withfloats.com/actual/6a3a118e5c6c56c600e63b1f.jpg",
  "https://fpimages.withfloats.com/actual/6a3a1174467f876f79439fae.jpg",
  "https://fpimages.withfloats.com/actual/6a3a1169af3bc14a6e2e2e0f.jpg",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
  "https://images.unsplash.com/photo-1667133295315-820bb6481730",
  "https://images.unsplash.com/photo-1565090568947-7293970ba471",
];

// ---------------------------------------------------------------------------
// BLOG / UPDATES
// ---------------------------------------------------------------------------
export const blogs = [
  {
    id: 42,
    slug: "wisdom-tooth-removal-can-prevent-future-dental-problems",
    title: "Wisdom Tooth Removal Can Prevent Future Dental Problems",
    date: "Aug 13, 2026",
    dateTime: "2026-08-13",
    image: "https://bizimages.withfloats.com/actual/6a7d9977617ed27888ceedc2.jpg",
    excerpt:
      "Wisdom teeth are the last set of permanent molars to develop, usually appearing between the ages of 17 and 25. Many become impacted, which is why timely evaluation matters.",
    keywords: [
      "Wisdom Tooth Removal",
      "impacted wisdom tooth",
      "Digital dental X-rays",
      "Atlas Dental Clinic",
    ],
    content: [
      { type: "p", text: "Wisdom teeth are the last set of permanent molars to develop, usually appearing between the ages of 17 and 25. While some wisdom teeth erupt normally without causing any issues, many become impacted or grow at an angle because there isn't enough space in the jaw. In these situations, wisdom tooth removal may be recommended to prevent pain, infection, and damage to nearby teeth." },
      { type: "p", text: "Many people postpone treatment because they assume wisdom tooth removal is only necessary when severe pain develops. However, dentists often recommend removing problematic wisdom teeth before complications become more serious." },
      { type: "h2", text: "What Is an Impacted Wisdom Tooth?" },
      { type: "p", text: "An impacted wisdom tooth is one that cannot fully emerge through the gums due to limited space or an improper angle of eruption. A wisdom tooth may be:" },
      { type: "ul", items: ["Fully impacted inside the jawbone", "Partially erupted through the gums", "Growing sideways", "Pressing against the neighbouring tooth", "Trapped beneath the gum tissue"] },
      { type: "p", text: "Not every impacted tooth causes immediate symptoms, which is why routine dental examinations are important." },
      { type: "h2", text: "Common Signs You May Need Wisdom Tooth Removal" },
      { type: "ul", items: ["Pain at the back of the mouth", "Swollen or tender gums", "Difficulty opening the mouth fully", "Jaw discomfort", "Food getting trapped around the tooth", "Repeated gum infections", "Bad breath caused by trapped bacteria"] },
      { type: "p", text: "If left untreated, impacted wisdom teeth can contribute to decay, gum disease, and damage to adjacent teeth." },
      { type: "h2", text: "What Happens During Wisdom Tooth Removal?" },
      { type: "p", text: "The procedure depends on whether the tooth has fully erupted or remains impacted beneath the gum. Treatment usually involves local anaesthesia for comfort, careful access to the tooth, removal (sometimes in smaller sections), cleaning of the area, and placement of stitches if required. Modern surgical techniques have made the procedure much more comfortable than many people expect." },
      { type: "h2", text: "Recovery After the Procedure" },
      { type: "ul", items: ["Apply cold packs during the first day", "Eat soft foods for a few days", "Avoid smoking and alcohol", "Keep the extraction area clean", "Take prescribed medication as directed", "Attend follow-up appointments if advised"] },
      { type: "h2", text: "Choosing an Experienced Dental Provider" },
      { type: "p", text: "Wisdom tooth removal requires careful planning, accurate diagnosis, and appropriate surgical techniques. Atlas Dental Clinic offers comprehensive assessments using modern diagnostic technology to determine whether extraction is necessary and to ensure every procedure is planned according to the patient's specific needs." },
    ],
  },
  {
    id: 41,
    slug: "invisalign-and-clear-aligners-treatment-for-a-comfortable-smile-transformation",
    title: "Invisalign and Clear Aligners Treatment for a Comfortable Smile Transformation",
    date: "Aug 11, 2026",
    dateTime: "2026-08-11",
    image: "https://bizimages.withfloats.com/actual/6a7ac149be786e2a09412268.jpg",
    excerpt:
      "Clear aligners have changed orthodontic care by offering a discreet, comfortable way to improve tooth alignment without visible metal brackets.",
    keywords: [
      "Invisalign",
      "Clear aligners",
      "digital planning",
      "orthodontics",
    ],
    content: [
      { type: "p", text: "Many people would like straighter teeth but hesitate to wear traditional braces because of their appearance or lifestyle concerns. Invisalign and clear aligners treatment has changed orthodontic care by offering a discreet and comfortable way to improve tooth alignment without visible metal brackets." },
      { type: "p", text: "Clear aligners are custom-made, removable trays that gradually move teeth into better positions. They are suitable for many teenagers and adults looking for a modern orthodontic solution that fits into everyday life." },
      { type: "h2", text: "What Are Clear Aligners?" },
      { type: "p", text: "Clear aligners are transparent orthodontic trays made specifically for your teeth using digital planning and advanced imaging. Each set of aligners is worn for a prescribed period before progressing to the next stage, applying gentle, controlled pressure that gradually shifts teeth into the desired position." },
      { type: "h2", text: "What Dental Problems Can They Correct?" },
      { type: "ul", items: ["Crowded teeth", "Gaps between teeth", "Mild to moderate bite problems", "Crooked teeth", "Relapse after previous orthodontic treatment"] },
      { type: "h2", text: "Benefits of Invisalign and Clear Aligners" },
      { type: "ul", items: ["Nearly invisible appearance", "Comfortable smooth material", "Removable during meals", "Easier brushing and flossing", "Fewer dietary restrictions", "Customized treatment planning"] },
      { type: "h2", text: "How the Treatment Process Works" },
      { type: "p", text: "Clear aligner treatment begins with a detailed consultation and digital assessment, followed by digital scans, customized treatment planning, fabrication of aligners, regular progress reviews, and retainers after treatment completion. Digital planning allows patients to understand the expected movement of their teeth before treatment begins." },
      { type: "h2", text: "Achieving a Straighter Smile with Confidence" },
      { type: "p", text: "Atlas Dental Clinic provides customized Invisalign and clear aligner treatment plans supported by advanced digital technology and ongoing clinical supervision, so patients can enjoy a straighter smile while maintaining comfort throughout their orthodontic journey." },
    ],
  },
  {
    id: 40,
    slug: "choosing-the-right-dentist-for-children-helps-build-healthy-smiles-for-life",
    title: "Choosing the Right Dentist for Children Helps Build Healthy Smiles for Life",
    date: "Aug 7, 2026",
    dateTime: "2026-08-07",
    image: "https://bizimages.withfloats.com/actual/6a75ac72f81ae71ab168ef3f.jpg",
    excerpt:
      "A child's early experiences at the dentist can influence their attitude toward oral healthcare for many years. Positive visits build healthy habits and reduce fear.",
    keywords: [
      "Dentist for Children",
      "Preventive dental care",
      "child-friendly dental experience",
      "Bengaluru",
    ],
    content: [
      { type: "p", text: "A child's early experiences at the dentist can influence their attitude toward oral healthcare for many years. Positive dental visits encourage healthy habits, reduce fear, and help identify developing dental concerns before they become serious. Choosing a clinic that understands the unique needs of young patients is one of the best investments you can make in your child's long-term health." },
      { type: "h2", text: "Why Early Dental Visits Are Important" },
      { type: "ul", items: ["Monitor tooth development", "Identify cavities in their initial stages", "Check bite alignment", "Evaluate jaw growth", "Teach proper brushing techniques", "Build confidence during dental visits"] },
      { type: "h2", text: "Common Dental Problems in Children" },
      { type: "ul", items: ["Tooth decay", "Early childhood cavities", "Gum inflammation", "Broken or chipped teeth", "Thumb-sucking effects", "Teeth grinding", "Delayed eruption of permanent teeth"] },
      { type: "h2", text: "Creating a Child-Friendly Dental Experience" },
      { type: "p", text: "Children respond differently to healthcare environments than adults. A calm, welcoming atmosphere can significantly reduce anxiety. A child-focused visit usually includes friendly communication, gentle examination, age-appropriate explanations, positive encouragement, and preventive advice for parents." },
      { type: "h2", text: "Preventive Dentistry Makes a Difference" },
      { type: "ul", items: ["Routine dental examinations", "Professional cleaning", "Fluoride application", "Fissure sealants", "Oral hygiene education", "Dietary guidance"] },
      { type: "h2", text: "Supporting Healthy Smiles Through Every Stage of Growth" },
      { type: "p", text: "Atlas Dental Clinic provides comprehensive dental care for children in a comfortable and supportive environment, focusing on prevention, education, and gentle treatment — helping young patients develop healthy oral habits that last well into adulthood." },
    ],
  },
  {
    id: 39,
    slug: "choosing-a-teeth-whitening-clinic-for-safe-and-lasting-results",
    title: "Choosing a Teeth Whitening Clinic for Safe and Lasting Results",
    date: "Aug 5, 2026",
    dateTime: "2026-08-05",
    image: "https://bizimages.withfloats.com/tile/6a72f1008e720851fd826a1b.jpg",
    excerpt:
      "Professional, dentist-supervised whitening delivers brighter results safely — here's what to look for when choosing a clinic.",
    keywords: ["Teeth Whitening", "professional whitening", "safe results"],
    content: [
      { type: "p", text: "A brighter smile can boost confidence instantly, but achieving safe and lasting whitening results depends on choosing the right clinic. Professional, dentist-supervised whitening uses clinically approved systems that minimise sensitivity while delivering visible improvements." },
      { type: "h2", text: "Why Professional Whitening Matters" },
      { type: "ul", items: ["Dentist-supervised, clinically approved systems", "Controlled concentration for minimal sensitivity", "Even, natural-looking results", "Assessment of underlying dental health first", "Guidance to maintain results longer"] },
      { type: "h2", text: "Lasting Results with Expert Care" },
      { type: "p", text: "At Atlas Dental Clinic, our whitening treatments remove stains from coffee, tea, smoking and aging while keeping your enamel healthy — for a radiant smile you can maintain with simple aftercare." },
    ],
  },
  {
    id: 38,
    slug: "dental-veneers-treatment-creates-a-more-balanced-and-confident-smile",
    title: "Dental Veneers Treatment Creates a More Balanced and Confident Smile",
    date: "Aug 3, 2026",
    dateTime: "2026-08-03",
    image: "https://bizimages.withfloats.com/tile/6a70732f882b787d190c19fc.jpg",
    excerpt:
      "Thin custom shells can correct discoloration, gaps and chips to transform your smile — here's how veneers work.",
    keywords: ["Dental Veneers", "smile makeover", "cosmetic dentistry"],
    content: [
      { type: "p", text: "Dental veneers are thin, custom-made shells that cover the front surface of teeth to improve their appearance. They are an effective solution for correcting discoloration, gaps, chips, and uneven alignment, creating a balanced and confident smile." },
      { type: "h2", text: "What Veneers Can Correct" },
      { type: "ul", items: ["Discolored or stained teeth", "Small gaps between teeth", "Chipped or worn teeth", "Slightly uneven alignment", "Irregular tooth shape"] },
      { type: "h2", text: "A Personalized Smile Makeover" },
      { type: "p", text: "At Atlas Dental Clinic, veneers are carefully matched to your natural tooth colour and shape using biocompatible materials, delivering a natural-looking, long-lasting smile transformation." },
    ],
  },
  {
    id: 37,
    slug: "ceramic-cap-with-zirconia-offers-strength-natural-appearance-and-long-term-confidence",
    title: "Ceramic Cap with Zirconia Offers Strength, Natural Appearance, and Long-Term Confidence",
    date: "Aug 1, 2026",
    dateTime: "2026-08-01",
    image: "https://bizimages.withfloats.com/tile/6a6c7a66a50bbc52d3debc73.jpg",
    excerpt:
      "Zirconia crowns combine exceptional strength with a natural look, making them a reliable choice for restoring damaged teeth.",
    keywords: ["Zirconia crown", "ceramic cap", "crowns and bridges"],
    content: [
      { type: "p", text: "A dental crown, or cap, restores a damaged tooth's shape, size and strength. Zirconia crowns have become a popular choice because they combine outstanding durability with a natural, tooth-like appearance." },
      { type: "h2", text: "Benefits of Zirconia Crowns" },
      { type: "ul", items: ["Exceptional strength and durability", "Natural, translucent appearance", "Biocompatible and gentle on gums", "Precise, comfortable fit", "Long-term reliable performance"] },
      { type: "h2", text: "Restoring Confidence at Atlas Dental Clinic" },
      { type: "p", text: "Our zirconia and ceramic crowns are matched to your natural teeth for a seamless result, protecting damaged teeth while restoring full function and a confident smile." },
    ],
  },
];

// ---------------------------------------------------------------------------
// BOOKING WIDGET OPTIONS
// ---------------------------------------------------------------------------
export const consultationModes = [
  { id: "in-clinic", label: "In-Clinic Visit", icon: "MapPin", desc: "Visit us at our Bengaluru clinic" },
  { id: "video-call", label: "Video Consultation", icon: "Video", desc: "Consult from the comfort of home" },
];

export const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Teeth Whitening",
    rating: 5,
    text: "The whitening results were amazing and completely painless. The clinic feels calm and spotless — genuinely the best dental experience I've had in Bengaluru.",
  },
  {
    name: "Rahul Menon",
    role: "Root Canal Treatment",
    rating: 5,
    text: "I was terrified of my root canal, but Dr. Daniya made it completely comfortable. No pain at all and the whole team was so reassuring.",
  },
  {
    name: "Anjali Reddy",
    role: "Clear Aligners",
    rating: 5,
    text: "My aligner journey was smooth from start to finish. The digital scan showed me exactly what to expect and my smile looks fantastic now.",
  },
  {
    name: "Vikram Nair",
    role: "Dental Implants",
    rating: 5,
    text: "Professional, modern and gentle. My implant feels completely natural. Highly recommend Atlas Dental for anyone considering the procedure.",
  },
];

// ---------------------------------------------------------------------------
// FAQ (Answer Engine Optimization)
// ---------------------------------------------------------------------------
export const faqs = [
  {
    q: "Where is Atlas Dental Clinic located?",
    a: "Atlas Dental Clinic is located at Ramdev Garden, 2nd Cross Rd, St Thomas Town, 1st Stage, Kacharakanahalli, Bengaluru, Karnataka 560084 — near Kammanahalli.",
  },
  {
    q: "What are your clinic timings?",
    a: "We are open Monday to Thursday from 10:00 AM to 2:00 PM and on Friday from 3:00 PM to 7:00 PM. We remain closed on Saturday and Sunday.",
  },
  {
    q: "How do I book an appointment at Atlas Dental Clinic?",
    a: "You can book instantly using the 'Book Appointment' button on our website — choose your service, consultation mode (in-clinic or video call), a date and time, and enter your details. You can also call us on 08048034495 or message us on WhatsApp at +91 78997 00268.",
  },
  {
    q: "Do you offer painless dental treatments?",
    a: "Yes. We prioritise your comfort with painless procedures, sedation options and a calm, spa-like ambiance. Modern techniques and digital imaging help make every treatment gentle and precise.",
  },
  {
    q: "Which dental services do you provide?",
    a: "We offer 18 services including teeth whitening, dental implants, root canal treatment, clear aligners, braces, veneers, crowns & bridges, paediatric dentistry, gum care, laser dentistry, tooth-coloured fillings, scaling & polishing and consultation with digital X-ray.",
  },
  {
    q: "Do you offer online video consultations?",
    a: "Yes, you can choose a video consultation while booking your appointment and consult Dr. Daniya Muskaan from the comfort of your home.",
  },
  {
    q: "Is teeth whitening safe?",
    a: "Absolutely. Our whitening is dentist-supervised using safe, clinically approved systems that remove stains effectively with minimal sensitivity and natural-looking results.",
  },
];
