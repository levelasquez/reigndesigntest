import Mongoose from 'mongoose'

const storySchema = Mongoose.Schema({
  story_id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
})

export default Mongoose.model('Story', storySchema)
