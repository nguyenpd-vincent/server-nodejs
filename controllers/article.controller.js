const models = require('./../models/index');

getAllArticle = async (req, res)=>{
    
    const articles = await models.article.findAll();
    res.status(200).json({
        'message':'All article',
        articles
    })
}

module.exports = {
    getAllArticle
}