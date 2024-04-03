const { BusinessService } = require('../services');

const businessServiceCRUD = new BusinessService();

const getBusinessListViaBusinesses = async (_, res) => {
  const businesses = await businessServiceCRUD.getBusinessListViaBusinesses();
  return res.send(businesses);
};

const getBusinessListViaUsers = async (_, res) => {
  const businesses = await businessServiceCRUD.getBusinessListViaUsers();
  return res.send(businesses);
};

module.exports = {
  getBusinessListViaBusinesses,
  getBusinessListViaUsers,
};
