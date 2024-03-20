import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === `/en${href}` || href === '/';
  const isDisable = !href;
  return (
    <Link
      href={href}
      aria-disabled={isDisable}
      className={`${isDisable ? '' : 'hover:text-lin'} inline-block font-medium tracking-[0.2px]  sm:text-base/[30px] ${isDisable ? 'text-white/[0.38]' : isActive ? 'text-lin' : 'text-white/[0.75]'} relative px-6 py-3 `}
    >
      {title}
      {isDisable && (
        <span className="absolute right-0 top-0 text-xs font-normal uppercase tracking-[1px] text-white/[0.38]">
          Soon
        </span>
      )}
    </Link>
  );
};

export default NavLink;
