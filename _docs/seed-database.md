# Seed database with Mongoose

```javascript
const {mongoose, db} = require('./connection');
const ObjectId = mongoose.ObjectId;
const Category = mongoose.model('Category');
const Article  = mongoose.model('Article');

const techId = ObjectId()

const data = {
  categories: [{_id: techId, name: 'Tech'}],
  articles: [{title: 'Blah blah bitcoin', category: techId}]
}

Promise.all([
// Step #1, delete ALL from each collection
  Category.remove({}),
  Article.remove({}),
])
.then(() => {
  return Promise.all([
    Category.insert(data.categories),
    Article.insert(data.articles),
  ])
})
```

