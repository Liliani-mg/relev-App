const Router =require( "express")
const cloudinary = require ("cloudinary");
const multer = require ("multer");

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_APY_KEY, CLOUDINARY_APY_SECRET } =
  process.env || {
    CLOUDINARY_CLOUD_NAME: "dxsvkn4eo",
    CLOUDINARY_APY_KEY: '915912164296572',
    CLOUDINARY_APY_SECRET: "WQ5ITYoLhlcid9G72NGqeNtALIs",
  };

const uploader = multer({ dest: "uploads/" });

const imageRoutes = Router();

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_APY_KEY,
  api_secret: CLOUDINARY_APY_SECRET,
});

module.exports = imageRoutes.post("/", uploader.single("image"), async (req, res) => {
  console.log(req.file);
  if (!req.file) {
    return res.status(400).json({ message: "ok" });
  }
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log("==========================================", { url: result.url })
    res.status(201).json({ url: result.url });
  } catch (error) {
    res.status(404).send("no responde");
  }
});

