
import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: {type: String, require: true},
  metaData: {type: String, require: true},
  value: {type: String, require: true},
  cover: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});

const PostModel = model("Post", PostSchema);

export default PostModel