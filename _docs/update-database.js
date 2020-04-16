/**
 * Update an Article, boilerplate
 *
async function updateArticle(id) {
  const article = await Article.findByIdAndUpdate(id, {
    $set: {
      author: 'Jason',
      isPublished: false
    }
  }, { new: true }) // Update this item by id

  return article
}
 */

/**
 * Approach: Query first
 *
 * Use if you're receiving data from the client,
 * and you want to validate the data or check something in the database,
 * before updating the database
 *
 * const article = await Article.findById()
 * if (!article) return
 *
 * // Then modify its properties
 * article.isPublished = true
 * article.author = 'Another author'
 *
 * article.save()
 *
 * Or update multiple properties
 *
 * article.set({
 *   isPublished: true,
 *   author: 'Another author'
 * })
 *
 * const result = await article.save()
 * return result
 */

/**
 * Approach: Update first
 *
 * Update directly, and (optionally) get the updated document
 *
 * Update a single article by ID:
 *
 * const article = await Article.update({ _id: id }, {
 *   $set: {
 *     author: 'Mosh',
 *     isPublished: false
 *   }
 * })
 *
 * Update all items (multiple) that are not published:
 *
 * const articles = await Article.update({ isPublished: false }, {
 *   $set: {
 *     author: 'Mosh',
 *     isPublished: false
 *   }
 * })
 */

/**
 * MongoDB Update Operators
 *
 * $currentDate, $inc, $min, $max, $mul, $rename, $set, $setOnInsert, $unset
 */
