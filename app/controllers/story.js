import model from '../models'
import config from '../config'

const Story = {
  get: async (req, res) => {
    const stories = await model.find({ is_deleted: false }).sort({ created_at: 'desc' })

    res.render('index', { title: config.title, stories })
  },
  softDelete: async (req, res) => {
    const { id } = req.params

    await model.findOneAndUpdate({ story_id: id }, { is_deleted: true })

    res.redirect('/')
  },
}

export default Story
