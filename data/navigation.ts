export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Reinigungstechnik", href: "/leistungen/reinigungstechnik" },
      { label: "Strahltechnik", href: "/leistungen/strahltechnik" },
      { label: "Baumaschinen", href: "/leistungen/baumaschinen" },
    ],
  },
  { label: "Mietpark", href: "/mietpark" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export const legalNavigationItems: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export function isNavigationItemActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
