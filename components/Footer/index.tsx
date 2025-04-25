import { Home, Server, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const tabs = [
    { name: "Главная", href: "/", icon: Home },
    { name: "Сервера", href: "/servers", icon: Server },
    { name: "Настройки", href: "/settings", icon: Settings },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1e1e1e] border-t border-[#2d2d2d] flex justify-around items-center h-[70px] sm:hidden">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        const Icon = tab.icon;
        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`flex flex-col items-center gap-y-1 text-sm ${
              isActive ? "text-white" : "text-[#999]"
            }`}
          >
            <Icon
              className={`w-6 h-6 ${
                isActive ? "stroke-white" : "stroke-[#999]"
              }`}
            />
            <span className="text-xs">{tab.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
