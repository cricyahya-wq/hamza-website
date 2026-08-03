import type { FaqItem } from "@/types";

export const faqs: FaqItem[] = [
  {
    question: "How quickly can we migrate from our current phone system?",
    answer:
      "Most teams go live in 2-4 weeks. Our onboarding specialists port existing numbers, rebuild your call flows, and run a parallel test period before cutting over, so there's no disruption to live calls.",
  },
  {
    question: "Does MoosePBX work with our existing CRM and helpdesk tools?",
    answer:
      "Yes. MoosePBX integrates with the major CRM and helpdesk platforms out of the box, and exposes a full API and webhook system for custom workflows.",
  },
  {
    question: "What happens if our internet connection goes down?",
    answer:
      "MoosePBX supports automatic failover to backup PSTN routes or a secondary internet connection, so inbound calls keep ringing even during an outage.",
  },
  {
    question: "Can we scale up or down as call volume changes?",
    answer:
      "Absolutely. Add or remove agent seats, numbers, and channels on demand — there's no hardware to provision and no long-term contracts required.",
  },
  {
    question: "How does the AI Voice Agent handle calls it can't resolve?",
    answer:
      "It recognizes when a request needs a human, then hands the call to the right agent with a full transcript and context summary already attached — no dead air, no repeated questions.",
  },
  {
    question: "Is call and customer data kept secure and compliant?",
    answer:
      "All calls and data are encrypted in transit and at rest, with role-based access controls, audit logs, and SOC 2-aligned infrastructure across our platform.",
  },
];

export const pricingFaqs: FaqItem[] = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can upgrade, downgrade, or add seats at any time — changes are prorated for the rest of your billing cycle.",
  },
  {
    question: "Is there a setup or onboarding fee?",
    answer:
      "No. Onboarding and number porting are included on every plan. Enterprise customers also get a dedicated onboarding specialist.",
  },
  {
    question: "What counts as an agent seat?",
    answer:
      "A seat is any user who can take or make calls through MoosePBX. Supervisors and admins with view-only access don't count toward your seat total.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes, annual billing is available on Growth and Enterprise plans at a discount. Contact sales to switch your billing cycle.",
  },
];
