# Accessibility

## Make it Accessible

- [ ] Don’t remove the focus ring: make sure a keyboard user can always see where they are currently focused.
- [ ] Make links look like links
- [ ] Make form elements look like form elements
- [ ] Label all form inputs
- [ ] Left align text
- [ ] [Make sure text contrast is good][accessible-colors]
- [ ] Provide Text Alternatives for All Images, Video, and Audio, and don’t autoplay media.
- [ ] Add Proper Document Language: let assistive technology know the language that your text is in.
- [ ] Help a Visitor Get Around Your Content: use HTML landmark elements to help assistive technology users understand and navigate your content.
  - Wrap your main content, that is, stuff that isn’t header, primary navigation or footer, in a <main> element. In almost all cases, there should only be one <main> per page. All browsers (IE9+) allow you to style it, and assistive technologies know what to do with it.
  - Wrap your header (brand logo, strapline, the heading of the page) in a <header> element.
  - Wrap your footer (legal stuff, contact details, copyright notice, etc) in a <footer>
  - Mark up your primary navigation using <ul> wrapped in a <nav> element. This can be nested inside the <header> if that fits the visual design of the page.
  - Advertising and non-essential content should be wrapped in an <aside>
  - If you have more than one product/ video/ news item/ blog post on a page, wrap each of them in an <article> element.


### Top Accessibility Barriers

- Crowded pages with too much content
  - [ ] Break up text into sections with headings and bulleted lists.
  - [ ] Use simple language.
  - [ ] Have only one <h1> on a page.
  - [ ] Use sub-headings liberally; it breaks up a ‘slab’ of text for sighted users, while users of assistive technologies such as screen readers can use a short-cut key to jump between headings or obtain a mental map of the content from the heading structure.
  - [ ] Don’t skip a level of headings. For example, if you use an <h3>, make sure it is preceded by an <h2>.
  - [ ] Use bulleted lists marked up correctly in HTML as <ul>, <li>. Screen readers will announce “List of 10 items” (and allow the user to jump over them).
- reCAPTCHA tests
  - [ ] Don’t make your users jump through potentially impossible hoops in order to save developer time.
  - The most accessible form of reCAPTCHA is reCAPTCHA v3 which requires no user interaction, but needs you to do more work to deal with visits that fail the test.
- Poor legibility (contrast, text layout)
  - [ ] Make sure text has adequate contrast, is readable and isn’t justified.
  - [ ] Ensure adequate contrast.
  - [ ] Don’t have all-capital headings.
  - [ ] Left-align text.
- The distraction of moving images and graphics
  - [ ] Allow users to stop any movement; respect their operating system settings; don’t auto-play video.
  - [ ] Respect User’s Choice for Animations
- Poor link information
  - [ ] Make links identifiable, with unique link text. Warn users if a link will open a new tab or a file.
  - [ ] Don’t add link title attributes.
  - [ ] Links Should Look Like Links
  - [ ] Tell People If Link Opens a New Tab/Page: you should alert the user either in the link text, or using the aria-label method
  - [ ] Tell People If Link Is to a File, i.e., `<a href="big-report.pdf" download>Annual report (PDF, 240 MB)</a>`
- Form filling
  - [ ] Make Form Fields Look Like Form Fields
  - [ ] Label All Form Fields
    - Occasionally, you might not want a visible label. Or the designer doesn’t, and you don’t want another fight in the car park. Anyway, here’s an example when a label saying “Search” preceding the input feels like overkill. We can associate the input field with the text “Search”, which is the contents of the submit button using aria-labelledby: `<input type="text" aria-labelledby="searchbutton"><button id="searchbutton" type="submit">Search</button>`
  - [ ] Don’t disable auto-fill. Autofill Is Your Friend.
- Low contrast text
- Missing alternative text for images
- Empty links
- Missing form input labels
- Missing document language
