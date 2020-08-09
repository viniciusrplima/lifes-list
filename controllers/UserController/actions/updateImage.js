const User = require('../../../models/User');
const aws = require('aws-sdk');

const s3 = new aws.S3();

async function updateImage(req, res) {
  const {key: photoKey, location: photoUrl} = req.file;
  const userId = req.user._id;

  const product = await User.findById(userId).select({photoKey:1, photoUrl:1});

  if(product.photoKey != null && product.photoKey != undefined) {
    s3.deleteObject({
      Bucket: 'lifes-list', 
      Key: product.photoKey
    }, (err, data) => {
      if(err) console.log(err);
    })
  }

  await User.findByIdAndUpdate({_id:userId}, {
    photoKey, 
    photoUrl
  });

  res.send("Foto Atualizada");
}

module.exports = updateImage;
