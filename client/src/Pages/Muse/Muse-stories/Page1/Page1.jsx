import './Page1.scss'
import Limitless from '/muse/Limitless.mp4'
import img1 from '/public/muse/page1/ImgPage1.webp'
import img2 from '/public/muse/page1/Img2Page1.webp'
import img3 from '/public/muse/page1/Img3Page1.webp'
import img4 from '/public/muse/page1/Img4Page1.webp'
import img5 from '/public/muse/page1/Img5Page1.webp'
import img6 from '/public/muse/page1/Img6Page1.webp'
import img7 from '/public/muse/img3.webp';
import img8 from '/public/muse/img4.webp';
import img9 from '/public/muse/img5.webp';
import { Link } from 'react-router-dom'
import { GrLinkNext } from 'react-icons/gr';




const Page1 = () => {
  return (
    <div className='Page-1-container'>
      <section className='Page-1-item'>
        <div >
          <video src={Limitless} autoPlay loop muted />
        </div>
      </section>
      <section className='Page-2-item'>
        <div className='Menu1-container Careers-container-section2'>
          <div className='text-overlay color-overlay'>
            <h1>MUSE 2022 A YEAR IN REVIEW</h1>
            <p>2022 was the year of Muse, the Rolls-Royce Arts Programme. Together, our flagship Dream
              Commission and the Spirit of Ecstasy Challenge embraced a wide spectrum of contemporary visual expression,
              from artists who exhibited moving image in esteemed museums and biennials, to pioneering design visionaries
              committed to the heritage of their craft, while making use of the latest technological advances. Collectors
              revealed an insider’s guide into the world of art, while key figures at Rolls-Royce pushed the boundaries of
              materials. Muse fosters a new generation of creative leaders and forms a gateway to fresh ideas and unbounded
              innovation. We look back at our highlights of 2022, leaving a legacy of exceptional creative pursuit.
            </p>
          </div>
        </div>
        <div>
          <img src={img1} />
          <div className='item-span-fix'>
            <span>Installation Image, Sondra Perry, 'Lineage for a Phantom Zone,’ Fondation Beyeler, Basel. Photo: Mark Niedermann.</span>
          </div>
        </div>
      </section>
      <section className='Page-2-item'>
        <div className='Menu1-container Careers-container-section2'>
          <div className='text-overlay color-overlay'>
            <h1>FEBRUARY: UNVEILING THE DREAM COMMISSION IN SWITZERLAND</h1>
            <p>At one of Switzerland’s most prestigious museums, Fondation Beyeler, Muse unveiled the inaugural Dream Commission,
              celebrating moving image works created by emerging and mid-career artists worldwide.
              The winning artist, New Jersey-based Sondra Perry, debuted her Dream Commission artwork
              ‘Lineage for a Phantom Zone’, transporting audiences with her boundary-pushing approach to
              moving image. The immersive audio-visual installation conjured the idea of dreams and memories
              that Perry wishes her family could have had.  Fondation Beyeler welcomed over 30,000 visitors
              to experience the artwork.
            </p>
            <p>Click here to download the catalogue, which includes
              the voices of the artist Sondra Perry, artist Sir Isaac
              Julien CBE and writer N.K Jemisin.
            </p>
          </div>
        </div>
        <div>
          <img src={img2} />
          <div className='item-span-fix'>
            <span>Still From ‘Sondra Perry in Venice’ Film for Muse, by Luke Walker.</span>
          </div>
        </div>
      </section>
      <section className='Page-2-item'>
        <div className='Menu1-container Careers-container-section2'>
          <div className='text-overlay color-overlay'>
            <h1>FEBRUARY: UNVEILING THE DREAM COMMISSION IN SWITZERLAND</h1>
            <p>At one of Switzerland’s most prestigious museums, Fondation Beyeler, 
              Muse unveiled the inaugural Dream Commission, celebrating moving image works 
              created by emerging and mid-career artists worldwide. The winning artist, New 
              Jersey-based Sondra Perry, debuted her Dream Commission artwork ‘Lineage for a 
              Phantom Zone’, transporting audiences with her boundary-pushing approach to moving 
              image. The immersive audio-visual installation conjured the idea of dreams and memories 
              that Perry wishes her family could have had.  Fondation Beyeler welcomed over 30,000 visitors 
              to experience the artwork.
            </p>
            <p>Click here to download the catalogue, which includes the voices of the artist Sondra Perry, 
              artist Sir Isaac Julien CBE and writer N.K Jemisin.</p>
          </div>
        </div>
        <div>
          <img src={img3} />
          <div className='item-span-fix'>
            <span>Still From ‘Sondra Perry in Venice’ Film for Muse, by Luke Walker.</span>
          </div>
        </div>
      </section>
      <section className='Page-2-item'>
        <div className='Menu1-container Careers-container-section2'>
          <div className='text-overlay color-overlay'>
            <h1>APRIL: DREAMS BECOME REALITY IN VENICE</h1>
            <p>Dreams became reality when Sondra Perry’s work for the Dream Commission was selected for the Venice Biennale, one of the most
              anticipated international art events of the year. Described as the “Olympics of the Art World”, the Venice Biennale attracted
              crowds of over 800,000 to the city. It was serendipitous that the theme of the Biennale, chosen by curator Cecilia Alemani, was
              ‘dreams’. Sondra Perry’s work hung suspended from the ceiling at the heart of the group show. To celebrate this outstanding achievement,
              Muse hosted an intimate dinner for Rolls-Royce owners, collectors and art world directors, set in the grandeur of the former Palazzo Papadopoli.
            </p>
            <p>Take a journey down the Grand Canal as Sondra Perry debuted at the Venice Biennale. Watch here.
            </p>
          </div>
        </div>
        <div>
          <img src={img4} />
          <div className='item-span-fix'>
            <span>Still From ‘Sondra Perry in Venice’ Film for Muse, by Luke Walker.</span>
          </div>
        </div>
      </section>
      <section className='Page-2-item'>
        <div className='Menu1-container Careers-container-section2'>
          <div className='text-overlay color-overlay'>
            <h1>SEPTEMBER: PUSHING THE BOUNDARIES OF TEXTILES AT ROLLS-ROYCE</h1>
            <p>Awaiting the much-anticipated launch of Muse’s second initiative, the Spirit of Ecstasy Challenge, Muse spoke to Christine Franck,
              Head of Colour, Materials & Trim Design at Rolls-Royce, to explore the enormous potential of textiles. Over recent years, Rolls-Royce
              has brought beautiful, interesting fabrics back into cars, pushing the boundaries of what is possible in bespoke design.
              Each individual fabric is conceived and developed as though a work of art, and treated, in Franck’s words, “like a masterpiece”.
            </p>
            <p>
              Explore the multi-faceted role of textiles at Rolls-Royce through Christine Franck’s interview here.
            </p>
          </div>
        </div>
        <div>
          <img src={img5} />
          <div className='item-span-fix'>
            <span>Installation View, Spirit of Ecstasy Challenge Exhibition, Cromwell Place, photo © Luke Walker. </span>
          </div>
        </div>
      </section>
      <section className='Page-2-item'>
        <div className='Menu1-container Careers-container-section2'>
          <div className='text-overlay color-overlay'>
            <h1>OCTOBER: LAUNCH OF THE SPIRIT OF ECSTASY CHALLENGE</h1>
            <p>On the eve of Frieze Week, Muse presented the three winning artists of the inaugural Spirit of Ecstasy Challenge in London.
              The Challenge invited three emerging design visionaries to create unique works inspired by the Spirit of Ecstasy — the sculptural
              figurine that adorns the bonnet of every Rolls-Royce motor car. Among a cluster of notable guests from the design and art world,
              Shanghai-based Bi Rongrong, Marrakech-based Ghizlane Sahli and London-based Scarlett Yang debuted their work to the world. Centred
              around textiles and the power of materials, the exhibition was marked by a VIP opening, with speakers including Anders Warming,
              Director of Design at Rolls-Royce; Tim Marlow, Director of the Design Museum; Sumayya Vally, Principal of Counterpace; and Yoon
              Ahn, Creative Director of AMBUSH and Jewellery Director, Dior Men.
            </p>
            <p>Follow the journey of our Spirit of Ecstasy Challenge winners, as they created three world-class artworks. Download the catalogue
              and watch here.
            </p>
          </div>
        </div>
        <div>
          <img src={img6} />
          <div className='item-span-fix'>
            <span>Installation View, Spirit of Ecstasy Challenge Exhibition, Cromwell Place, photo © Luke Walker. </span>
          </div>
        </div>
      </section>
      <section className='Page-2-item'>
        <div className='Menu1-container Careers-container-section2 Careers-container-section3'>
          <div className='text-overlay color-overlay'>
            <h1>Muse Initiatives</h1>
            <p>In 2023, Muse continues to celebrate creativity and innovation across moving image and design. The Spirit of Ecstasy
              Challenge artworks will travel on a global tour, where new regions will be explored. Muse will continue to support our
              partners, Serpentine, London, and Fondation Beyeler, Switzerland, on their upcoming programmes, and collaborate with some
              of the most exciting and inspiring artists of today.
            </p>
            <p>Follow the journey of our Spirit of Ecstasy Challenge winners, as they created three world-class artworks. Download the catalogue
              and watch here.
            </p>
          </div>
        </div>
      </section>
      <section className='Page-2-item'>
        <div className='Menu1-container Careers-container-section2 Careers-container-section3'>
          <div className='text-overlay color-overlay'>
            <h1 style={{paddingTop: '0px'}}>SIGN UP NOW</h1>
            <div className='border-1-px'></div>
            <p>Be the first to hear about our commissioning work with artists and designers,
              events, conversations with collectors and museum partnership programmes.
            </p>
            <p>Sign up to our newsletter to hear the latest from Muse,
              including the latest on the Dream Commission and Spirit of
              Ecstasy Challenge in 2023.
            </p>
            <div className='Page1-button'>
              <button>STAY CONNECTED
                <GrLinkNext className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='color-seticon-last'>
        <div className='Navbar-item'>
          <div>
            <h3>CONTINUE YOUR JOURNEY</h3>
          </div>
          <div className='content-container'>
            <div className='Navbar-content'>
              <div>
                <img src={img7} alt="Discover Bespoke" />
                <h4>DISCOVER BESPOKE</h4>
                <p>Choose from our exclusive collections or collaborate with our craftspeople and designers to create a Rolls-Royce wholly unique to you. This is Rolls-Royce Bespoke.</p>
              </div>
            </div>
            <div className='Navbar-content'>
              <div>
                <img src={img8} alt="Explore Models" />
                <h4>EXPLORE MODELS</h4>
                <p>Explore our stunning collection of new Rolls-Royce models. Whether you’re looking for the ultimate luxury saloon, a sporty coupe or a refined convertible, we have something for you.</p>
              </div>
            </div>
            <div className='Navbar-content'>
              <div>
                <img src={img9} alt="Find Your Dealer" />
                <h4>FIND A DEALER</h4>
                <p>Find a Rolls-Royce dealer near you and book a test drive or discover more about the bespoke services we offer.</p>
              </div>
            </div>
          </div>
          <div className='Page1-button fix2-button'>
            <Link to='/Inspiring-Greatness'>
              Inspiring Greatness
              <GrLinkNext className="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page1