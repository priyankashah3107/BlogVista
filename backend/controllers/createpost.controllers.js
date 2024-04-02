import multer from 'multer';

const uploadMiddleware = multer({ dest: 'uploads/' });

  const createPost = (req, res) => {
      res.json(req.files.file)
    // res.json("Hello Universe")
  }

  export default createPost