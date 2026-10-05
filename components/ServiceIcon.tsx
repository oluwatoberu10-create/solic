import { Users, Home, Globe2, BriefcaseBusiness, Building2, ScrollText } from "lucide-react";
import type { ServiceIcon as IconName } from "@/lib/services";

const icons = {
  family: Users,
  property: Home,
  immigration: Globe2,
  employment: BriefcaseBusiness,
  business: Building2,
  wills: ScrollText,
} satisfies Record<IconName, unknown>;

export function ServiceIcon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden strokeWidth={1.6} />;
}
