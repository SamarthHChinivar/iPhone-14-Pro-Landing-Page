import React from 'react'
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

const Nav = () => {
  return (
    <nav className='nav-wrapper'>
      
      <div className="nav-content">
        <ul className='list-styled'>
          <li>
            <a href='https://en.wikipedia.org/wiki/Steve_Jobs' target='_blank'><img id='nav_logo' src={Logo} alt="Apple" /></a>
          </li>

          <li>
            <a href="https://www.flipkart.com/apple-iphone-14-pro-deep-purple-128-gb/p/itm75f73f63239fa?pid=MOBGHWFHYGAZRWFT&lid=LSTMOBGHWFHYGAZRWFT3ZMVDX&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3AMOBGHWFHCWHXRZZJ%3Bl%3ALSTMOBGHWFHCWHXRZZJ9EECH5%3Bpt%3App%3Buid%3Aca982f4d-1cdf-11ee-9ca2-efba4dfec0a0%3B.MOBGHWFHYGAZRWFT&ppt=pp&ppn=pp&ssid=fyerrd950w0000001688745792416&otracker=pp_reco_Similar%2BProducts_2_34.productCard.PMU_HORIZONTAL_APPLE%2BiPhone%2B14%2BPro%2B%2528Deep%2BPurple%252C%2B128%2BGB%2529_MOBGHWFHYGAZRWFT_productRecommendation%2Fsimilar_1&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_2_NA_view-all&cid=MOBGHWFHYGAZRWFT" target='_blank' className='link-styled'>Store</a>
          </li>

          <li>
            <a href="" className='link-styled'>Mac</a>
          </li>

          <li>
            <a href="" className='link-styled'>iPad</a>
          </li>

          <li>
            <a href="" className='link-styled'>iPhone</a>
          </li>

          <li>
            <a href="" className='link-styled'>Watch</a>
          </li>

          <li>
            <a href="" className='link-styled'>AirPods</a>
          </li>

          <li>
            <a href="" className='link-styled'>TV & Home</a>
          </li>

          <li>
            <a href="" className='link-styled'>Entertainment</a>
          </li>

          <li>
            <a href="" className='link-styled'>Accessories</a>
          </li>

          <li>
            <a href="" className='link-styled'>Support</a>
          </li>

          <li>
            <a href="http://samarth-portfolio-website.000webhostapp.com" target='_blank' className='link-styled'>Contact</a>
          </li>

          <li>
            <a href="http://samarth-portfolio-website.000webhostapp.com" target='_blank'><img src={Search} alt="Search" /></a>
          </li>

          <li>
            <a href="https://github.com/SamarthHChinivar" target='_blank'><img src={Store} alt="Store" /></a>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav