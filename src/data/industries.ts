import {
  HeartPulse,
  ShoppingBag,
  Landmark,
  Home,
  Truck,
  GraduationCap,
} from "lucide-react";
import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "HIPAA-conscious call handling for appointment lines, patient support, and on-call escalation.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "Handle order support and returns at peak volume without losing response time or customer sentiment.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description:
      "Secure, recorded, and auditable calls for institutions operating under strict regulatory requirements.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Route buyer and tenant calls to the right agent instantly, even across multiple offices and listings.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Keep dispatch and delivery support connected with real-time queue visibility across every shift.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Support students, parents, and staff with dedicated lines that route to the right department every time.",
  },
];
