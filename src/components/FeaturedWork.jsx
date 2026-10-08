import { useState, useCallback } from 'react';
import CaseStudy from './CaseStudy';
import Lightbox from './Lightbox';

/* ── All gallery images across the 3 case studies ── */
// Index used for lightbox navigation (global flat array)
const ALL_GALLERY_IMAGES = [
  // GFF (0-9) — all 10 event photos
  { src: 'assets/images/gff-01.jpg', alt: 'Global Fintech Fest 2025 — photo 1', caption: 'GFF 2025' },
  { src: 'assets/images/gff-02.jpg', alt: 'Global Fintech Fest 2025 — photo 2', caption: 'GFF 2025' },
  { src: 'assets/images/gff-03.jpg', alt: 'Global Fintech Fest 2025 — photo 3', caption: 'GFF 2025' },
  { src: 'assets/images/gff-04.jpg', alt: 'Global Fintech Fest 2025 — photo 4', caption: 'GFF 2025' },
  { src: 'assets/images/gff-05.jpg', alt: 'Global Fintech Fest 2025 — photo 5', caption: 'GFF 2025' },
  { src: 'assets/images/gff-06.jpg', alt: 'Global Fintech Fest 2025 — photo 6', caption: 'GFF 2025' },
  { src: 'assets/images/gff-07.jpg', alt: 'Global Fintech Fest 2025 — photo 7', caption: 'GFF 2025' },
  { src: 'assets/images/gff-08.jpg', alt: 'Global Fintech Fest 2025 — photo 8', caption: 'GFF 2025' },
  { src: 'assets/images/gff-09.jpg', alt: 'Global Fintech Fest 2025 — photo 9', caption: 'GFF 2025' },
  { src: 'assets/images/gff-10.jpg', alt: 'Global Fintech Fest 2025 — photo 10', caption: 'GFF 2025' },
];

const CASE_STUDIES = [
  {
    caseNo: 'Case Study 01',
    title: 'Global Fintech Fest 2025',
    kicker: "One of India's largest fintech conferences · Event & Brand Marketing",
    banner: {
      src: 'assets/images/gff-banner.jpg',
      alt: 'M2P Fintech exhibitor presence at Global Fintech Fest 2025',
    },
    challenge: [
      'Global Fintech Fest brings together banks, fintech companies, investors, regulators and technology leaders. M2P participated as an exhibitor to showcase its products, strengthen industry relationships and reinforce its brand presence.',
      'Large-scale events involve multiple stakeholders, tight timelines and countless moving pieces. From media coordination and vendor management to logistics and marketing collateral, everything had to come together to deliver a consistent brand experience across three days.',
    ],
    responsibilities: [
      { n: '01', text: 'Marketing Operations' },
      { n: '02', text: 'Media Coordination' },
      { n: '03', text: 'Vendor Management' },
      { n: '04', text: 'Marketing Collateral' },
      { n: '05', text: 'Stakeholder Communication' },
      { n: '06', text: 'Client Byte Coordination' },
      { n: '07', text: 'Pass Management' },
      { n: '08', text: 'Hospitality Coordination' },
      { n: '09', text: 'Event Execution' },
    ],
    gallery: ALL_GALLERY_IMAGES.slice(0, 10).map((img, i) => ({
      ...img,
      ariaLabel: `View: GFF 2025 photo ${i + 1}`,
    })),
    results: [
      { stat: '3 days', label: 'Of exhibitor presence executed end to end' },
      { stat: '4 teams', label: 'Brand Marketing, Business Development,Product Marketing and External Vendors' },
      { stat: '8 areas', label: 'Of marketing operations owned on site' },
    ],
    chips: ['Brand Marketing', 'Event Marketing', 'Marketing Operations', 'Corporate Events', 'Stakeholder Management', 'Vendor Management', 'Project Coordination', 'Marketing Communications'],
    reflection: 'GFF taught me how successful event marketing depends on preparation, collaboration and attention to detail. Working across multiple stakeholders strengthened my ability to deliver consistent brand experiences under tight timelines.',
    galleryOffset: 0,
  },
  {
    caseNo: 'Case Study 02',
    title: 'ONE11',
    kicker: 'Internal Anniversary Campaign· M2P Fintech',
    banner: {
      src: 'assets/images/one11-banner.jpg',
      alt: "ONE11 employee branding campaign merchandise for M2P's eleventh anniversary",
    },
    challenge: [
      "M2P's 11th anniversary was an opportunity to celebrate the company's journey while reinforcing its <strong>One M2P </strong> culture through a company-wide internal engagement campaign",
      'I conceptualised the campaign name <strong>ONE11</strong>, combining <strong>ONE</strong> for the One M2P culture with <strong>11</strong> for the anniversary. The objective was a campaign identity that felt simple, memorable and connected to the company\'s culture.',
    ],
    responsibilities: [
      { n: '01', text: 'Campaign Naming' },
      { n: '02', text: 'Campaign Planning' },
      { n: '03', text: 'Vendor Coordination' },
      { n: '04', text: 'Cost Negotiation' },
      { n: '05', text: 'Print Validation' },
      { n: '06', text: 'Personalised Merchandise Production' },
      { n: '07', text: 'Campaign Communication' },
      { n: '08', text: 'Darwinbox Engagement' },
    ],
    gallery: [
      { src: 'assets/images/one11-01.jpg', alt: 'ONE11 Campaign Photo 1', caption: 'Merchandise & Branding' },
      { src: 'assets/images/one11-02.jpg', alt: 'ONE11 Campaign Photo 2', caption: 'Anniversary Goodies' },
      { src: 'assets/images/one11-03.jpg', alt: 'ONE11 Campaign Photo 3', caption: 'Employee Engagement' },
      { src: 'assets/video/one11-video.mp4', alt: 'ONE11 Campaign Video', caption: 'Campaign Reel', isVideo: true },
    ],
    results: [
      { stat: '111', label: 'Employees rewarded with exclusive surprise goodies for participating first' },
      { stat: '3 gifts', label: 'Personalised luggage tag, ONE11 bookmark and a donut for every employee' },
      { stat: '1 platform', label: 'Darwinbox used to collect employee photos and responses' },
    ],
    chips: ['Employee Branding', 'Campaign Naming', 'Campaign Planning', 'Vendor Management', 'Cost Negotiation', 'Print Production', 'Internal Communication', 'Employee Engagement'],
    reflection: 'Seeing an idea evolve from a campaign name into a company-wide experience taught me how internal branding can strengthen culture through thoughtful engagement and meaningful participation.',
    galleryOffset: 10,
  },
  {
    caseNo: 'Case Study 03',
    title: 'Madrasters',
    kicker: 'Community Marketing · Volunteer to Wing Captain',
    banner: {
      src: 'assets/images/madrasters-banner.jpg',
      alt: 'Madrasters creative community meetup in Chennai',
    },
    challenge: [
      "Madrasters is one of Chennai's largest creative communities, bringing together designers, photographers, artists and storytellers through events, workshops and collaborative experiences.",
      'Growing a volunteer-run community means every initiative competes for attention without a marketing budget behind it. Over four years I moved from volunteer to Wing Captain, taking on branding, marketing communication, speaker coordination and volunteer leadership.',
    ],
    responsibilities: [
      { n: '01', text: 'Community Branding' },
      { n: '02', text: 'Marketing Communication' },
      { n: '03', text: 'Speaker Coordination' },
      { n: '04', text: 'Volunteer Leadership' },
      { n: '05', text: "Women's Day Meetup Host" },
      { n: '06', text: 'MadShots' },
      { n: '07', text: 'MAD Design' },
      { n: '08', text: 'MADX' },
      { n: '09', text: 'Community Building' },
      { n: '10', text: 'Chennai Meetups' }
    ],
    gallery: [
      { src: 'assets/images/mad-01.jpg', alt: 'Madrasters Community Event Photo 1', caption: 'Community Meetup' },
      { src: 'assets/images/mad-02.jpg', alt: 'Madrasters Community Event Photo 2', caption: 'MadShots Photowalk' },
      { src: 'assets/images/mad-03.jpg', alt: 'Madrasters Community Event Photo 3', caption: 'MAD Design Challenge' },
      { src: 'assets/images/mad-04.jpg', alt: 'Madrasters Community Event Photo 4', caption: 'Community Gathering' },
    ],
    results: [
      { stat: '4 years', label: 'From volunteer to Wing Captain' },
      { stat: '1 host', label: "Hosted the Women's Day Meetup live for the first time" },
      { stat: '4 formats', label: 'Chennai Meetups, MAD Design, MADX and MadShots led across the year' },
    ],
    chips: ['Community Marketing', 'Brand Marketing', 'Marketing Communications', 'Event Marketing', 'Volunteer Leadership', 'Speaker Coordination', 'Creative Direction', 'Community Engagement'],
    reflection: 'Madrasters transformed the way I think about marketing. It taught me that successful brands are built through people, experiences and consistent communication — and that communities grow when every interaction feels meaningful.',
    galleryOffset: 10,
  },
];

export default function FeaturedWork() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((idx) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + ALL_GALLERY_IMAGES.length) % ALL_GALLERY_IMAGES.length), []);
  const goNext = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % ALL_GALLERY_IMAGES.length), []);

  return (
    <section id="work" aria-labelledby="work-h" className="py-[clamp(88px,12vw,168px)]">
      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)]">
        {/* Section header */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-[clamp(20px,4vw,60px)] items-start mb-[clamp(40px,6vw,74px)]">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-text-secondary pt-3 border-t border-text-primary max-sm:border-0 max-sm:pt-0">
            03 / Featured Work
          </p>
          <div>
            <h2 id="work-h" className="max-w-[20ch]">FEATURED WORK</h2>
          </div>
        </div>

        {/*
          Bug fix: Use space-y-* on the wrapper instead of stacking
          section padding + individual article margin-top.
          This replaces the double-spacing issue.
        */}
        <div className="space-y-[clamp(60px,8vw,110px)]">
          {CASE_STUDIES.map((study) => (
            <CaseStudy
              key={study.caseNo}
              study={study}
              onOpenLightbox={openLightbox}
              galleryOffset={study.galleryOffset}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={ALL_GALLERY_IMAGES}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          onSetIndex={setLightboxIndex}
        />
      )}
    </section>
  );
}
