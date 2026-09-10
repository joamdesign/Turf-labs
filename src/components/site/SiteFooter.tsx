import { footer } from '../../content/homepage';
import { FacebookIcon, InstagramIcon, TikTokIcon } from '../../icons';
import './SiteFooter.css';

const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
};

/**
 * Section 08 — Footer.
 * Hairline on top, then: logo lockup (carries the tagline) in cols 1–4, nav links in cols 5–6,
 * legal links in cols 7–8, contact block in cols 10–12. Copyright left and the origin line
 * right on the bottom row. Copy from the wireframe; type and colour from design-system.md.
 */
export function SiteFooter() {
  return (
    <footer className="footer" data-section="08" data-screenshot="08-footer">
      <div className="container">
        <div className="grid footer__top">
          <a className="footer__brand" href="/" aria-label="Turf Labs Co. home">
            <img src="/brand/turf-labs-logo.svg" alt="" width={206} height={75} />
            <span className="visually-hidden">{footer.tagline}</span>
          </a>

          <nav className="footer__nav" aria-label="Footer">
            <ul className="footer__links">
              {footer.nav.map((link) => (
                <li key={link.label}>
                  <a className="footer__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__legal" aria-label="Legal">
            <ul className="footer__links">
              {footer.legal.map((link) => (
                <li key={link.label}>
                  <a className="footer__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact" id="contact">
            <h2 className="visually-hidden">{footer.contact.heading}</h2>
            <address className="footer__address">{footer.contact.address}</address>
            <a className="footer__link footer__domain" href={`https://${footer.contact.domain}`}>
              {footer.contact.domain}
            </a>
            <ul className="footer__social" aria-label="Social media">
              {footer.social.map((item) => {
                const Icon = SOCIAL_ICONS[item.icon];
                return (
                  <li key={item.label}>
                    <a className="footer__social-link" href={item.href} aria-label={item.label}>
                      <Icon size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{footer.copyright}</p>
          <p className="footer__origin">{footer.origin}</p>
        </div>
      </div>
    </footer>
  );
}
