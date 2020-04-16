const { log } = require('../modules/logger')
const { Article, validate } = require('../models/article')
const _ = require('lodash')

module.exports = {
  /**
   * Get articles
   */
  getArticles: async (req, res) => {
    // Get articles
    const articles = await Article.find()

    // If no articles exist, return 404 error to the client
    if (Array.isArray(articles) && !articles.length) {
      return res.status(404).send('no articles found')
    }

    // Optionally sort articles by query paramater
    const sortBy = req.query.sortBy
    if (sortBy) articles.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)

    // Return articles to the client
    res.send(articles)
  },

  /**
   * Create an article
   */
  createArticle: async (req, res) => {
    // Validate article
    const { error } = validate.create(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Create article
    let article = new Article(_.pick(req.body, ['title', 'slug', 'content', 'author', 'status', 'tags', 'date']))

    // Add article to the database
    article = await article.save()

    log.info('Article created.', _.pick(article, ['_doc', 'level', 'message', 'timestamp']))

    // Return article to the client
    res.send(article)
  },

  /**
   * Get an article
   */
  getArticle: async (req, res) => {
    // Get article
    const article = await Article.findOne({
      _id: req.params.id
    })

    // If article does not exist, 404 error
    if (!article) res.status(404).send('"id" was not found')

    // Return article to the client
    res.send(article)
  },

  /**
   * Update an article
   */
  updateArticle: async (req, res) => {
    // Validate article
    const { error } = validate.update(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    // Update article in database with request body keys if they exist
    const requestBody = {}
    if (req.body.title) requestBody.title = req.body.title
    if (req.body.slug) requestBody.slug = req.body.slug
    if (req.body.content) requestBody.content = req.body.content
    if (req.body.author) requestBody.author = req.body.author
    if (req.body.status) requestBody.status = req.body.status
    if (req.body.tags) requestBody.tags = req.body.tags
    if (req.body.date) requestBody.date = req.body.date

    // Update the article in the database, and get the updated article
    const article = await Article.findByIdAndUpdate(req.params.id, requestBody, { new: true })

    // If article does not exist, return 404 error to the client
    if (!article) res.status(404).send('"id" was not found')

    log.info('Article updated.', _.pick(article, ['_doc', 'level', 'message', 'timestamp']))

    // Return updated article to client
    res.send(article)
  },

  /**
   * Delete an article
   */
  deleteArticle: async (req, res) => {
    // Remove article from database, if it exists
    const article = await Article.findByIdAndRemove(req.params.id)

    // If article does not exist, return 404 error to the client
    if (!article) res.status(404).send('"id" was not found')

    log.info('Article removed.', _.pick(article, ['_doc', 'level', 'message', 'timestamp']))

    // Return deleted article to client
    res.send(article)
  }
}
