---
path: "/projects/stedelijk-museum"
date: "2018-08-08"
title: "Stedelijk Museum"
subtitle: "Amsterdam modern art museum website"
image: "./bg.jpg"
draft: false
---

The Stedelijk Museum is a museum for modern art, contemporary art, and design located in Amsterdam. We at [Grrr](https://grrr.nl) were tasked with creating a new website for them that would be both user-friendly and a bold statement. The end result is an unusual but intuitive website that can be described as a form of web brutalism. Personally I really enjoyed working on this project in which I got to dabble with many new tools and techniques.

### My role
This was a big project for our team at Grrr and I was one of several developers to work on it. One of my main tasks was developing functionality (e.g. Image scaler, new datatypes) for the OctoberCMS back-end that weren’t supplied out of the box by the CMS. Another thing I spent quite some time on was setting up ElasticSearch - a really fast and powerful search engine for websites — and integrating it with the search functionality of the website. Teamwork was really important in this project as several features were built simultaneously. I contributed by reviewing others’ code as well as I could in the many pull requests of this assignment.

### Tech stack
For this project we needed a very scalable, secure and fast setup as the site draws a lot of visitors, especially around moments of publicity. OctoberCMS was our CMS of choice as this CMS is built on Laravel (PHP framework) which, in our opinion, would be a solid framework to build on. The site usually runs on two separate servers but when traffic is high new servers are automatically added to not reduce performance. Apart from the web servers we also used a CDN to host the site’s static assets, and we set up an ElasticSearch cloud instance for the search functionality.

### Conclusion
All in all this was a very educational experience for me in which I got to work with many different technologies. Although the stress levels were quite high towards the end of the project, the end result makes it totally worth it!

#### Tech specs:
- PHP7 / Laravel 5 / OctoberCMS
- ElasticSearch
- Javascript (ES6) / SASS / Twig

[https://stedelijk.nl](https://stedelijk.nl)
