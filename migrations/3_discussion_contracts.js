const { deployProxy } = require("@openzeppelin/truffle-upgrades");
const Discussions = artifacts.require("NFTCommentsUpgradeable");
const CollectionDiscussions = artifacts.require(
  "NFTCollectionCommentsUpgradeable"
);

module.exports = async function (deployer) {
  const discussions = await deployProxy(
    Discussions,
    ["0xfc9291929b48139029ecdb6d044ecc4814a61bdb"],
    { deployer, initializer: "init" }
  );
  console.log("Deployed Discussions", discussions.address);

  const collectionDiscussions = await deployProxy(
    CollectionDiscussions,
    ["0xfc9291929b48139029ecdb6d044ecc4814a61bdb"],
    { deployer, initializer: "init" }
  );
  console.log("Deployed Collection Discussions", collectionDiscussions.address);

  console.log("Deployed Contracts \n");
  console.log("Discussions", discussions.address);
  console.log("Collection Discussions", collectionDiscussions.address);
};
