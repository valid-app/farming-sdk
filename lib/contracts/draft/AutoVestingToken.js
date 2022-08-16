"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoVestingToken = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const AutoVestingToken_json_1 = __importDefault(require("./AutoVestingToken.json"));
class AutoVestingToken extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, AutoVestingToken_json_1.default.abi, AutoVestingToken_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.name, params.symbol, eth_wallet_1.Utils.toString(params.start), eth_wallet_1.Utils.toString(params.end), eth_wallet_1.Utils.toString(params.cap), params.farming, params.redeeming]);
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
            amount: new eth_wallet_1.BigNumber(result.amount),
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
        let duration_call = async () => {
            let result = await this.call('duration');
            return new eth_wallet_1.BigNumber(result);
        };
        this.duration = duration_call;
        let end_call = async () => {
            let result = await this.call('end');
            return new eth_wallet_1.BigNumber(result);
        };
        this.end = end_call;
        let farming_call = async () => {
            let result = await this.call('farming');
            return result;
        };
        this.farming = farming_call;
        let locked_call = async (account) => {
            let result = await this.call('locked', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.locked = locked_call;
        let name_call = async () => {
            let result = await this.call('name');
            return result;
        };
        this.name = name_call;
        let redeeming_call = async () => {
            let result = await this.call('redeeming');
            return result;
        };
        this.redeeming = redeeming_call;
        let start_call = async () => {
            let result = await this.call('start');
            return new eth_wallet_1.BigNumber(result);
        };
        this.start = start_call;
        let symbol_call = async () => {
            let result = await this.call('symbol');
            return result;
        };
        this.symbol = symbol_call;
        let totalLocked_call = async () => {
            let result = await this.call('totalLocked');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalLocked = totalLocked_call;
        let totalSupply_call = async () => {
            let result = await this.call('totalSupply');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let totalVestable_call = async () => {
            let result = await this.call('totalVestable');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalVestable = totalVestable_call;
        let vestable_call = async (param1) => {
            let result = await this.call('vestable', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.vestable = vestable_call;
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
        let mintParams = (params) => [params.account, eth_wallet_1.Utils.toString(params.amount)];
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
    }
}
exports.AutoVestingToken = AutoVestingToken;
