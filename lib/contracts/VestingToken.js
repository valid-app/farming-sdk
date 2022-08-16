"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VestingToken = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const VestingToken_json_1 = __importDefault(require("./VestingToken.json"));
class VestingToken extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, VestingToken_json_1.default.abi, VestingToken_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.name, params.symbol, eth_wallet_1.Utils.toString(params.startReleaseBlock), eth_wallet_1.Utils.toString(params.endReleaseBlock), eth_wallet_1.Utils.toString(params.cap), eth_wallet_1.Utils.toString(params.vestingRatio)]);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    parseLockEvent(receipt) {
        return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
    }
    decodeLockEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            direct: new eth_wallet_1.BigNumber(result.direct),
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event) {
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseRedeemEvent(receipt) {
        return this.parseEvents(receipt, "Redeem").map(e => this.decodeRedeemEvent(e));
    }
    decodeRedeemEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    assign() {
        let allowanceParams = (params) => [params.owner, params.spender];
        let allowance_call = async (params) => {
            let result = await this.call('allowance', allowanceParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.allowance = allowance_call;
        let balanceOf_call = async (account) => {
            let result = await this.call('balanceOf', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let canUnlockAmount_call = async (account) => {
            let result = await this.call('canUnlockAmount', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.canUnlockAmount = canUnlockAmount_call;
        let cap_call = async () => {
            let result = await this.call('cap');
            return new eth_wallet_1.BigNumber(result);
        };
        this.cap = cap_call;
        let decimals_call = async () => {
            let result = await this.call('decimals');
            return new eth_wallet_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let endReleaseBlock_call = async () => {
            let result = await this.call('endReleaseBlock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.endReleaseBlock = endReleaseBlock_call;
        let farming_call = async () => {
            let result = await this.call('farming');
            return result;
        };
        this.farming = farming_call;
        let lastUnlockBlock_call = async (account) => {
            let result = await this.call('lastUnlockBlock', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.lastUnlockBlock = lastUnlockBlock_call;
        let lockOf_call = async (account) => {
            let result = await this.call('lockOf', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.lockOf = lockOf_call;
        let name_call = async () => {
            let result = await this.call('name');
            return result;
        };
        this.name = name_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let redeeming_call = async () => {
            let result = await this.call('redeeming');
            return result;
        };
        this.redeeming = redeeming_call;
        let startReleaseBlock_call = async () => {
            let result = await this.call('startReleaseBlock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.startReleaseBlock = startReleaseBlock_call;
        let symbol_call = async () => {
            let result = await this.call('symbol');
            return result;
        };
        this.symbol = symbol_call;
        let totalAvailableAmount_call = async (account) => {
            let result = await this.call('totalAvailableAmount', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalAvailableAmount = totalAvailableAmount_call;
        let totalBalanceOf_call = async (account) => {
            let result = await this.call('totalBalanceOf', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalBalanceOf = totalBalanceOf_call;
        let totalLock_call = async () => {
            let result = await this.call('totalLock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalLock = totalLock_call;
        let totalSupply_call = async () => {
            let result = await this.call('totalSupply');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let unlockedSupply_call = async () => {
            let result = await this.call('unlockedSupply');
            return new eth_wallet_1.BigNumber(result);
        };
        this.unlockedSupply = unlockedSupply_call;
        let vestingRatio_call = async () => {
            let result = await this.call('vestingRatio');
            return new eth_wallet_1.BigNumber(result);
        };
        this.vestingRatio = vestingRatio_call;
        let approveParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.amount)];
        let approve_send = async (params) => {
            let result = await this.send('approve', approveParams(params));
            return result;
        };
        let approve_call = async (params) => {
            let result = await this.call('approve', approveParams(params));
            return result;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let decreaseAllowanceParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params) => {
            let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params));
            return result;
        };
        let decreaseAllowance_call = async (params) => {
            let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params));
            return result;
        };
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call: decreaseAllowance_call
        });
        let increaseAllowanceParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params) => {
            let result = await this.send('increaseAllowance', increaseAllowanceParams(params));
            return result;
        };
        let increaseAllowance_call = async (params) => {
            let result = await this.call('increaseAllowance', increaseAllowanceParams(params));
            return result;
        };
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call: increaseAllowance_call
        });
        let lockParams = (params) => [params.account, eth_wallet_1.Utils.toString(params.amount)];
        let lock_send = async (params) => {
            let result = await this.send('lock', lockParams(params));
            return result;
        };
        let lock_call = async (params) => {
            let result = await this.call('lock', lockParams(params));
            return;
        };
        this.lock = Object.assign(lock_send, {
            call: lock_call
        });
        let mintParams = (params) => [params.to, eth_wallet_1.Utils.toString(params.amount)];
        let mint_send = async (params) => {
            let result = await this.send('mint', mintParams(params));
            return result;
        };
        let mint_call = async (params) => {
            let result = await this.call('mint', mintParams(params));
            return;
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
        });
        let redeemParams = (params) => [params.account, eth_wallet_1.Utils.toString(params.amount)];
        let redeem_send = async (params) => {
            let result = await this.send('redeem', redeemParams(params));
            return result;
        };
        let redeem_call = async (params) => {
            let result = await this.call('redeem', redeemParams(params));
            return;
        };
        this.redeem = Object.assign(redeem_send, {
            call: redeem_call
        });
        let renounceOwnership_send = async () => {
            let result = await this.send('renounceOwnership');
            return result;
        };
        let renounceOwnership_call = async () => {
            let result = await this.call('renounceOwnership');
            return;
        };
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call: renounceOwnership_call
        });
        let setFarming_send = async (farming) => {
            let result = await this.send('setFarming', [farming]);
            return result;
        };
        let setFarming_call = async (farming) => {
            let result = await this.call('setFarming', [farming]);
            return;
        };
        this.setFarming = Object.assign(setFarming_send, {
            call: setFarming_call
        });
        let setRedeeming_send = async (redeeming) => {
            let result = await this.send('setRedeeming', [redeeming]);
            return result;
        };
        let setRedeeming_call = async (redeeming) => {
            let result = await this.call('setRedeeming', [redeeming]);
            return;
        };
        this.setRedeeming = Object.assign(setRedeeming_send, {
            call: setRedeeming_call
        });
        let transferParams = (params) => [params.recipient, eth_wallet_1.Utils.toString(params.amount)];
        let transfer_send = async (params) => {
            let result = await this.send('transfer', transferParams(params));
            return result;
        };
        let transfer_call = async (params) => {
            let result = await this.call('transfer', transferParams(params));
            return result;
        };
        this.transfer = Object.assign(transfer_send, {
            call: transfer_call
        });
        let transferAll_send = async (to) => {
            let result = await this.send('transferAll', [to]);
            return result;
        };
        let transferAll_call = async (to) => {
            let result = await this.call('transferAll', [to]);
            return;
        };
        this.transferAll = Object.assign(transferAll_send, {
            call: transferAll_call
        });
        let transferFromParams = (params) => [params.sender, params.recipient, eth_wallet_1.Utils.toString(params.amount)];
        let transferFrom_send = async (params) => {
            let result = await this.send('transferFrom', transferFromParams(params));
            return result;
        };
        let transferFrom_call = async (params) => {
            let result = await this.call('transferFrom', transferFromParams(params));
            return result;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
        let transferOwnership_send = async (newOwner) => {
            let result = await this.send('transferOwnership', [newOwner]);
            return result;
        };
        let transferOwnership_call = async (newOwner) => {
            let result = await this.call('transferOwnership', [newOwner]);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let unlock_send = async () => {
            let result = await this.send('unlock');
            return result;
        };
        let unlock_call = async () => {
            let result = await this.call('unlock');
            return;
        };
        this.unlock = Object.assign(unlock_send, {
            call: unlock_call
        });
    }
}
exports.VestingToken = VestingToken;
