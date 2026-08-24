import { m } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import type { IndustryCard } from "@/data/industries-page";
import { Button } from "@/components/ui/Button";

interface IndustryDetailPopupProps {
  industry: IndustryCard | null;
  onClose: () => void;
}

const getIndustryDetails = (title: string) => {
  const details: Record<string, { overview: string; features: string[]; impacts: string[] }> = {
    "Healthcare": {
      overview: "Secure and HIPAA-compliant communication solutions designed for hospitals, clinics, and telehealth providers to manage patient care efficiently without compromising sensitive data.",
      features: ["HIPAA-Compliant Call Recording", "Secure Patient SMS", "Automated Appointment Reminders", "Priority Emergency Routing"],
      impacts: ["Protect sensitive patient data", "Reduce missed appointments by 40%", "Streamline multi-clinic coordination"]
    },
    "Education": {
      overview: "Unified communication for schools, universities, and school districts to keep faculty, students, and parents connected seamlessly across multiple campuses.",
      features: ["Campus-Wide Intercom Integration", "Emergency Broadcast System", "Automated Absence Lines", "Virtual Class Meeting Rooms"],
      impacts: ["Improve campus safety and emergency response", "Simplify parent-teacher communication", "Reduce administrative overhead"]
    },
    "Banking & Finance": {
      overview: "Bank-grade encrypted communication platforms for financial institutions, ensuring strict regulatory compliance, auditability, and VIP client service.",
      features: ["End-to-End Encryption", "Compliant Call Archiving", "Multi-Factor Authentication", "VIP Client Queueing"],
      impacts: ["Simplify regulatory audits", "Ensure zero data breaches", "Provide white-glove client experiences"]
    },
    "Retail & E-Commerce": {
      overview: "Scalable communication tools to deliver exceptional customer support, manage multi-store operations, and handle seasonal spikes in call volumes effortlessly.",
      features: ["Multi-Store Routing", "CRM Integration", "AI Voice Assistants", "Seasonal Capacity Scaling"],
      impacts: ["Increase customer satisfaction scores", "Handle 3x call volume during peak seasons", "Unify omnichannel support"]
    },
    "Hospitality": {
      overview: "Enhance guest experiences and streamline internal operations for hotels, resorts, and restaurants with integrated property management communications.",
      features: ["PMS Integration (Opera, etc.)", "Guest Wake-Up Call Automation", "Housekeeping Dispatch", "Room Service Routing"],
      impacts: ["Elevate guest satisfaction ratings", "Accelerate service request response times", "Reduce front desk workload"]
    },
    "Real Estate": {
      overview: "Keep real estate agents connected with clients anywhere. Provide mobile-first solutions for property management and brokerages.",
      features: ["Mobile App (iOS/Android)", "Virtual Number Provisioning", "SMS Property Alerts", "Call Forwarding to Mobile"],
      impacts: ["Never miss a lead while out of office", "Separate personal and business calls", "Scale agent onboarding instantly"]
    },
    "Manufacturing": {
      overview: "Bridge the communication gap between the loud factory floor and the corporate office with ruggedized integrations and reliable paging systems.",
      features: ["Overhead Paging Integration", "Rugged SIP Device Support", "Shift-Based Call Routing", "Automated Outage Alerts"],
      impacts: ["Reduce downtime through faster coordination", "Ensure worker safety with instant paging", "Connect distributed supply chains"]
    },
    "Logistics & Transportation": {
      overview: "Real-time communication platforms to coordinate dispatchers, fleet drivers, and customers to ensure on-time deliveries and efficient route management.",
      features: ["Driver Mobile Apps", "Automated SMS Delivery Updates", "Real-Time Dispatch Dashboards", "Location-Based Routing"],
      impacts: ["Minimize missed deliveries", "Improve driver safety and connectivity", "Accelerate dispatch coordination"]
    },
    "IT & Software": {
      overview: "Enable global collaboration and technical support with developer-friendly APIs, integrations, and high-availability communication infrastructure.",
      features: ["Developer API / Webhooks", "Helpdesk Integration (Jira, Zendesk)", "Global SIP Trunking", "Advanced SLA Monitoring"],
      impacts: ["Automate incident response workflows", "Provide seamless 24/7 global support", "Integrate voice directly into internal tools"]
    },
    "Government": {
      overview: "Secure, reliable, and compliant public service communication for local, state, and federal agencies requiring maximum uptime and security.",
      features: ["FedRAMP/StateRAMP Ready Infrastructure", "Citizen 311 Call Routing", "Secure Conference Bridges", "Disaster Recovery Failover"],
      impacts: ["Ensure continuity of government services", "Modernize citizen engagement", "Protect public sector data"]
    },
    "Call Centers": {
      overview: "High-volume, advanced routing and analytics solutions to maintain strict SLAs, maximize agent productivity, and deliver superior customer service.",
      features: ["Skills-Based Routing", "Live AI Analytics & Sentiment", "Automated Callbacks", "Predictive Dialer Integrations"],
      impacts: ["Reduce Average Handle Time (AHT)", "Increase First Contact Resolution (FCR)", "Lower agent turnover rates"]
    },
    "SMBs": {
      overview: "Affordable, scalable, and easy-to-use cloud PBX designed to give small and medium-sized growing teams enterprise-level features without the enterprise price tag.",
      features: ["Plug-and-Play Setup", "Auto-Attendant / Virtual Receptionist", "Voicemail-to-Email", "Flexible Pricing Plans"],
      impacts: ["Project a professional, large-company image", "Save up to 40% on monthly phone bills", "Scale easily as the team grows"]
    }
  };

  return details[title] || {
    overview: "Explore how MoosePBX provides tailored communication solutions to address the unique challenges of your industry.",
    features: ["Industry-Specific Integrations", "Custom Workflows", "Dedicated Support", "Compliance Ready"],
    impacts: ["Improve operational efficiency", "Reduce communication costs", "Enhance customer satisfaction"]
  };
};

export function IndustryDetailPopup({ industry, onClose }: IndustryDetailPopupProps) {
  if (!industry) return null;
  const details = getIndustryDetails(industry.title);
  const Icon = industry.icon;

  return (
    <>
      <style>{`
        .industry-popup-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .industry-popup-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .industry-popup-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(150, 150, 150, 0.2);
          border-radius: 10px;
        }
        .industry-popup-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(150, 150, 150, 0.4);
        }
      `}</style>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overscroll-contain">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10"
        />
        
        <m.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-20 w-full sm:max-w-4xl lg:max-w-[800px] bg-card border border-border sm:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] lg:max-h-[85vh] overscroll-contain"
          style={{ display: 'grid', gridTemplateRows: 'auto minmax(0, 1fr) auto' }}
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-border px-6 py-5 md:px-8 md:py-6 bg-card relative">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/10 border border-accent-400/20">
                <Icon className="h-6 w-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {industry.title}
                </h3>
                <p className="text-sm text-neutral-500">Industry Solution</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-neutral-400 hover:bg-neutral-500/10 hover:text-foreground transition-colors mt-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div 
            className="overflow-y-auto overscroll-contain industry-popup-scrollbar px-6 py-8 md:px-8 space-y-10" 
            style={{ minHeight: 0 }}
          >
            {/* Overview */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.12em] text-foreground uppercase border-b border-border pb-3 mb-5">Overview</h4>
              <p className="text-neutral-500 text-[15px] leading-relaxed">
                {details.overview}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.12em] text-foreground uppercase border-b border-border pb-3 mb-5">Key Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {details.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-alt/50 border border-border">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-400" />
                    <span className="text-[13px] font-semibold text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.12em] text-foreground uppercase border-b border-border pb-3 mb-5">Business Impact</h4>
              <ul className="space-y-4">
                {details.impacts.map((impact, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#315FE8] shrink-0" />
                    <span className="text-[14px] text-neutral-500">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 border-t border-border px-6 py-4 md:px-8 bg-card">
            <Button onClick={onClose} variant="outline" className="text-sm">
              Close
            </Button>
            <Button href="/contact" variant="primary" className="text-sm">
              Talk to Sales
            </Button>
          </div>
        </m.div>
      </div>
    </>
  );
}
