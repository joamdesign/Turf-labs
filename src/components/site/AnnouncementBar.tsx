import { Fragment } from 'react';
import { announcement } from '../../content/homepage';
import './AnnouncementBar.css';

/**
 * Announcement bar. The message repeats across a track that scrolls continuously, separated
 * by the same green dot the hero label uses.
 *
 * Two identical runs sit side by side and the track translates exactly one run width, so the
 * seam never shows. A run has to be at least as wide as the viewport or a gap opens at the
 * wrap: each copy measures ~285px, so 10 covers ~2850px — every desktop width short of
 * ultrawide. Raising this means raising --marquee-duration too, or the bar scrolls faster.
 *
 * The visible track is aria-hidden because the message appears many times in it; screen
 * readers get the single copy above instead.
 */
const REPEATS = 10;

export function AnnouncementBar() {
  const run = (
    <div className="announcement__run">
      {Array.from({ length: REPEATS }, (_, i) => (
        <Fragment key={i}>
          <span className="announcement__text">{announcement.text}</span>
          <span className="announcement__dot" />
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="announcement" role="region" aria-label="Announcement">
      <p className="visually-hidden">{announcement.text}</p>
      <div className="announcement__track" aria-hidden="true">
        {run}
        {run}
      </div>
    </div>
  );
}
