import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Eye, Lock, Database, Bell, UserCheck, Globe, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Database className="w-5 h-5 text-[#007FCD]" />,
      title: "Information We Collect",
      content: [
        "When you visit our clinic or use our website, we may collect the following types of personal information:",
        "• **Personal Identification**: Full name, date of birth, gender, and contact details (phone number, email address, and mailing address).",
        "• **Medical Information**: Health history, skin and hair condition details, treatment records, photographs taken for diagnostic purposes, and prescription data.",
        "• **Financial Information**: Payment details such as credit/debit card numbers or UPI IDs processed securely through certified payment gateways.",
        "• **Technical Data**: IP address, browser type, device information, and cookies when you interact with our website.",
        "• **Communication Records**: Correspondence via email, WhatsApp, phone calls, or our appointment booking system.",
      ],
    },
    {
      icon: <Eye className="w-5 h-5 text-[#007FCD]" />,
      title: "How We Use Your Information",
      content: [
        "We use the information we collect for the following purposes:",
        "• **Treatment & Diagnosis**: To provide accurate medical consultations, create personalized treatment plans, and track your progress over time.",
        "• **Appointment Management**: To schedule, confirm, reschedule, or send reminders about your upcoming appointments.",
        "• **Communication**: To respond to your inquiries, send post-treatment care instructions, and share relevant health tips or promotional offers (with your consent).",
        "• **Quality Improvement**: To enhance our services, train our staff, and improve the overall patient experience at Dermatologist Aura.",
        "• **Legal Compliance**: To comply with applicable medical regulations, legal obligations, and professional standards.",
      ],
    },
    {
      icon: <Lock className="w-5 h-5 text-[#007FCD]" />,
      title: "Data Security & Protection",
      content: [
        "We take the security of your personal data very seriously and implement the following measures:",
        "• All sensitive data is encrypted using industry-standard SSL/TLS encryption both in transit and at rest.",
        "• Access to patient records is strictly restricted to authorized medical personnel and administrative staff on a need-to-know basis.",
        "• Our systems undergo regular security audits and vulnerability assessments to prevent unauthorized access.",
        "• Physical records are stored in secure, locked facilities with restricted access.",
        "• We maintain comprehensive backup systems to protect against data loss.",
      ],
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#007FCD]" />,
      title: "Your Rights & Choices",
      content: [
        "As a patient of Dermatologist Aura, you have the following rights regarding your personal data:",
        "• **Right to Access**: You may request a copy of the personal data we hold about you at any time.",
        "• **Right to Correction**: You can ask us to update or correct any inaccurate information in your records.",
        "• **Right to Deletion**: You may request the deletion of your personal data, subject to legal and medical record retention requirements.",
        "• **Right to Withdraw Consent**: You can withdraw your consent for marketing communications at any time by contacting us.",
        "• **Right to Data Portability**: You can request your medical records be transferred to another healthcare provider.",
      ],
    },
    {
      icon: <Globe className="w-5 h-5 text-[#007FCD]" />,
      title: "Cookies & Website Tracking",
      content: [
        "Our website uses cookies and similar tracking technologies to improve your browsing experience:",
        "• **Essential Cookies**: Required for the website to function properly, including session management and security features.",
        "• **Analytics Cookies**: Help us understand how visitors interact with our website so we can improve content and navigation.",
        "• **Marketing Cookies**: Used to deliver relevant advertisements and measure the effectiveness of our campaigns (only with your explicit consent).",
        "You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect your experience on our website.",
      ],
    },
    {
      icon: <Bell className="w-5 h-5 text-[#007FCD]" />,
      title: "Third-Party Sharing",
      content: [
        "We do not sell, rent, or trade your personal information to third parties. However, we may share data with:",
        "• **Healthcare Partners**: Laboratories, pharmacies, or specialist referrals involved in your treatment, only with your prior consent.",
        "• **Payment Processors**: Secure, PCI-DSS compliant payment gateways to process your transactions.",
        "• **Legal Authorities**: When required by law, court order, or to protect the rights and safety of our patients and staff.",
        "• **Service Providers**: Trusted technology partners who help us operate our website and manage appointments, bound by strict confidentiality agreements.",
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
                <ShieldCheck className="w-5 h-5 text-[#007FCD]" />
                <span className="text-[#007FCD] font-semibold tracking-wider uppercase text-xs">
                  Your Privacy Matters
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-[#0F1E36] mb-8 leading-tight">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007FCD] to-[#0066A3]">Policy</span>
              </h1>

              <p className="text-[#506075] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                At Dermatologist Aura, we are committed to protecting your personal information and maintaining the highest standards of data privacy and security.
              </p>

              <p className="text-[#506075]/60 text-sm mt-6">
                Last Updated: May 25, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="bg-white border border-[#B3D6E7]/30 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#007FCD]/10 flex items-center justify-center border border-[#007FCD]/20 shrink-0">
                      {section.icon}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0F1E36]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-3 text-[#506075] text-sm sm:text-base leading-relaxed pl-0 sm:pl-[52px]">
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

            {/* Contact Card */}
            <div className="mt-12 bg-gradient-to-br from-[#0F1E36] to-[#1a2d4d] rounded-3xl p-8 sm:p-10 text-center border border-[#B3D6E7]/20 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-[#007FCD]/20 flex items-center justify-center mx-auto mb-5 border border-[#007FCD]/30">
                <Mail className="w-7 h-7 text-[#007FCD]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                Questions About Your Privacy?
              </h3>
              <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please do not hesitate to contact us.
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
