# Remove item\(s\) from the database

## Delete one

```javascript
async function removeArticle(id) {
  const one = await Article.deleteOne({ _id: id })
  return article
}
```

## Delete one and return the deleted Article, or null if the id doesn't exist

```javascript
async function removeArticle(id) {
  const article = await Article.findByIdAndRemove(id)
  return article
}
```

## Delete the first of multiple

```javascript
async function removeArticle(id) {
  const firstOfMany = await Article.deleteOne({ isPublished: false })
  return article
}
```

## Delete multiple

```javascript
async function removeArticle(id) {
  const many = await Article.deleteMany({ isPublished: false })
  return article
}
```

