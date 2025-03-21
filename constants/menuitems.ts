import {
  LogoutIcon,
  NeoBanking,
  PlugInServicesIcon,
  RiskControlIcon,
  SettingsIcon,
  TransactionIcon,
  UsersIcon,
  VasServiceIcon,
  VirtualCard,
  WalletIcon,
} from "@/icon/icon";

export const MENU_ITEMS = [
  { id: "wallet", label: "Wallet", icon: WalletIcon, path: "/wallet" },
  {
    id: "transactions",
    label: "Transactions",
    icon: TransactionIcon,
    path: "/transactions",
  },
  {
    id: "vas-services",
    label: "VAS Services",
    icon: VasServiceIcon,
    path: "/vas-services",
  },
  {
    id: "virtual-cards",
    label: "Virtual Cards",
    icon: VirtualCard,
    path: "/virtual-cards",
  },
  {
    id: "neo-banking",
    label: "Neo-Banking",
    icon: NeoBanking,
    path: "neo-banking",
    subItems: [
      { id: "neo-wallet", label: "Wallet", path: "/neo-banking/wallet" },
      { id: "pricing", label: "Pricing", path: "/neo-banking/pricing" },
      {
        id: "custom-domain",
        label: "Custom Domain",
        path: "/neo-banking/custom-domain",
      },
      {
        id: "app-branding",
        label: "App branding",
        path: "/neo-banking/app-branding",
      },
    ],
  },
  {
    id: "plugin-service",
    label: "Plugin Service",
    icon: PlugInServicesIcon,
    path: "/plugin-service",
    subItems: [
      { id: "service", label: "Service", path: "/pluging-service/service" },
      { id: "branding", label: "Branding", path: "/pluging-service/branding" },
    ],
  },
  { id: "users", label: "Users", icon: UsersIcon, path: "/users" },
  {
    id: "risk-control",
    label: "Risk Control",
    icon: RiskControlIcon,
    path: "/risk-control",
  },
  { id: "settings", label: "Settings", icon: SettingsIcon, path: "/settings" },
];
