import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  title: string;
  hot?: boolean;
};

const NavLink = ({ href, title, hot }: NavLinkProps) => {
  const pathname = usePathname();
  console.log({ pathname });
  const isActive =
    (pathname === `/en${href}` && pathname !== '/en') ||
    (pathname === `/en` && href === '/');
  const isDisable = !href;
  return (
    <Link
      href={href}
      aria-disabled={isDisable}
      className={`${isDisable ? '' : 'hover:text-lin'} inline-block text-base/[30px] font-medium  tracking-[0.2px] max-xl:text-sm/[16px] ${isDisable ? 'text-white/[0.38]' : isActive ? 'text-lin' : 'text-white/[0.75]'} relative px-6 py-3 `}
    >
      {title}
      {isDisable && !hot && (
        <span className="absolute right-0 top-0 text-xs font-normal uppercase tracking-[1px] text-white/[0.38]">
          Soon
        </span>
      )}
      {hot && (
        <span className="bg-lin absolute right-0 top-0 rounded px-1 py-[2px] text-xs font-normal uppercase tracking-[1px] !text-white">
          Hot
        </span>
      )}
    </Link>
  );
};

export default NavLink;
