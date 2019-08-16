# Content

- [Default Content Types](#default-content-types)
- [Add a Content Type](#add-a-content-type)
- [Markup and Styling](#markup-and-styling)

## Default Content Types

- page
- article
- project
- testimonial

## Add a Content Type

Easily create a new content type by running this command:

```bash
npm run create:content
```

This runs `node ./_scripts/addContentType.js`, which will prompt you for a few parameters, and then execute the following steps:

1. Add content folder: (`/src/${platform}/${typePlural}`)
2. Add content directory data file: (`/src/${platform}/${typePlural}/${typePlural}.11tydata.js`)
3. Add layout file: (`/src/_layouts/${platform}/${type}.liquid`)
4. Add content collection: (`.eleventy.js`)

## Markup and Styling

Each content post has the following `body` classes:

```html
<body class="{{ platform }} {{ contentType }} {{ contentType }}-{{ page.fileSlug }}">
...
</body>
```

So for example, a `site` `article` with a slug of `hello-world`, has the following `body` element markup:

```html
<body class="site article article-hello-world">
...
</body>
```

This way you can style all articles with `.article` or style a single article with `.article-hello-world`.

All content posts have their post content wrapped in a parent element (usually an `article`) with the `.post` class. To style an `article` post, you could use `.article .post`.

You can use `.post__header`, `.post__content`, and `.post__footer` to style sections inside the `.post`.