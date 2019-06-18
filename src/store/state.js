const state = {
  user: null,
  isAuthenticated: false,
  pageBanners: {
    home: [
      {
        title: 'CHCAA.ai',
        body: 'Center for Humanities Computing Aarhus offers compentency development and avant garde scientific data services',
        src: '400_imgix-391813-unsplash.jpg'
      },
      {
        title: 'Software Development',
        body: 'Specialist software services from classification algorithms to full stack application development',
        src: '400_markus-spiske-221494-unsplash.jpg'
      },
      {
        title: 'Data Services',
        body: 'Scraping, Filtering, Formatting, Crossreferencing, Transpiling, Hosting, Modelling, Classification, ...',
        src: '400_sander-weeteling-1201289-unsplash.jpg'
      },
      {
        title: 'Competency Development',
        body: 'Workshops on state-of-the-art data science practices and computational literacy in intelligible formats and collegial settings',
        src: '400_kaleidico-754613-unsplash.jpg'
      }
    ],
    events: [
      {
        title: 'Brainstorming',
        body: 'body',
        src: '400_kaleidico-754613-unsplash.jpg'
      },
      {
        title: 'Data sprint',
        body: 'body',
        src: '400_rawpixel-678089-unsplash.jpg'
      },
      {
        title: 'Workshop',
        body: 'body',
        src: '400_barn-images-12223-unsplash.jpg'
      }
    ],
    portfolio: [
      {
        title: 'example 1',
        body: 'body',
        src: '400_alice-achterhof-85968-unsplash.jpg'
      }, {
        title: 'another great experience',
        body: 'body',
        src: '400_samuel-zeller-339480-unsplash.jpg'
      }, {
        title: 'memory lane',
        body: 'body',
        src: '400_markus-spiske-666905-unsplash.jpg'
      }
    ],
    stream: {
      title: 'Activity Dashboard',
      body: 'Our productivity as tracked across various APIs',
      src: '400_nasa-53884-unsplash.jpg'
    },
    workshop: [
      {
        title: 'Software Carpentry Workshops',
        body: 'We organize and teach programming courses for scientists as part of Software Carpentries',
        src: 'softwareCarpentry.jpg'
      },
      {
        title: 'Code Refinery',
        body: 'As part of CodeRefinery we develop and teach programming language agnostic programming courses for scientists',
        src: 'codeRefinery.jpg'
      },
      {
        title: 'Hackathons',
        body: 'body',
        src: '400_rawpixel-678089-unsplash.jpg'
      },
      {
        title: 'Co-Development Sprints',
        body: 'body',
        src: '400_rawpixel-983726-unsplash.jpg'
      },
      {
        title: 'Data Sprints',
        body: 'body',
        src: '400_stephen-dawson-670638-unsplash.jpg'
      }
    ],
    404: {
      title: 'Do you miss something here?',
      body: '<router-link :to="/contact">contact us</router-link><br><br> Or would you rather like to <router-link :to="/">return to the landing page</router-link>?',
      src: '400_daniel-jensen-440210-unsplash.jpg'
    }
  },
  activeTag: '',
  minFontSize: 80,
  maxFontSize: 150
}
export default state
