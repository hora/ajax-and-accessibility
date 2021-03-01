# A big picture look at AJAX

_Note: This repo contains the lecture notes and code examples for a lecture
I prepared for Lighthouse Labs (W4D3)._

## What is accessibility?

> Accessibility is the practice of making your websites
> usable by as many people as possible. We traditionally
> think of this as being about people with disabilities,
> but the practice of making sites accessible also
> benefits other groups such as those using mobile
> devices, or those with slow network connections.

Quote from MDN's page ["What is
accessibility?"](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)

When making technology design decisions, we should
consider how our products can be interacted with by:
  
- blind people, colour blind people
- D/deaf people, people that are hard of hearing
- people with motor disabilities
- people with various cognitive disabilities

- According to WebAIM, about 20% of people are disabled

- It's common to think of disability as a medical
  condition, but disability is often limiting only when
  diverse bodies and minds interact with inacessible
  technology design

- Designing web experiences that are as accessible as
  possible for disabled people also benefit everyone else

- For example, designing technology that can be used with
  only one arm/hand benefits:

    - amputees
    - people with broken fingers, wrists, arms, etc.
    - someone holding a phone in one hand and a dog leash
      in the other

## A brief history of the web and web accessibility

### The 90s 'Browser Wars'

- 1996: 80% of web users were using Netscape Navigator

- Microsoft felt threatened by the web and introduced
  Internet Explorer to compete with Netscape

- Netscape and Microsoft raced to introduce new features,
  like:

  - JavaScript (by Netscape in 1995, at first called
    'Mocha')
  - XMLHttpRequest (by Microsoft in 1998)
  - (both of these are technologies leveraged by the AJAX
    technique)

- Microsoft too big for Netscape to fight alone, so
  Netscape teamed-up with Sun Microsystems

  - 'Mocha' becomes 'JavaScript' to tap into the hype
    around Java

- Sun and Netscape pushed for the standardization of
  JavaScript to prevent Microsoft from getting control
  over the future of the language

- By the start of the 2000s, around 90% of web users were
  browsing on Internet Explorer

- Microsoft dealt with lawsuits around their monopolistic
  practices

### Web accessibility from the 90s to today

- Disability justice activists in the U.S. successfully
  lobby for legislation around web accessibility: Section
  508 becomes law in 1998

  - Similar regulation is made in Canada in 2011

- WCAG 1.0 (web content accessibility guidelines)
  published in 1999

  - one recommendation said that web developers should use
    HTML and CSS – and to do so according to the standards

  - this worried Macromedia (and later Adobe), the
    developers of Flash

- Many developers shifted focus to HTML, CSS and JS (and
  away from Flash)

  - while other options for creating web applications that
    were not tied to the "start-stop-start-stop" pattern
    of interaction on the web – like iframes or Flash –
    AJAX becomes the most popular

- WCAG 2.0 in 2008 no longer advises on which tech stack
  to use, instead the recommendations are about _how_ to
  make designs accessible regardless of stack

  - still, it seems like HTML5 and CSS3 have ultimately
    defeated Flash (likely also because Apple decided not
    to support Flash on iOS)

  - ARIA (Accessible Rich Internet Applications) is
    developed as a technology to complement
    standards-compliant HTML, CSS and JS

- The rapid growth of the mobile web posed (and poses) new
  challenges for web developers

- Also in 2008, the Mobile Web Best Practices (MWBP)
  guidelines are published

  - many of its recommendations match up directly with
    WCAG 2.0 recommendations

  - Example: web experiences should be accessible across a
    wide range of devices, like destkop, mobile, TV, or
    screenreaders and other assistive technologies

  - Example: providing text alternative to non-text
    content, such as captions for videos, which benefits
    blind people but also users in public spaces (like a
    loud street, or a quiet library)

### Take-aways

- A wide variety of people will be using our web apps, in
  a variety of different contexts, and it's therefore
  important to make our apps as accessible as possible

- New tech doesn't become popular (just) because it's
  'better,' but as a result of complex human practices and
  negotiations – like corporate interests, laws and
  regulations, or activism

  - The more aware of this we are, the likelier we are to
    influence the direction of technical developments, the
    likelier we are to change the parts of JS that annoy
    us ;)

## So what is AJAX, then?

Essentially, it's a technique that allows web developers
to fetch data from a server asynchronously – that is,
without requiring that the user make new HTTP(S) requests
via the browser.

To make this possible, AJAX (commonly) leverages the
following core technologies:

- HTML and CSS
- the Document Object Model (DOM)
- XMLHttpRequest object or, more recently, the Fetch API
- JSON
- JavaScript

See the files in [/ajax-get-example](https://github.com/hora/lhl-w4d3/tree/master/ajax-get-example) for a demo. To
serve the demo files, you'll need the Nodejs `http-server`
package.

> Install using `npm install http-server -g`

> Browse to the `/ajax-get-example` directory in Vagrant
> (after downloading the code)

> Run http-server using `http-server .`



## References and further reading

### Web history

- [A brief history of JavaScript](https://medium.com/@benastontweet/lesson-1a-the-history-of-javascript-8c1ce3bffb17) by Ben Aston

- [A brief history of Ajax](http://www.aaronsw.com/weblog/ajaxhistory) by Aaron Swartz

- [Ajax: A new approach to web applications](https://pdfs.semanticscholar.org/c440/ae765ff19ddd3deda24a92ac39cef9570f1e.pdf) by Jesse
  James Garret

- [The browser wars](https://en.wikipedia.org/wiki/Browser_wars) on Wikipedia

- [Chapter 3 in 'Restricted access: Media, disability, and
  the politics of participation'](https://drive.google.com/open?id=1MbngEXM2MQqkdGIC_T7_FxzEyKNv3kpY) by Elizabeth Elcessor

### Accessibility resources

- [What is accessibility?](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility) article on MDN

- [HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) on MDN

- [CSS and JavaScript accessibility best practices](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript) on MDN

### AJAX resources

- [jQuery AJAX documentation](https://api.jquery.com/jquery.ajax/)

- [Accessibility of AJAX applications](https://webaim.org/techniques/ajax/) on WebAIM

- [Making Ajax and related technologies accessible](https://www.w3.org/WAI/standards-guidelines/aria/#making-ajax-and-related-technologies-accessible) on W3C

- [Invisible content for screen readers](https://webaim.org/techniques/css/invisiblecontent/) on WebAIM

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) on MDN (a more powerful and newer way for fetching resources than `XMLHttpRequest`)

