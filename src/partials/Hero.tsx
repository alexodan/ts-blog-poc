import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Alex</GradientText> 👋
        </>
      }
      description={
        <>
          I am currently working as a front end developer at Mindera. Lately,
          I've been learning more about{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            TypeScript
          </a>{' '}
          and generics, since I have been working with React since 2020.
          <br></br>
          Other interests of mine are dancing bachata and working out, although
          I don't take that last one so seriously!
        </>
      }
      avatar={
        <img
          style={{ display: 'none' }}
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.twitter.com/alexdiazth">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/alexisddiaz">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
