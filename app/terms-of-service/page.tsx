import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertTriangle, CreditCard, Ban, RefreshCw, Gavel, Mail } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      icon: <FileText className="w-5 h-5 text-[#007FCD]" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing our website, booking an appointment, or receiving any treatment at Dermatologist Aura, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please refrain from using our services. We reserve the right to update or modify these terms at any time without prior notice. Continued use of our services after any changes constitutes your acceptance of the revised terms.",
        "These terms apply to all patients, visitors, and users of the Dermatologist Aura website and clinic facilities located at 23, Street Number 1, Bagh Umrao Dulha, Bhopal, Madhya Pradesh 462010, India.",
      ],
    },
    {
      icon: <Scale className="w-5 h-5 text-[#007FCD]" />,
      title: "Medical Services & Consultations",
      content: [
        "All medical consultations, diagnoses, and treatments provided by Dermatologist Aura are performed by qualified and licensed medical professionals. However, please note the following:",
        "• **Individual Results May Vary**: Outcomes of dermatological and cosmetic treatments depend on individual skin type, medical history, adherence to post-treatment care, and other biological factors. We do not guarantee specific results.",
        "• **Medical Advice**: Information provided on our website is for educational purposes only and should not be considered a substitute for professional medical advice. Always consult with our doctors for personalized treatment plans.",
        "• **Patient Responsibility**: You are responsible for providing accurate and complete medical history, including current medications, allergies, and pre-existing conditions. Failure to disclose relevant information may affect treatment outcomes.",
        "• **Consent**: Before any procedure, you will be asked to sign an informed consent form that outlines the nature of the treatment, potential risks, expected outcomes, and post-care instructions.",
      ],
    },
    {
      icon: <CreditCard className="w-5 h-5 text-[#007FCD]" />,
      title: "Appointments & Payments",
      content: [
        "To ensure a smooth experience for all our patients, we have established the following appointment and payment policies:",
        "• **Booking**: Appointments can be booked through our website, WhatsApp, or by calling our clinic directly. A confirmation will be sent via SMS or email.",
        "• **Cancellation Policy**: We request at least 24 hours' notice for cancellations or rescheduling. Repeated no-shows may result in a cancellation fee or restrictions on future bookings.",
        "• **Payment Methods**: We accept cash, credit/debit cards, UPI, and net banking. Payment is due at the time of service unless a prior arrangement has been made.",
        "• **Pricing**: All treatment prices are subject to change. The final cost will be communicated during your consultation based on your personalized treatment plan.",
        "• **Insurance**: We currently do not process insurance claims directly. However, we can provide detailed invoices and treatment documentation for you to submit to your insurance provider.",
      ],
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#007FCD]" />,
      title: "Refund & Cancellation Policy",
      content: [
        "We strive for complete patient satisfaction with every treatment. Our refund policy is as follows:",
        "• **Pre-Treatment Cancellations**: If you cancel a prepaid treatment package before the first session, a full refund will be issued minus any administrative fees.",
        "• **Mid-Treatment Cancellations**: If you wish to discontinue a treatment package midway, refunds will be calculated on a pro-rata basis for the remaining unused sessions.",
        "• **Post-Treatment**: Refunds are generally not available after a treatment has been administered, as results depend on individual factors and post-care adherence.",
        "• **Product Purchases**: Skincare products and prescribed medications purchased from our clinic are non-refundable once opened, unless defective.",
        "• **Processing Time**: Approved refunds will be processed within 7–14 business days to the original payment method.",
      ],
    },
    {
      icon: <Ban className="w-5 h-5 text-[#007FCD]" />,
      title: "Prohibited Conduct",
      content: [
        "When using our website or visiting our clinic, you agree not to engage in the following:",
        "• Providing false or misleading personal or medical information during registration or consultation.",
        "• Using our website content, images, treatment descriptions, or branding materials without written permission from Dermatologist Aura.",
        "• Engaging in any behavior that is disruptive, abusive, or threatening towards our staff, doctors, or other patients.",
        "• Attempting to gain unauthorized access to our systems, patient records, or any restricted areas of our website or clinic.",
        "• Posting defamatory, false, or misleading reviews about our services on any platform.",
      ],
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-[#007FCD]" />,
      title: "Limitation of Liability",
      content: [
        "While Dermatologist Aura is committed to delivering the highest standard of care, please be aware of the following limitations:",
        "• **No Guarantee of Results**: Dermatological and cosmetic treatments involve inherent risks. We provide professional guidance and use advanced techniques, but we cannot guarantee specific outcomes.",
        "• **Website Content**: We make every effort to keep our website information accurate and up-to-date. However, we are not liable for any errors, omissions, or outdated content.",
        "• **Third-Party Links**: Our website may contain links to external websites. We are not responsible for the content, privacy practices, or services offered by third-party sites.",
        "• **Force Majeure**: We shall not be liable for any delay or failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, pandemics, government orders, or technical failures.",
      ],
    },
    {
      icon: <Gavel className="w-5 h-5 text-[#007FCD]" />,
      title: "Governing Law & Dispute Resolution",
      content: [
        "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from or related to these terms shall be subject to the following:",
        "• **Jurisdiction**: The courts of Bhopal, Madhya Pradesh, India shall have exclusive jurisdiction over any disputes.",
        "• **Mediation First**: Before initiating legal proceedings, both parties agree to attempt resolution through good-faith mediation.",
        "• **Severability**: If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
        "• **Entire Agreement**: These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Dermatologist Aura regarding the use of our services.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gradient-to-b from-[#EBF5FA] via-[#F4FAFD] to-[#EBF5FA] overflow-hidden">

        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007FCD]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#B3D6E7]/40 rounded-full px-5 py-2 mb-6 shadow-sm">
                <Gavel className="w-5 h-5 text-[#007FCD]" />
                <span className="text-[#007FCD] font-semibold tracking-wider uppercase text-xs">
                  Legal Agreement
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-[#0F1E36] mb-8 leading-tight">
                Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007FCD] to-[#0066A3]">Service</span>
              </h1>

              <p className="text-[#506075] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Please review our terms carefully. By using the services of Dermatologist Aura, you agree to abide by the following conditions.
              </p>

              <p className="text-[#506075]/60 text-sm mt-6">
                Effective Date: May 25, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

            {/* Numbered Section Cards */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className="bg-white border border-[#B3D6E7]/30 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    {/* Section Number Badge */}
                    <div className="w-8 h-8 rounded-lg bg-[#007FCD] text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#007FCD]/10 flex items-center justify-center border border-[#007FCD]/20 shrink-0">
                      {section.icon}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0F1E36]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-3 text-[#506075] text-sm sm:text-base leading-relaxed pl-0 sm:pl-[84px]">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        dangerouslySetInnerHTML={{
                          __html: paragraph
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0F1E36] font-semibold">$1</strong>')
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact / Questions Card */}
            <div className="mt-12 bg-gradient-to-br from-[#0F1E36] to-[#1a2d4d] rounded-3xl p-8 sm:p-10 text-center border border-[#B3D6E7]/20 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-[#007FCD]/20 flex items-center justify-center mx-auto mb-5 border border-[#007FCD]/30">
                <Mail className="w-7 h-7 text-[#007FCD]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                Have Questions About Our Terms?
              </h3>
              <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
                We believe in transparency. If anything in these terms is unclear or if you need further clarification, our team is happy to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@dermatologist-aura.com"
                  className="inline-flex items-center gap-2 bg-[#007FCD] hover:bg-[#0066A3] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,127,205,0.3)]"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
                <a
                  href="/contactUs"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 border border-white/20"
                >
                  Contact Page
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
