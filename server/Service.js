const SecureDataModel = require("./Model")
// const puppeteer = require("puppeteer");

class Service {

  async getSecureData(req, res) {
    try {
      if (req.query.page && req.query.limit) {
        SecureDataModel
          .paginate({}, {page: req.query.page, limit: req.query.limit, sort:{ _id: -1 }})
          .then(data => {
            res.status(200).json(data)
          })
          .catch(() => {
            res.status(400).json({message: "Error"})
          })
      } else {
        SecureDataModel.find()
          .sort({_id: -1})
          .then(data => {
            res.status(200).json(data)
          })
          .catch(() => {
            res.status(400).json({message: "Error"})
          })
      }
    } catch {
      res.status(500).json([{message: "Error"}])
    }
  };

  async saveSecureData(req, res) {
    const data = new SecureDataModel(req.body);
    try {
      const insertedData = await data.save();
      res.status(201).json(insertedData)
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  };

  async deleteHentaiData(req, res) {
    try {
      const deleteHentaiDatas = await SecureDataModel.deleteOne({_id: req.params.id});
      res.status(200).json(deleteHentaiDatas)

    } catch (error) {
      res.status(400).json({message: error.message})
    }
  };

  async getVideoByID(req, res) {
    try {
      // const findByIdResponce = SecureDataModel.find();
      await puppeteer.launch({ headless: false });

      // const scrapVideoLink = async () => {
        

      //   // await browser.newPage().goto("https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD");
        
      //   // const grabTechnologies = await page.evaluate(() => {
      //   //   const techTags = document.querySelector(".mw-wiki-logo").title
      //   //   return techTags;
      //   // })
  
      //   // await browser.close();
      //   return grabTechnologies
      // }
  
      // const link = scrapVideoLink();
  
      // return res.status(200).json({...findByIdResponce, ...link})

      // return res.status(200).json(link)
      res.status(200).json({message: "hello world!!!"})
  
    } catch {
      return res.status(400).json({message: "Error"})
    }
  }










  async searchDatas(req, res) {
    try {
      const {search} = req.params;
      await SecureDataModel.find({$text: {$search: `${search}`}})
        .limit(35)
        .then(data => {
          res.status(200).json(data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }
}

module.exports = new Service();
