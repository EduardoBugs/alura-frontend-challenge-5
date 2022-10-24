const { productAPI } = require('../api'),
      { wrapAsync, auth } = require('../infra')

module.exports = app => {

    app.route('/produtos')
        .get(wrapAsync(productAPI.list));

    app.route('/produtos/upload')
        .post(auth, app.get('upload').single('imageFile'), wrapAsync(productAPI.addUpload))        

    app.route('/produtos/:productId')
        .post(auth, wrapAsync(productAPI.add))
        .delete(auth, wrapAsync(productAPI.remove))
        .get(wrapAsync(productAPI.findById));
     
};