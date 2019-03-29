# Robots

The `/src/robots.txt` file is configured to exclude all robots from the entire server. This asks search engines not to crawl the project _(but doesn't guarantee that they won't)_.

Before deployment, update `robots.txt` according to however you would like search engines to treat your project.

More more at [robotstxt.org](http://www.robotstxt.org/robotstxt.html).

## To exclude all robots from the entire server

```bash
User-agent: *
Disallow: /
```

## To allow all robots complete access

```bash
User-agent: *
Disallow:
```

## To exclude all robots from part of the server

```bash
User-agent: *
Disallow: /cgi-bin/
Disallow: /tmp/
Disallow: /junk/
```

## To exclude a single robot

```bash
User-agent: BadBot
Disallow: /
```

## To allow a single robot

```bash
User-agent: Google
Disallow:

User-agent: *
Disallow: /
```

## To exclude all files except one

This is currently a bit awkward, as there is no "Allow" field. The easy way is to put all files to be disallowed into a separate directory, say "stuff", and leave the one file in the level above this directory:

```bash
User-agent: *
Disallow: /~joe/stuff/
```

Alternatively you can explicitly disallow all disallowed pages:

```bash
User-agent: *
Disallow: /~joe/junk.html
Disallow: /~joe/foo.html
Disallow: /~joe/bar.html
```