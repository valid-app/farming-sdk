"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockERC20 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const MockERC20_json_1 = __importDefault(require("./MockERC20.json"));
class MockERC20 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, MockERC20_json_1.default.abi, MockERC20_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.symbol, params.name, eth_wallet_1.Utils.toString(params.initialSupply), eth_wallet_1.Utils.toString(params.decimals)]);
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
        let decimals_call = async () => {
            let result = await this.call('decimals');
            return new eth_wallet_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let name_call = async () => {
            let result = await this.call('name');
            return result;
        };
        this.name = name_call;
        let symbol_call = async () => {
            let result = await this.call('symbol');
            return result;
        };
        this.symbol = symbol_call;
        let totalSupply_call = async () => {
            let result = await this.call('totalSupply');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
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
        let mintParams = (params) => [params.account, eth_wallet_1.Utils.toString(params.value)];
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
exports.MockERC20 = MockERC20;
