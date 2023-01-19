const hre=require('hardhat');
async function main(){
    const RoboPunksNFT=await hre.ethers.getContractFactory("RoboPunksNFT");
    const roboPunksNFT = await RoboPunksNFT.deploy();
    await roboPunksNFT.deployed();
    console.log("RoboPunk deployed to:",roboPunksNFT.address);
}

main().then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})