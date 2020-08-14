const models = require("./../models/index");


string_to_slus = async (str)=>{
    str = str.replace(/^\s+|\s+$/g, '')
    str = str.toLowerCase();
    // remove accents, swap 
    var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaaeeeeiiiioooouuuunc------";
    l = from.length;
    for(var i =0; i< l;i++){
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-") // collapse dashes
      .replace(/^-+/, "") // trim - from start of text
      .replace(/-+$/, ""); // trim - from end of text
      console.log(str)
    return str;
}

getList = async (req, res)=>{
    const categories = await models.category.findAll();
    console.log(categories);
    if(!categories){
        res.status(404).json({
            'messsage':' No found categories'
        })
    }
    res.status(200).json({
        'messsage': 'Get all categories',
        categories
    })
}


  

postAdd = async (req, res)=>{
    const {name, status, avatar} = req.body;
    const slug = string_to_slus(name);
    // const category = await models.category.create({
    //     name,
    //     status,
    //     slug: 'abc-dbe',
    //     avatar
    // });
    console.log(slug)
    res.status(200).json({
        messsage: 'create category success',
        // category
    })
}

module.exports = {
    getList,
}