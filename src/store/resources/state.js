const state = {
  slides: [
    {
      title: 'Resources',
      body: 'This section hosts a few early practical tools and links',
      src: 'HD_barn-images-12223-unsplash.jpg',
      tag: 'competency'
    }
  ],
  cards: [
    {
      title: 'Research Data Management Course',
      body: `DEIC the Danish E-Infrastructure Cooperation features an online course developed by the Danish Universities about
        <a href="https://vidensportal.deic.dk/RDMElearn" target="_blank">the importance of good research data management</a>.
        The three video modules give an introduction to (Research) Data Management and the data life cycle, cover the Fair Principles
        and open data, and highlight the role of data management plans in research projects.
      `,
      src: 'RDMFrame.jpg',
      tag: 'competency'
    },
    {
      title: 'Danish open work id search',
      body: `We feature this widget by courtesy of the DATAKUBEN project. It allows you to quickly
        <a href="#/danishCorpus">find the work id of any item in the danish literature corpus</a> offered by Project Gutenberg. Filter the almost 9000
        listed works by any detail to copy the work id for use in Voyant Tools.
      `,
      src: 'danishCorpus.png',
      tag: 'danishCorpus'
    },
    {
      title: 'Stop Word List Editor',
      body: `
        This is feature was again developed for the DATAKUBEN project. This simple widget implements an
        <a href="#/stopWords">editor for stop words</a> to be included into Python or JavaScript code. All tags are
        represented visually for convenient search and manipulation.
      `,
      src: 'stopwords.jpg',
      tag: 'stopWords'
    }
  ]
}
export default state
