import React from 'react';
import './Sitemap.scss';
import sitemap from '/img/sitemap.webp';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <div>
      <section>
        <div className='Navbar-img Sitemap-img'>
          <img src={sitemap} alt="Culinan" />
          <div className={`img-content`}>
            <h2>SITE MAP</h2>
          </div>
        </div>
      </section>
      <section>
        <div className='Sitemap-list'>
          <div className='Sitemap-list-item'>
            <h2>MODELS</h2>
            <ul>
              <li><Link to="/spectre/discover">Spectre – Discover</Link></li>
              <li><Link to="/spectre/detail">Spectre – In Detail</Link></li>
              <li><Link to="/spectre/motion">Spectre – In Motion</Link></li>
              <li><Link to="/spectre/commission">Spectre – Commission</Link></li>
              <li><Link to="/phantom/discover">Phantom – Discover</Link></li>
              <li><Link to="/phantom/detail">Phantom – In Detail</Link></li>
              <li><Link to="/phantom/commission">Phantom – Commission</Link></li>
              <li><Link to="/phantom-extended/discover">Phantom Extended – Discover</Link></li>
              <li><Link to="/phantom-extended/detail">Phantom Extended – In Detail</Link></li>
              <li><Link to="/phantom-extended/commission">Phantom Extended – Commission</Link></li>
              <li><Link to="/ghost/discover">Ghost – Discover</Link></li>
              <li><Link to="/ghost/detail">Ghost – In Detail</Link></li>
              <li><Link to="/ghost/prism">Ghost – Prism</Link></li>
              <li><Link to="/ghost/commission">Ghost – Commission</Link></li>
              <li><Link to="/ghost-extended/discover">Ghost Extended – Discover</Link></li>
              <li><Link to="/ghost-extended/detail">Ghost Extended – In Detail</Link></li>
              <li><Link to="/ghost-extended/commission">Ghost Extended – Commission</Link></li>
              <li><Link to="/cullinan/discover">Cullinan – Discover</Link></li>
              <li><Link to="/cullinan/detail">Cullinan – In Detail</Link></li>
              <li><Link to="/cullinan/commission">Cullinan – Commission</Link></li>
              <li><Link to="/black-badge/discover">Black Badge – Discover</Link></li>
              <li><Link to="/black-badge/cullinan">Black Badge – Cullinan</Link></li>
              <li><Link to="/black-badge/ghost">Black Badge – Ghost</Link></li>
              <li><Link to="/black-badge/commission">Black Badge – Commission</Link></li>
            </ul>
          </div>
          <hr />
          <div className='Sitemap-list-item'>
            <h2>INSPIRING GREATNESS</h2>
            <ul>
              <li><Link to="/rolls-royce-103EX">Rolls-Royce 103EX</Link></li>
              <li><Link to="/experimental-history">Experimental History</Link></li>
              <li><Link to="/vision">Vision</Link></li>
              <li><Link to="/values">Values</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/visionaries">Visionaries</Link></li>
              <li><Link to="/objects">Objects</Link></li>
              <li><Link to="/introducing-black-badge-cullinan">Introducing Black Badge Cullinan</Link></li>
              <li><Link to="/chapter1">Chapter 1: The Spirit of the Ecstasy</Link></li>
              <li><Link to="/chapter2">Chapter 2: Goodwood</Link></li>
              <li><Link to="/chapter3">Chapter 3: A Vision Beyond Time</Link></li>
              <li><Link to="/chapter4">Chapter 4: The Lexicon of Rolls-Royce</Link></li>
              <li><Link to="/how-rolls-met-royce">How Rolls Met Royce</Link></li>
              <li><Link to="/a-greener-goodwood">A Greener Goodwood</Link></li>
              <li><Link to="/masterpieces-in-miniature">Masterpieces in Miniature</Link></li>
              <li><Link to="/inspiring-greatness-series">Inspiring Greatness Series</Link></li>
              <li><Link to="/goodwood-revival">Goodwood Revival</Link></li>
              <li><Link to="/a-private-privilege">A Private Privilege</Link></li>
              <li><Link to="/in-the-artists-studio">In The Artists Studio</Link></li>
              <li><Link to="/dine-on-the-line">Dine On The Line</Link></li>
              <li><Link to="/festival-of-speed">Festival of Speed</Link></li>
              <li><Link to="/serenitys-textile-maven">Serenity's Textile Maven</Link></li>
              <li><Link to="/forge-yellow">Forge Yellow</Link></li>
              <li><Link to="/the-making-of-boat-tail">The Making Of Boat Tail</Link></li>
              <li><Link to="/cocktail-hamper">Cocktail Hamper</Link></li>
              <li><Link to="/dawn-aero-cowling">Dawn Aero Cowling</Link></li>
              <li><Link to="/arrive-in-style-phantom-luggage">Arrive In Style: Phantom Luggage</Link></li>
              <li><Link to="/picnic-hamper">Picnic Hamper</Link></li>
              <li><Link to="/the-art-of-packing-wraith-luggage">The Art Of Packing: Wraith Luggage</Link></li>
              <li><Link to="/under-the-stars">Under The Stars</Link></li>
              <li><Link to="/phantom-suite">Phantom Suite</Link></li>
              <li><Link to="/celestial-craftsmanship">Celestial Craftsmanship</Link></li>
              <li><Link to="/the-ultimate-accessory">The Ultimate Accessory</Link></li>
              <li><Link to="/phantom-gallery">Phantom Gallery</Link></li>
              <li><Link to="/champagne-chest">Champagne Chest</Link></li>
              <li><Link to="/bespoke-craft-technical-weave">Bespoke Craft: Technical Weave</Link></li>
              <li><Link to="/bespoke-craft-leather">Bespoke Craft: Leather</Link></li>
              <li><Link to="/phantom-tempus-champagne-chest">Phantom Tempus Champagne Chest</Link></li>
              <li><Link to="/bespoke-craft-starlight-headliner">Bespoke Craft: Starlight Headliner</Link></li>
              <li><Link to="/cellarette">Cellarette</Link></li>
            </ul>
          </div>
          <hr />
          <div className='Sitemap-list-item'>
            <h2>MUSE</h2>
            <ul>
              <li><Link to="/muse">Muse</Link></li>
              <li><Link to="/the-dream-commission">The Dream Commission</Link></li>
              <li><Link to="/sondra-perry-winners-preview">Sondra Perry - Winners Preview</Link></li>
              <li><Link to="/a-brief-history-of-moving-image-art-part1">A Brief History Of Moving Image Art: Part I</Link></li>
              <li><Link to="/a-brief-history-of-moving-image-art-part2">A Brief History Of Moving Image Art: Part II</Link></li>
              <li><Link to="/winners-dream-commission-dreams-triumph">Winners Dream Commission: Dreams Triumph</Link></li>
              <li><Link to="/winners-dream-commission-life-in-dreams">Winners Dream Commission: Life In Dreams</Link></li>
              <li><Link to="/2021-looking-ahead">2021: Looking Ahead</Link></li>
              <li><Link to="/muse-a-year-in-moving-image">Muse: A Year In Moving Image</Link></li>
              <li><Link to="/dream-commission">Dream Commission</Link></li>
              <li><Link to="/dream-commission-shortlist">Dream Commission - ShortList</Link></li>
              <li><Link to="/the-dream-commission-martyne-syms">The Dream Commission - Martyne Syms</Link></li>
              <li><Link to="/the-dream-commission-beatriz-santiago-muñoz">The Dream Commission - Beatriz Santiago Muñoz</Link></li>
              <li><Link to="/the-dream-commission-sondra-perry">The Dream Commission - Sondra Perry</Link></li>
              <li><Link to="/the-dream-commission-zhou-tao">The Dream Commission - Zhou Tao</Link></li>
              <li><Link to="/pioneering-commissions">Pioneering Commissions</Link></li>
              <li><Link to="/a-year-in-moving-image-art">A Year In Moving Image Art</Link></li>
              <li><Link to="/year-ahead-in-moving-image-art">Year Ahead In Moving Image</Link></li>
              <li><Link to="/year-ahead-in-moving-image-art">Year Ahead In Moving Image Art</Link></li>
              <li><Link to="/the-inaugural-dream-commission">The Inaugural Dream Commission</Link></li>
              <li><Link to="/dream-commission-in-venice">Dream Commission In Venice</Link></li>
              <li><Link to="/spirit-of-ecstasy-challenge">Spirit Of Ecstasy Challenge</Link></li>
              <li><Link to="/moved-by-the-spirit">Moved By The Spirit</Link></li>
              <li><Link to="/reimagining-an-icon">Reimagining An Icon</Link></li>
              <li><Link to="/winners-announced">Winners Announced</Link></li>
              <li><Link to="/spirit-of-ecstasy-winner-scarlett-yang">Spirit Of Ecstasy Winner Scarlett Yang</Link></li>
              <li><Link to="/spirit-of-ecstasy-winner-ghizlane-sahli">Spirit Of Ecstasy Winner Ghizlane Sahli</Link></li>
              <li><Link to="/spirit-of-ecstasy-winner-bi-rongrong">Spirit Of Ecstasy Winner Bi Rongrong</Link></li>
              <li><Link to="/pushing-the-boundaries-of-textiles">Pushing The Boundaries Of Textiles</Link></li>
              <li><Link to="/stitched-urban-skin-bi-rongrong">Stitched Urban Skin, Bi Rongrong</Link></li>
              <li><Link to="/nissas-rina-ghizlane-sahli">Nissa's Rina, Ghizlane Sahli</Link></li>
              <li><Link to="/transient-materiality-scarlett-yang">Transient Materiality, Scarlett Yang</Link></li>
              <li><Link to="/spirit-of-ecstasy-challenge-exhibition">Spirit of Ecstasy Challenge Exhibition</Link></li>
              <li><Link to="/muse-rolls-royce-arts-programme">Muse – The Rolls-Royce Arts Programme</Link></li>
              <li><Link to="/dan-holdsworth">Dan Holdsworth</Link></li>
              <li><Link to="/inspiring-minds">Inspiring Minds</Link></li>
              <li><Link to="/commissions">Commissions</Link></li>
              <li><Link to="/stones-against-diamonds">Stones Against Diamonds</Link></li>
              <li><Link to="/art-of-perfection">Art of Perfection</Link></li>
              <li><Link to="/muse-stories">Muse Stories</Link></li>
              <li><Link to="/cao-fei-blueprints">Cao Fei: Blueprints</Link></li>
              <li><Link to="/collecting-and-curating-media-art">Collecting and Curating Media Art</Link></li>
              <li><Link to="/art-in-360">Art In 360</Link></li>
              <li><Link to="/generation-next">Generation Next</Link></li>
              <li><Link to="/in-conversation-with-moving-image-collector-pamela-kramlich">In Conversation With Moving Image Collector Pamela Kramlich</Link></li>
              <li><Link to="/the-art-of-collecting">The Art Of Collecting</Link></li>
              <li><Link to="/new-technology-in-art-dominique-gonzalez-foerster">New Technology in Art: Dominique Gonzalez-Foerster</Link></li>
              <li><Link to="/jane-suitor-the-art-of-collecting">Jane Suitor The Art of Collecting</Link></li>
              <li><Link to="/the-world-of-muse">The World Of Muse</Link></li>
            </ul>
          </div>
          <hr />
          <div className='Sitemap-list-item'>
            <h2>BESPOKE</h2>
            <ul>
              <li><Link to="/discover-bespoke">Discover Bespoke</Link></li>
              <li><Link to="/inspiration">Inspiration</Link></li>
              <li><Link to="/craft">Craft</Link></li>
              <li><Link to="/objects-of-luxury">Objects of Luxury</Link></li>
              <li><Link to="/configure-your-rolls-royce">Configure Your Rolls-Royce</Link></li>
              <li><Link to="/dawn-silver-bullet">Dawn Silver Bullet</Link></li>
              <li><Link to="/black-badge-cullinan-capella">Black Badge Cullinan - Capella</Link></li>
              <li><Link to="/black-badge-wraith-inception">Black Badge Wraith - Inception</Link></li>
              <li><Link to="/wraith-kryptos">Wraith Kryptos</Link></li>
              <li><Link to="/phantom-syntopia">Phantom Syntopia</Link></li>
              <li><Link to="/wraith-black-arrow">Wraith Black Arrow</Link></li>
              <li><Link to="/black-badge-neon-nights">Black Badge Neon Nights</Link></li>
              <li><Link to="/phantom-tempus">Phantom Tempus</Link></li>
              <li><Link to="/phantom-oribe">Phantom Oribe</Link></li>
              <li><Link to="/black-badge-landspeed-collection">Black Badge Landspeed Collection</Link></li>
              <li><Link to="/black-badge-cullinan-the-re-belle-collection">Black Badge Cullinan - The Re-Belle Collection</Link></li>
              <li><Link to="/black-badge-cullinan-the-fu-shion-collection">Black Badge Cullinan - The Fu-Shion Collection</Link></li>
              <li><Link to="/coachbuild">Coachbuild</Link></li>
              <li><Link to="/arcadia-droptail">Arcadia Droptail</Link></li>
              <li><Link to="/amethyst-droptail">Amethyst Droptail</Link></li>
              <li><Link to="/la-rose-noire-droptail">La Rose Noire Droptail</Link></li>
              <li><Link to="/boat-tail">Boat Tail</Link></li>
              <li><Link to="/boat-tail-the-next-chapter">Boat Tail - The Next Chapter</Link></li>
              <li><Link to="/sweptail">Sweptail</Link></li>
              <li><Link to="/black-badge-ghost-ekleipsis">Black Badge Ghost Ekleipsis</Link></li>
              <li><Link to="/black-badge-cullinan-blue-shadow">Black Badge Cullinan Blue Shadow</Link></li>
            </ul>
          </div>
          <hr />
          <div className='Sitemap-list-item'>
            <h2>OWNERSHIP</h2>
            <ul>
              <li><Link to="/owners-lounge">Owner's Lounge</Link></li>
              <li><Link to="/your-motor-car">Your Motor Car</Link></li>
              <li><Link to="/find-your-nearest-dealer">Find Your Nearest Dealer</Link></li>
              <li><Link to="/roadside-assistance">Roadside Assistance</Link></li>
              <li><Link to="/technology-car-data">Technology & Car Data</Link></li>
              <li><Link to="/whispers">Whispers</Link></li>
              <li><Link to="/charging">Charging</Link></li>
            </ul>
          </div>
          <hr />
          <div className='Sitemap-list-item'>
            <h2>INFORMATION</h2>
            <ul>
              <li><Link to="/site-map">Site Map</Link></li>
              <li><Link to="/contact-rolls-royce">Contact Rolls-Royce</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/legal-information">Legal Information</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/pre-owned">Pre-Owned</Link></li>
              <li><Link to="/reach-regulation">REACH Regulation</Link></li>
              <li><Link to="/client-complaints-procedure">Client Complaints Procedure</Link></li>
            </ul>
          </div>
          <hr />
          <div className='Sitemap-list-item'>
            <h2>BOUTIQUE</h2>
            <ul>
              <li><Link to="/all-accessories">All Accessories</Link></li>
              <li><Link to="/bespoke-boutique">Bespoke Boutique</Link></li>
              <li><Link to="/lifestyle-collections">Lifestyle Collections</Link></li>
            </ul>
          </div>
          <hr />
          <div>
            <div className='Sitemap-list-item'>
              <h2>DEALERS</h2>
              <ul>
                <li><Link to="/all-accessories">All Accessories</Link></li>
              </ul>
            </div>
            <p>You will be directed to the page of our authorised dealers. 
              Rolls‑Royce Motor Cars Limited accepts no liability or responsibility 
              for the information, views, or opinions contained therein.</p>
          </div>
        </div>
      </section >
    </div>
  );
};

export default Sitemap;
