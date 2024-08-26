import './FooterTop.scss'
import img1 from '/footer/img1.png'
import img2 from '/footer/img2.png'
import img3 from '/footer/img3.png'

const FooterTop = () => {
  return (
    <div className='Footer-top'>
      <div>
        <img src={img1} />
        <div>
          <span>
            Quality tested
          </span>
          <p>Each suitcase is individually <br />inspected</p>
        </div>
      </div>
      <div><img src={img2} />
        <div>
          <span>
            LIFETIME GUARANTEE
          </span>
          <p>Repairs on all functional <br /> 
          damage to your suitcase</p>
        </div>
      </div>
      <div>
        <img src={img3} />
        <div>
          <span>
            Customer service
          </span>
          <p>A dedicated network of experts <br /> 
          at your service</p>
        </div>
      </div>
    </div>
  )
}

export default FooterTop