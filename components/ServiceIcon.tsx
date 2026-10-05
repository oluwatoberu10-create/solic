import {
  Building2,
  ClipboardCheck,
  FilePen,
  Globe2,
  BriefcaseBusiness,
  Handshake,
  HeartPulse,
  Home,
  Landmark,
  ScrollText,
  ShieldAlert,
  Users,
} from "lucide-react";
import type { ServiceIcon as IconName } from "@/lib/services";

const icons = {
  corporate: Building2,
  contracts: FilePen,
  disputes: Handshake,
  property: Home,
  wills: ScrollText,
  criminal: ShieldAlert,
  employment: BriefcaseBusiness,
  family: Users,
  immigration: Globe2,
  public: Landmark,
  injury: HeartPulse,
  regulatory: ClipboardCheck,
} satisfies Record<IconName, unknown>;

export function ServiceIcon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden strokeWidth={1.6} />;
}
