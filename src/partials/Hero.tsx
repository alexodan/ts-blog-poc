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
          Hola! Soy <GradientText>Alex</GradientText> 👋
        </>
      }
      description={
        <>
          Actualmente estoy en Buenos Aires trabajando como desarrollador
          front-end en Mindera, una empresa radicada en Portugal.
          <br></br>Este último tiempo he estado aprendiendo un poco más sobre{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            TypeScript
          </a>{' '}
          generics, lo cual me llevó a hacer este pequeño blog que sirve de
          anotaciones sobre mi aprendizaje.
          <br></br>
          Otros intereses o pasatiempos míos son bailar y entrenar, aunque no me
          tomo muy en serio este último!
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
