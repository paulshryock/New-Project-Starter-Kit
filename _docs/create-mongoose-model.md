# Create a Mongoose model

```js
const Article = mongoose.model('Article', new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: String,
  tags: { type: Array, lowercase: true },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function() { return this.isPublished }
  }
}))
```

## Create related models

```js
const Author = mongoose.model('Author', mongoose.Schema({
  name    : String,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
}))

const Story  = mongoose.model('Story', mongoose.Schema({
  author : { type: Schema.Types.ObjectId, ref: 'Author' },
  title    : String
}))
```

### Give document a relation

```js
const bob = new Author({ name: 'Bob Smith' })

bob.save(function (err) {
  if (err) return handleError(err)

  // Bob now exists, so lets create a story
  const story = new Story({
    title: "Bob goes sledding",
    author: bob._id    // assign the _id from the our author Bob. This ID is created by default!
  })

  story.save(function (err) {
    if (err) return handleError(err);
    // Bob now has his story
  })
})

// In order to get the author information in the story results we use `populate()`, as shown below.
Story
  .findOne({ title: 'Bob goes sledding' })
  .populate('author') // This populates the author id with actual author information!
  .exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name)
    // prints "The author is Bob Smith"
})
```

## Schema types (fields)

> A schema can have an arbitrary number of fields — each one represents a field in the documents stored in MongoDB. An example schema showing many of the common field types and how they are declared is shown below.
> from [developer.mozilla.org][mozilla-express-mongoose]

```js
var schema = new Schema(
{
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } }
})
```

- **`ObjectId`**: Represents specific instances of a model in the database. For example, a book might use this to represent its author object. This will actually contain the unique ID (`_id`) for the specified object. We can use the `populate()` method to pull in the associated information when needed.
- **`Mixed`**: An arbitrary schema type.
- **`[]`**: An array of items. You can perform JavaScript array operations on these models (push, pop, unshift, etc.). The examples above show an array of objects without a specified type and an array of `String` objects, but you can have an array of any type of object.

## Mongoose SchemaType options

- `lowercase`: Boolean
- `uppercase`: Boolean
- `trim`: Boolean
- getter and setter Functions which return what you want:
  - `get: v => v + 1`
  - `set: v => v + 1`

## Mongoose Built-in validators:

- `required`: Boolean or Function that returns Boolean

### String validators

- `minlength`: Number
- `maxlength`: Number
- `match`: Regex
- `enum`: Array of valid Strings

### Number and Date Validators

- `min`: Number
- `max`: Number

### Custom sync validator:

- `validate: { validator: function(v) { return v } }`

#### Example

```js
{
  type: Array,
  validate: {
    validator: function(v) {
      return v && v.length > 0 // at least 1 array value
    },
    message: 'An article should have at least 1 tag'
  }
}
```

### Custom async validators:

#### Example

```js
{
  type: Array,
  validate: {
    validator: () => Promise.reject(new Error('Oops!')), // Promise.reject, Mongoose will use the given error
    validator: () => Promise.resolve(false), // If the promise resolves to `false`, Mongoose assumes the validator failed and creates an error with the given `message`.
    message: 'An article should have at least 1 tag'
  }
}
```

[mozilla-express-mongoose]: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose