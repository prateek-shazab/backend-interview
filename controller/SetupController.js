const { SetupService } = require('../services');

const setupServiceCRUD = new SetupService();
//
const setupDB = async (req, res) => {
  const data = await setupServiceCRUD.setupDB(req.query);
  return res.send(data);
};

module.exports = {
  setupDB,
};
