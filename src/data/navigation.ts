export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Manufacturing Clusters", href: "/manufacturing-clusters" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ctaNavItems: NavItem[] = [
  { label: "Get a Quote", href: "/quote" },
];
