 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  Gift,
  Wallet,
  Users,
  UserRound,
  Search,
  Bell,
  Menu,
  X,
  Wallet2Icon,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Explore",
    href: "/explore",
    icon: Compass,
  },
  {
    label: "Rewards",
    href: "/rewards",
    icon: Gift,
  },
  {
    label: "wallet",
    href: "/wallet",
    icon: Wallet2Icon,
  },
  {
    label: "Referrals",
    href: "/referrals",
    icon: Users,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserRound,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <header className="desktop-navbar">
        <div className="navbar-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">M</span>
            <span className="brand-name">MOVIE</span>
          </Link>

          <nav className="desktop-nav">
            {navigation.slice(0, 6).map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active ? "active" : ""}`}
                >
                  <Icon size={17} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="navbar-actions">
            <button
              className="icon-button"
              aria-label="Search"
              type="button"
            >
              <Search size={19} />
            </button>

             <Link
  href="/notifications"
  className="icon-button"
  aria-label="Notifications"
>
  <Bell size={19} />
</Link>

            <Link href="/profile" className="profile-button">
              <UserRound size={17} />
              <span>Account</span>
            </Link>
          </div>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="mobile-menu">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`mobile-menu-link ${
                    active ? "active" : ""
                  }`}
                >
                  <Icon size={19} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`bottom-nav-item ${
                active ? "active" : ""
              }`}
            >
              <Icon
                size={21}
                strokeWidth={active ? 2.2 : 1.7}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}