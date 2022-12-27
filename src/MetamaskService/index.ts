import Web3 from 'web3';

interface TransferProps {
    from: string;
    to: string;
    quantity: any;
}

export async function getMetamaskProvider() {

    if(!window.ethereum) throw new Error("Metamask not found");

    const web3 = new Web3(window.ethereum);

    const accounts = await web3.eth.requestAccounts();
    console.log(accounts)

    if(!accounts || !accounts.length) throw new Error('Permission required!')

    return web3;
    
}

export async function getBalance(address : string) {
    const web3 = await getMetamaskProvider();
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance)

    
}

export async function transfer({from, to, quantity} : TransferProps) {
    const web3 = await getMetamaskProvider();
    const value = web3.utils.toWei(quantity);

    const nonce = await web3.eth.getTransactionCount(from, "latest")
    const transaction = {
        from,
        to,
        value,
        gas: 21000,
        nonce
    }

    const tx = await web3.eth.sendTransaction(transaction);
    
    return tx.transactionHash;


}