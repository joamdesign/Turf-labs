import { navigation } from '../../content/homepage';
import { useScrolled } from '../../hooks/useScrolled';
import { CartIcon } from '../../icons';
import './SiteHeader.css';

/**
 * Sticky site header. At the top of the page it is a transparent full-width bar: logo at the
 * far left, links right after it, cart at the far right. Once the page scrolls it splits into
 * two floating frosted-glass islands — logo and links in a capsule on the left, the cart on
 * its own at the right. The cluster wrapper exists to carry that capsule background.
 */
export function SiteHeader() {
  const scrolled = useScrolled(24);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__bar">
        <div className="site-header__cluster">
          <a className="site-logo" href="/" aria-label="Turf Labs Co. home">
            <img src="/brand/turf-labs-logo.svg" alt="" width={132} height={48} />
          </a>

          <nav className="site-nav" aria-label="Primary">
            <ul className="site-nav__list">
              {navigation.links.map((link) => (
                <li key={link.label}>
                  <a className="site-nav__link" href={link.href} aria-current={link.current ? 'page' : undefined}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-header__actions">
          <button type="button" className="cart-button" aria-label="Open cart">
            <CartIcon size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
