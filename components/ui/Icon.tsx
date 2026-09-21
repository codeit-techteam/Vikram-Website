import {
  Activity,
  Bell,
  Boxes,
  CreditCard,
  FileText,
  Gift,
  HardHat,
  LayoutGrid,
  Layers,
  MapPin,
  Package,
  Receipt,
  Route,
  Search,
  ShoppingCart,
  Smartphone,
  Tag,
  Truck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/** Names used by the content layer so copy stays free of component imports. */
export const iconMap = {
  activity: Activity,
  bell: Bell,
  boxes: Boxes,
  card: CreditCard,
  cart: ShoppingCart,
  file: FileText,
  gift: Gift,
  grid: LayoutGrid,
  hardhat: HardHat,
  layers: Layers,
  package: Package,
  pin: MapPin,
  receipt: Receipt,
  route: Route,
  search: Search,
  smartphone: Smartphone,
  tag: Tag,
  truck: Truck,
  wallet: Wallet,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const Component = iconMap[name];
  return <Component aria-hidden="true" className={className} strokeWidth={1.75} />;
}
