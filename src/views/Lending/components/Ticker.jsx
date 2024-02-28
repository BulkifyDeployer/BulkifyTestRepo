import balancerLogoSrc from "assets/logov2/balancer.svg"
import bungeeLogoSrc from "assets/logov2/bungee.svg"
import chainhopLogoSrc from "assets/logov2/chainhop.svg"
import dodoLogoSrc from "assets/logov2/dodo.svg"
import jumperLogoSrc from "assets/logov2/jumper.svg"
import lifiLogoSrc from "assets/logov2/li-fi.svg"
import okxLogoSrc from "assets/logov2/okx.svg"
import pooltogetherLogoSrc from "assets/logov2/pooltogether.svg"
import rainbowLogoSrc from "assets/logov2/rainbow.svg"
import rangoLogoSrc from "assets/logov2/rango.svg"
import snxLogoSrc from "assets/logov2/snx.svg"
import socketLogoSrc from "assets/logov2/socket.svg"

import {
  TickerSegment,
  TickerTitle,
  TickerWrapper,
  TickerAnimation,
  TickerItem,
  TickerBackground
} from '../Lending.styled'


const partners = [
  {
    logo: <img src={balancerLogoSrc} alt="balancer logo" />
  },
  {
    logo: <img src={bungeeLogoSrc} alt="bungee logo" />
  },
  {
    logo: <img src={chainhopLogoSrc} alt="chainhop logo" />
  },
  {
    logo: <img src={dodoLogoSrc} alt="dodo logo" />
  },
  {
    logo: <img src={jumperLogoSrc} alt="jumper logo" />
  },
  {
    logo: <img src={lifiLogoSrc} alt="lifi logo" />
  },
  {
    logo: <img src={okxLogoSrc} alt="okx logo" />
  },
  {
    logo: <img src={pooltogetherLogoSrc} alt="pooltogether logo" />
  },
  {
    logo: <img src={rainbowLogoSrc} alt="rainbow logo" />
  },
  {
    logo: <img src={rangoLogoSrc} alt="rango logo" />
  },
  {
    logo: <img src={snxLogoSrc} alt="snx logo" />
  },
  {
    logo: <img src={socketLogoSrc} alt="socket logo" />
  }
]

export function PartnersTicker() {
  return <Ticker title={"trusted by top tier applications"} items={partners} />
}

function Ticker({ title, items }) {
  const notEnoughItems = items.length < 10
  return (
    <TickerSegment>
      <TickerTitle>
        {title}
      </TickerTitle>
      <TickerWrapper>
        <TickerAnimation >
          {items.map((item, index) => (
            <TickerItem key={index} >
              {item.logo}
            </TickerItem>
          ))}
        </TickerAnimation>
        {/* Duplicate for infinite scroll */}
        <TickerAnimation >
          {items.map((item, index) => (
            <TickerItem key={index + items.length} >
              {item.logo}
            </TickerItem>
          ))}
        </TickerAnimation>
        {/* Multiply again if not enough items for large screen */}
        {notEnoughItems && (
          <TickerAnimation >
            {items.map((item, index) => (
              <TickerItem key={index + 2 * items.length} >
                {item.logo}
              </TickerItem>
            ))}
          </TickerAnimation>
        )}
        {/* Fade in/out overlay */}
        <TickerBackground />
      </TickerWrapper>
    </TickerSegment>
  )
}
