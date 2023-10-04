import { ethers } from 'hardhat';

async function main() {
	const helloworldContractFactory = await ethers.getContractFactory("HelloWorld");
	const helloworldContract = await helloworldContractFactory.deploy();

	await helloworldContract.waitForDeployment();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
})