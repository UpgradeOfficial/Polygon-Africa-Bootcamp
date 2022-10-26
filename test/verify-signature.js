const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("VerifySignature", function(){
    it("Check Signature", async function(){
        const accounts = await ethers.getSigners()
        const VerifySignature = await ethers.getContractFactory("VerifySignature");
        const contract = await VerifySignature.deploy()
        await contract.deployed()
        // console.log(accounts[1].address)

        // const PRIVATE_KEY = "0x.."
        // const signer = new ethers.Wallet(PRIVATE_KEY)
        const signer = accounts[0]
        const to = accounts[1].address
        const amount = 999
        const message = "hello"
        const nounce = 123

              
        const hash = await contract.getMessageHash(to, amount, message, nounce);
        const sig = await signer.signMessage(ethers.utils.arrayify(hash))


        const ethHash = await contract.getEthSignedMessageHash(hash)  
        const signerFromAddress = await contract.recoverSigner(ethHash, sig)
        console.log("signer:          ", signer.address)
        console.log("recovered signer:          ", signerFromAddress, to, signerFromAddress == signer.address)


        // address _signer,
        // address _to,
        // uint _amount,
        // string memory _message,
        // uint _nonce,
        // bytes memory signature

        expect(await contract.verify(signer.address, to, amount, message, nounce, sig)).to.equal(true);
        expect(await contract.verify(signer.address, to, amount + 1, message, nounce, sig)).to.equal(false);
    })


})
