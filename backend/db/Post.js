
import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: String,
  metaData: String,
  value: String,
  cover: String
}, {
    timestamps: true
});

const PostModel = model("Post", PostSchema);

export default PostModel