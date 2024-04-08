const { expect } = require("chai");
const {ethers} = require("hardhat");
const {describe} = require("mocha");


describe("ChatApp contract",function(){
    it("Should create account if not exists",async function(){
        const [owner, otherAccount] = await ethers.getSigners();
        const ChatApp = await ethers.getContractFactory("ChatApp");
        const chatApp = await ChatApp.deploy();
        await chatApp.waitForDeployment();
        console.log("ChatApp deployed to:",chatApp.address);

        await chatApp.createAccount("Ayush");
        expect(await chatApp.getUsername(owner)).to.equal("Ayush");
    })
});