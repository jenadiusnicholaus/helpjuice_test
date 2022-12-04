const MENU_HEIGHT = 150;
const allowedTags = [
  {
    id: "page-title",
    tag: "h1",
    label: "Heading 1",
    instructions: 'ShortCut: type /+1 then Enter'

  },

  //  I have added a few to test scalability
  
  {
    id: "heading_h2",
    tag: "h2",
    label: "Heading 2",
    instructions: 'ShortCut: type /+2 then Enter'
  },
  {
    id: "subheading_h3",
    tag: "h3",
    label: "Heading 3",
    instructions: 'ShortCut: type /+3 then Enter'


  },
    {
    id: "subheading_h4",
    tag: "h4",
    label: "Heading 4",
    instructions: 'ShortCut: type /+4 then Enter'

  },

  {
      
    id: "subheading_h5",
    tag: "h5",
    label: "Heading 5",
    instructions: 'ShortCut: type /+5 then Enter'

  },
  {
    id: "subheading_h6",
    tag: "h6",
    label: "Heading 6", 
    instructions: 'ShortCut: type /+6 then Enter',

  },
  
  
  {
    id: "paragraph",
    tag: "p",
    label: "Paragraph",
    instructions: 'ShortCut: type /+p then Enter',

  }
];

export {allowedTags, MENU_HEIGHT}