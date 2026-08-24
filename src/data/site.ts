// All site content for AMS — Anchorage Management System (by SDLC Corp).
// Copy is rebranded from the source template to the maritime / port domain,
// derived from the Fujairah Anchorage & Berthing Management System proposal.
// Visual assets still point at the original CDN so the layout renders identically.
const CDN = "https://framerusercontent.com";

export const assets = {
  // Drop your own file at public/hero.mp4 — it plays first; the CDN clip is the fallback.
  heroVideo: `/hero.mp4`,
  heroVideoFallback: `${CDN}/assets/7fXDqEHIBqWkfaAU7ddHgPqholw.mp4`,
  heroPoster: `${CDN}/images/w9K8ltdxMfkapZKUCjyk8m6Og.jpg?width=1280&height=720`,
  ctaVideo: `${CDN}/assets/GYCz6Ymt7idciwLxF8zcjDAuRw.mp4`,
  ctaPoster: `${CDN}/images/aGYk5EhGaTzvHxXBeBUjpK2yRc.jpg?width=1280&height=720`,
  // Drop your three files in public/ with these exact names to override the gallery.
  mission: [
    `/mission-1.png`,
    `/mission-2.png`,
    `/mission-3.png`,
  ],
  industry: `${CDN}/images/hEGOgZnpAPU8I68JZeko7T01Ol0.webp?width=800&height=850`,
  whyChoose: `${CDN}/images/Gdo42bSmVjrVLILvdyckFnMWik.jpeg?scale-down-to=1024&width=1800&height=2400`,
  techDiagram: `${CDN}/images/4KluVUQuXBnDOWzakyX9efg89w.svg?width=800&height=712`,
  panorama: `${CDN}/images/nX96g0CuAExorzUDh8oCjPpiBHM.jpg?scale-down-to=2048&width=6106&height=2534`,
  caseStudy1: `${CDN}/images/2JR7oxoJ0fr6iNFrFx4UCG4wuxg.jpg?width=800&height=500`,
  avatars: [
    `${CDN}/images/rvVsRZjAKkiA0nvOxWWVXzG9L6s.jpg?width=120&height=120`,
    `${CDN}/images/xq32zRpRjVzf1gkXaDT2n1vil3s.jpg?width=120&height=120`,
    `${CDN}/images/UY6B0qS4hdcjlEgPYtxTooD5yA.jpg?width=120&height=120`,
    `${CDN}/images/jm0dvrhBRn67BN7gXkLvk9Ymi4.jpg?width=120&height=120`,
    `${CDN}/images/nSZJQpCu25uRO9lrT3cjUnyKmk.jpg?width=120&height=120`,
  ],
};

// Each item is either a route (`to`) or an in-page anchor on the home page (`hash`).
export const nav: { label: string; to?: string; hash?: string }[] = [
  { label: "Home", to: "/" },
  { label: "Solution", hash: "solution" },
  { label: "Pricing", hash: "pricing" },
  { label: "Case studies", to: "/case-studies" },
  { label: "Insights", to: "/insights" },
];

export const hero = {
  title: "Anchorage Management System for the modern ports",
  body: "Real-time vessel tracking, AI-predicted occupancy and intelligent berth assignment for the modern port.",
  cta: "Request a demo",
  card: "How a leading port turned anchorage chaos into a real-time operation",
  cardImage: `${CDN}/images/8cUgs5U8JERfBz2wyLRNN4fmHw.jpg?width=770&height=950`,
  cardStats: [
    { value: "500+", label: "Vessels tracked in real time" },
    { value: "30%", label: "Higher anchorage utilization" },
  ],
};

export const mission = {
  eyebrow: "Our mission",
  title:
    "AMS is redefining how ports manage every anchorage, berth and vessel movement.",
  cta: "About the system",
  captions: ["Real-time tracking", "Predictive occupancy", "Safer operations"],
};

export const industries = {
  eyebrow: "What AMS does",
  title: "Complete anchorage and berthing management across every port operation",
  tabs: [
    {
      title: "Real-time monitoring",
      // Drop your own file at public/features/real-time-monitoring.jpg to override.
      image: `/features/real-time-monitoring.jpg`,
      imageFallback: `${CDN}/images/hEGOgZnpAPU8I68JZeko7T01Ol0.webp?width=800&height=850`,
      body: "AMS gives control-tower operators a single, live picture of every vessel in the anchorage and berthing areas, fusing AIS, VTMIS and VTS data with AI-driven decision support.",
      points: [
        "Continuous vessel tracking with automatic anomaly and safety alerts",
        "Live fusion of AIS, VTMIS and VTS feeds on one operational map",
        "Automatic anomaly detection for unusual speed or course deviations",
        "Geofencing and safety-margin enforcement for collision-free operations",
      ],
    },
    {
      title: "Occupancy management",
      image: `/features/occupancy-management.jpg`,
      imageFallback: `${CDN}/images/Gdo42bSmVjrVLILvdyckFnMWik.jpeg?scale-down-to=1024&width=1800&height=2400`,
      body: "Predict and plan how anchorage and berth space is used, hours or days ahead, so operators can maximise throughput without compromising safety margins.",
      points: [
        "AI-predicted occupancy for smarter space planning ahead of time",
        "Live capacity and utilisation dashboards per zone",
        "What-if scenario planning for peak-traffic windows",
        "Historical occupancy trends to inform port expansion",
      ],
    },
    {
      title: "Anchorage assignment",
      image: `/features/anchorage-assignment.jpg`,
      imageFallback: `${CDN}/images/nX96g0CuAExorzUDh8oCjPpiBHM.jpg?scale-down-to=2048&width=6106&height=2534`,
      body: "Assign vessels to the safest, most efficient anchorage automatically, accounting for draft, size, cargo type and weather, with full manual override.",
      points: [
        "Intelligent anchorage assignment with manual override",
        "Draft-, size- and cargo-aware slot allocation",
        "Weather- and tide-adjusted positioning recommendations",
        "Conflict detection before a vessel is ever assigned",
      ],
    },
    {
      title: "Berthing management",
      image: `/features/berthing-management.jpg`,
      imageFallback: `${CDN}/images/2JR7oxoJ0fr6iNFrFx4UCG4wuxg.jpg?width=800&height=500`,
      body: "Coordinate berth allocation, arrivals and departures end to end, reducing waiting time and turnaround while keeping every stakeholder in sync.",
      points: [
        "Optimised berth allocation and scheduling",
        "Arrival, departure and turnaround coordination",
        "Reduced vessel waiting time and demurrage",
        "Shared schedule visibility for pilots, tugs and agents",
      ],
    },
    {
      title: "Safety & compliance",
      image: `/features/safety-compliance.jpg`,
      imageFallback: `${CDN}/images/hEGOgZnpAPU8I68JZeko7T01Ol0.webp?width=800&height=850`,
      body: "Enforce safety zones, collision-avoidance rules and regulatory requirements automatically, with a complete audit trail for every decision.",
      points: [
        "Automated safety-zone and collision-avoidance enforcement",
        "Configurable rules aligned to IMO and local regulations",
        "Full audit trail of alerts, overrides and actions",
        "Incident reconstruction from recorded vessel history",
      ],
    },
    {
      title: "Analytics & reporting",
      image: `/features/analytics-reporting.jpg`,
      imageFallback: `${CDN}/images/Gdo42bSmVjrVLILvdyckFnMWik.jpeg?scale-down-to=1024&width=1800&height=2400`,
      body: "Turn operational data into insight with dashboards, KPIs and exportable reports that reveal how your anchorage and berths really perform.",
      points: [
        "Operational KPIs and performance dashboards",
        "Custom, scheduled and exportable reports",
        "Trend analysis across occupancy, wait time and throughput",
        "Data-driven insight for capacity planning",
      ],
    },
    {
      title: "Alerts & notifications",
      image: `/features/alerts-notifications.jpg`,
      imageFallback: `${CDN}/images/nX96g0CuAExorzUDh8oCjPpiBHM.jpg?scale-down-to=2048&width=6106&height=2534`,
      body: "Keep the right people informed the moment something matters, from safety breaches to schedule changes, across the channels teams already use.",
      points: [
        "Real-time safety, anomaly and geofence alerts",
        "Configurable thresholds and escalation rules",
        "Multi-channel delivery via dashboard, email and SMS",
        "Acknowledgement tracking for accountability",
      ],
    },
    {
      title: "System integration",
      image: `/features/system-integration.jpg`,
      imageFallback: `${CDN}/images/2JR7oxoJ0fr6iNFrFx4UCG4wuxg.jpg?width=800&height=500`,
      body: "Connect AMS to the systems you already run, including AIS, VTMIS, VTS and port community systems, through open, standards-based interfaces.",
      points: [
        "Native AIS, VTMIS and VTS integration",
        "Open APIs and standards-based data exchange",
        "Interoperability with port community systems",
        "Flexible on-premise or cloud deployment",
      ],
    },
  ],
};

export const services = {
  eyebrow: "Core features",
  title: "Key features of the AMS platform",
  items: [
    {
      title: "Real-time vessel monitoring",
      body: "Continuous tracking of every vessel with AIS/VTMIS integration and automatic anomaly detection for unusual speed or course deviations.",
    },
    {
      title: "Predictive occupancy management",
      body: "AI and ML models forecast current and future anchorage occupancy from historical data, seasonal trends and weather conditions.",
    },
    {
      title: "Intelligent anchorage & berth assignment",
      body: "Automated allocation based on vessel specifications, purpose of call and live occupancy, with full manual override for operators.",
    },
    {
      title: "Reporting & analytics",
      body: "Customizable dashboards, heat maps and exports (PDF, Excel, CSV) covering usage, dwell time and vessel movements.",
    },
    {
      title: "Safety zones & collision avoidance",
      body: "Automated geofencing and safe-distance enforcement flag unsafe proximity and course conflicts before they become incidents.",
    },
    {
      title: "Real-time alerts & notifications",
      body: "Configurable alerts for anomalies, safety breaches and schedule changes, delivered across dashboard, email and SMS with acknowledgement tracking.",
    },
    {
      title: "Seamless system integration",
      body: "Open, standards-based APIs connect AMS to your AIS, VTMIS, VTS Norcontrol and PRISM systems without rip-and-replace.",
    },
    {
      title: "Historical playback & audit trail",
      body: "Replay recorded vessel movements and reconstruct incidents with a complete, timestamped audit trail of every alert, override and action.",
    },
  ],
};

// Product UI showcase. Drop your real screenshots in public/ with these names
// (screenshot-1.png … screenshot-3.png); until then the CDN `fallback` renders.
export const screenshots = {
  eyebrow: "Product tour",
  title: "See the AMS control tower in action",
  subtitle:
    "One live workspace for your whole anchorage: tracking, prediction and assignment in a single view.",
  shots: [
    {
      label: "Live anchorage map",
      src: "/screenshot-1.png",
      fallback: `${CDN}/images/nX96g0CuAExorzUDh8oCjPpiBHM.jpg?scale-down-to=2048&width=6106&height=2534`,
    },
    {
      label: "Occupancy prediction",
      src: "/screenshot-2.png",
      fallback: `${CDN}/images/hEGOgZnpAPU8I68JZeko7T01Ol0.webp?width=800&height=850`,
    },
    {
      label: "Berth assignment",
      src: "/screenshot-3.png",
      fallback: `${CDN}/images/2JR7oxoJ0fr6iNFrFx4UCG4wuxg.jpg?width=800&height=500`,
    },
    {
      label: "Anomaly alerts",
      src: "/screenshot-4.png",
      fallback: `${CDN}/images/Gdo42bSmVjrVLILvdyckFnMWik.jpeg?scale-down-to=1024&width=1800&height=2400`,
    },
    {
      label: "Historical playback",
      src: "/screenshot-5.png",
      fallback: `${CDN}/images/gEUUTpbdoYlnFmF72D8qaN4JZQ8.jpg?scale-down-to=1024&width=1800&height=2400`,
    },
  ],
};

export const whyChoose = {
  eyebrow: "Why choose us",
  title: "Why AMS is the smarter choice for port operations",
  cta: "Meet our team",
  items: [
    {
      title: "Purpose-built for ports",
      body: "Custom-built around your port's workflows, safety protocols and strategic objectives, not a generic off-the-shelf tool.",
    },
    {
      title: "AI & ML at the core",
      body: "Predictive occupancy, anomaly detection and berth optimization powered by models trained on your historical operations.",
    },
    {
      title: "Secure & fully integrated",
      body: "On-premises or private-cloud deployment with AES-256 encryption, RBAC and seamless PRISM, VTMIS and VTS Norcontrol integration.",
    },
    {
      title: "Real-time situational awareness",
      body: "Live vessel tracking, berth status and terminal activity on a single dashboard, so your team acts on what's happening now, not what happened an hour ago.",
    },
    {
      title: "Scales with your operations",
      body: "From a single terminal to a multi-port network, AMS grows with you, adding berths, users and data streams without re-architecting the platform.",
    },
  ],
};

export const metrics = {
  eyebrow: "Impact in numbers",
  title: "Driving measurable gains across every vessel, berth and anchorage.",
  stats: [
    { value: 500, suffix: "+", label: "Vessels monitored in real time", icon: "pin" },
    { value: 25, suffix: "%", label: "Reduction in vessel waiting time", icon: "arrowDown" },
    { value: 30, suffix: "%", label: "Higher anchorage & berth utilization", icon: "cloud" },
    { value: 99, suffix: "%", label: "System uptime & live data sync", icon: "droplet" },
  ],
};

export const technology = {
  eyebrow: "Powered by AI & ML",
  title: "Real-time port intelligence powered by AI and machine learning",
  body: "AMS combines live maritime data feeds with AI and machine learning to give the control tower accurate, real-time and predictive intelligence across all anchorage and berthing operations.",
  cta: "Explore the platform",
  features: [
    "AIS & VTMIS data integration",
    "AI-powered occupancy prediction",
    "Anomaly detection & safety alerts",
    "Geofencing & safe-distance enforcement",
    "Real-time tracking & historical playback",
  ],
};

export const testimonials = {
  eyebrow: "Testimonials",
  title: "What port and maritime leaders say",
  subtitle:
    "Trusted by port authorities and control-tower teams for safer, more efficient operations",
  items: [
    {
      name: "Emma Carter",
      role: "Harbour Master",
      quote:
        "AMS gave our control tower one live view of the whole anchorage, and assignments that used to take phone calls now happen in seconds.",
      avatar: 0,
    },
    {
      name: "Ethan Wilson",
      role: "VTS Operations Manager",
      quote:
        "Predictive occupancy lets us plan for peak arrivals days ahead. Congestion and waiting time have dropped noticeably.",
      avatar: 1,
    },
    {
      name: "James Turner",
      role: "Port Operations Director",
      quote:
        "The anomaly alerts and safety margins have made a real difference to how confidently we manage a busy anchorage.",
      avatar: 2,
    },
    {
      name: "Olivia Brown",
      role: "Berth Planning Manager",
      quote:
        "Intelligent berth assignment with manual override gives us automation without ever losing operator control.",
      avatar: 3,
    },
    {
      name: "David Lee",
      role: "Marine Services Lead",
      quote:
        "Seamless integration with our existing PRISM and VTS systems meant AMS fit into our operations from day one.",
      avatar: 4,
    },
    {
      name: "Noah Brooks",
      role: "Control Tower Supervisor",
      quote:
        "The mobile app keeps our team informed of arrivals and alerts even when we're away from the workstation.",
      avatar: 0,
    },
  ],
};

export const caseStudies = {
  eyebrow: "Case studies",
  title: "Proven results: case studies from SDLC Corp's maritime & logistics platforms",
  cta: "See all case studies",
  items: [
    {
      name: "Freight forwarding platform,",
      tag: "real-time shipment visibility",
      stats: [
        { value: "10+", label: "Countries live on the platform" },
        { value: "100%", label: "Automated milestone notifications" },
      ],
    },
    {
      name: "Global visibility platform,",
      tag: "multi-modal tracking & AI ETAs",
      stats: [
        { value: "80+", label: "Airlines integrated for air tracking" },
        { value: "3", label: "Modes tracked: ocean, air and road" },
      ],
    },
  ],
};

export const ctaBanner = {
  title: "Ready to modernize your anchorage and berthing operations?",
  body: "Let's build a secure, AI-driven management system tailored to your port, improving safety, space utilization and operational efficiency.",
  cta: "Request a demo",
};

export const blog = {
  eyebrow: "Insights",
  title: "Insights for smarter, safer port operations",
  items: [
    {
      category: "Technology",
      date: "Aug 13, 2026",
      title: "How AI is transforming anchorage occupancy planning",
      img: `${CDN}/images/Gdo42bSmVjrVLILvdyckFnMWik.jpeg?scale-down-to=1024&width=1800&height=2400`,
    },
    {
      category: "Safety",
      date: "Aug 10, 2026",
      title: "Geofencing and safe-distance enforcement in busy anchorages",
      img: `${CDN}/images/ugytCgj6gvyzEwP92w3SJKcMYuc.jpeg?scale-down-to=1024&width=1800&height=2400`,
    },
    {
      category: "Operations",
      date: "Aug 8, 2026",
      title: "From anchorage to berth: optimizing the full vessel journey",
      img: `${CDN}/images/gEUUTpbdoYlnFmF72D8qaN4JZQ8.jpg?scale-down-to=1024&width=1800&height=2400`,
    },
    {
      category: "Integration",
      date: "Aug 2, 2026",
      title: "Connecting AMS with PRISM, VTMIS and VTS Norcontrol",
      img: `${CDN}/images/8cUgs5U8JERfBz2wyLRNN4fmHw.jpg?width=770&height=950`,
    },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "From data feed to live control tower in four steps",
  subtitle:
    "AMS is a productized platform with no long build cycle. Connect your existing maritime feeds and go live.",
  steps: [
    {
      title: "Connect your feeds",
      body: "Plug in AIS, VTMIS and VTS Norcontrol via secure APIs. AMS ingests live vessel data from day one, with no rip-and-replace.",
    },
    {
      title: "Configure your port",
      body: "Map your anchorage zones, berths, safety margins and workflows through the admin console. Rules, roles and geofences set up in hours, not months.",
    },
    {
      title: "Go live in the control tower",
      body: "Operators get a single live picture with AI-predicted occupancy and intelligent assignment. Manual override stays in your hands at all times.",
    },
    {
      title: "Optimize continuously",
      body: "Dashboards, heat maps and exports reveal dwell time and utilization trends so you keep improving every berth and anchorage.",
    },
  ],
};

export const security = {
  eyebrow: "Security & compliance",
  title: "Enterprise-grade security your port authority can trust",
  subtitle:
    "AMS is built for critical maritime infrastructure, with the deployment control, encryption and access governance enterprise operations demand.",
  items: [
    {
      title: "AES-256 encryption",
      body: "All data encrypted in transit and at rest, protecting sensitive vessel and operational information end to end.",
    },
    {
      title: "Role-based access control",
      body: "Granular RBAC and audit logging ensure every operator, planner and admin sees only what their role permits.",
    },
    {
      title: "On-prem or private cloud",
      body: "Deploy inside your own perimeter or a dedicated private cloud, so your data never leaves infrastructure you control.",
    },
    {
      title: "Data residency & sovereignty",
      body: "Keep all data within your jurisdiction to meet national maritime and port-authority compliance requirements.",
    },
    {
      title: "High availability",
      body: "Redundant architecture with 99% uptime and live data sync keeps the control tower running around the clock.",
    },
    {
      title: "Secure integrations",
      body: "Hardened API connections to PRISM, VTMIS and VTS Norcontrol with authenticated, monitored data exchange.",
    },
  ],
};

// NOTE: pricing figures below are placeholders — replace with your real commercial tiers.
export const pricing = {
  eyebrow: "Pricing",
  title: "Plans that scale with your port",
  subtitle:
    "Transparent, subscription-based pricing. Start with a single anchorage and grow to full port-authority coverage.",
  plans: [
    {
      name: "Starter",
      price: "$1,500",
      period: "/month",
      tagline: "For single-anchorage operations getting started.",
      cta: "Request a demo",
      featured: false,
      features: [
        "Up to 100 vessels tracked live",
        "Real-time monitoring dashboard",
        "AIS data integration",
        "Standard reporting & exports",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$3,900",
      period: "/month",
      tagline: "For busy multi-berth ports that need prediction.",
      cta: "Request a demo",
      featured: true,
      features: [
        "Up to 500 vessels tracked live",
        "AI-predicted occupancy & ETAs",
        "Intelligent anchorage & berth assignment",
        "AIS, VTMIS & VTS integration",
        "Heat maps & advanced analytics",
        "Priority support & onboarding",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      tagline: "For port authorities with full-scale operations.",
      cta: "Talk to sales",
      featured: false,
      features: [
        "Unlimited vessels & multi-port",
        "On-prem or private-cloud deployment",
        "Custom integrations & workflows",
        "Dedicated success manager & SLA",
        "Single sign-on & advanced RBAC",
        "24/7 support",
      ],
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Frequently asked questions",
  subtitle: "Everything port and control-tower teams ask before adopting AMS.",
  items: [
    {
      q: "How long does it take to go live?",
      a: "Because AMS is a productized platform rather than a custom build, most ports connect their AIS/VTMIS/VTS feeds and go live in weeks, not months. Configuration of zones, berths and rules is done through the admin console.",
    },
    {
      q: "Which systems does AMS integrate with?",
      a: "AMS connects to AIS, VTMIS and VTS Norcontrol out of the box, along with PRISM and common enterprise systems like SAP and Oracle. Custom integrations are available on the Enterprise plan.",
    },
    {
      q: "Where is our data stored?",
      a: "You choose. AMS can be deployed on-premises inside your own perimeter or in a dedicated private cloud, with full data residency so information stays within your jurisdiction.",
    },
    {
      q: "Does automation replace our operators?",
      a: "No. AI predicts occupancy and suggests assignments, but every recommendation supports full manual override. Operators stay in control of the control tower at all times.",
    },
    {
      q: "How is AMS priced?",
      a: "AMS is a subscription. Starter and Professional plans are billed monthly based on vessel volume and capabilities; Enterprise is tailored to port-authority scale and deployment needs.",
    },
    {
      q: "What support do we get?",
      a: "All plans include support, with priority onboarding on Professional and a dedicated success manager plus 24/7 support and an SLA on Enterprise.",
    },
  ],
};

export const footer = {
  cta: "We believe safer, smarter ports start with better anchorage intelligence.",
  ctaAccent: ["safer", "smarter"],
  subtitle: "Get AMS updates and maritime insights.",
  emailPlaceholder: "Type your email",
  credit: "AMS by SDLC Corp, Your Technology Partner",
  // Each item is a route (`to`), an in-page anchor on the home page (`hash`),
  // or has no destination yet (rendered as plain text).
  pages: [
    { label: "Home", to: "/" },
    { label: "Solution", hash: "solution" },
    { label: "Features", hash: "product-tour" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "Insights", to: "/insights" },
    { label: "Contact", hash: "contact" },
    { label: "Security", hash: "security" },
    { label: "Privacy policy" },
    { label: "Changelog" },
  ] as { label: string; to?: string; hash?: string }[],
  address: [
    "SDLC Corp, Dubai, United Arab Emirates",
    "Port of Fujairah, Fujairah, United Arab Emirates",
  ],
  email: "hello@sdlccorp.com",
  phone: "+971 4 000 0000",
};
