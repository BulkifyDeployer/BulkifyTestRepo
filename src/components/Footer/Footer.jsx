import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  Wrapper,
  LinkContainer,
  Link,
} from './Footer.styled'

const NAV_LINKS = [
  {
    key: "faq",
    name: "FAQ",
    url: "https://docs.across.to/additional-info/faq",
    icon: "",
  },
  {
    key: "docs",
    name: "Docs",
    url: "https://docs.across.to/",
    icon: faGithub,
  },
  {
    key: "discord",
    name: "Discord",
    url: "https://discord.across.to",
    icon: faDiscord,
  },
  {
    key: "twitter",
    name: "Twitter",
    url: "https://twitter.com/AcrossProtocol",
    icon: faTwitter,
  },
];

export const Footer = () => {
  return (
    <Wrapper>
      <LinkContainer>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.url}
            targer="_blank"
            rel="noopener noreferrer"
          >
            {link.icon ?
              <FontAwesomeIcon icon={link.icon} />
              :
              link.name
            }
          </Link>
        ))}
      </LinkContainer>
      <Link href="">
        Disclaimer
      </Link>
    </Wrapper>
  )
}