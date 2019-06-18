const state = {
  slides: [
    {
      title: 'Software Carpentry Workshops',
      body: 'Introductory programming and data science workshops for scientists',
      src: 'softwareCarpentry.jpg',
      tag: 'softwareCarpentry'
    },
    {
      title: 'Code Refinery',
      body: 'Language agnostic programming courses for scientists',
      src: 'codeRefinery.jpg',
      tag: 'codeRefinery'
    },
    {
      title: 'Hackathons',
      body: 'From data sprints to User-Centered Design sessions',
      src: '400_rawpixel-678089-unsplash.jpg',
      tag: 'hackathon'
    }
  ],
  cards: [
    {
      title: 'Software Carpentry Workshops',
      body: `
        Introductory participatory courses by the Software Carpentries
      `,
      src: 'softwareCarpentry.jpg',
      tag: 'softwareCarpentry'
    },
    {
      title: 'Code Refinery',
      body: `
        <em><a href="http://coderefinery.org" target="_blank">Code Refinery</a></em> develops and conducts workshops on best practices in software development,
        high performance computing, and social coding. <br>
        As part of CodeRefinery we develop and teach programming language agnostic programming courses for scientists
      `,
      src: 'codeRefinery.jpg',
      tag: 'codeRefinery'
    },
    {
      title: 'Hackathons',
      body: `
        Focussed sessions on interesting data and algorithms.
      `,
      src: '400_rawpixel-678089-unsplash.jpg',
      tag: 'dataSprint'
    },
  ]
}
export default state
