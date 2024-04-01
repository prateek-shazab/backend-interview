const { SetupService } = require('../services');

const setupServiceCRUD = new SetupService();

const setupDB = async (_, res) => {
  const data = await setupServiceCRUD.setupDB();
  return res.send(data);
};

module.exports = {
  setupDB,
};
