"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redeeming = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Redeeming_json_1 = __importDefault(require("./Redeeming.json"));
class Redeeming extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Redeeming_json_1.default.abi, Redeeming_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.farming, params.vesting, eth_wallet_1.Utils.toString(params.rewardPerVesting), params.reward, eth_wallet_1.Utils.toString(params.convertingRatio), params.admin]);
    }
    parseReclaimRemainingRewardEvent(receipt) {
        return this.parseEvents(receipt, "ReclaimRemainingReward").map(e => this.decodeReclaimRemainingRewardEvent(e));
    }
    decodeReclaimRemainingRewardEvent(event) {
        let result = event.data;
        return {
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
            token: result.token,
            vesting: new eth_wallet_1.BigNumber(result.vesting),
            reward: new eth_wallet_1.BigNumber(result.reward),
            _event: event
        };
    }
    assign() {
        let admin_call = async () => {
            let result = await this.call('admin');
            return result;
        };
        this.admin = admin_call;
        let availableRewardAmount_call = async (account) => {
            let result = await this.call('availableRewardAmount', [account]);
            return {
                tokens: result.tokens,
                availableReward: result.availableReward.map(e => new eth_wallet_1.BigNumber(e))
            };
        };
        this.availableRewardAmount = availableRewardAmount_call;
        let convertingRatioParams = (params) => [eth_wallet_1.Utils.toString(params.param1), eth_wallet_1.Utils.toString(params.param2)];
        let convertingRatio_call = async (params) => {
            let result = await this.call('convertingRatio', convertingRatioParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.convertingRatio = convertingRatio_call;
        let farming_call = async () => {
            let result = await this.call('farming');
            return result;
        };
        this.farming = farming_call;
        let rewardParams = (params) => [eth_wallet_1.Utils.toString(params.param1), eth_wallet_1.Utils.toString(params.param2)];
        let reward_call = async (params) => {
            let result = await this.call('reward', rewardParams(params));
            return result;
        };
        this.reward = reward_call;
        let rewardLength_call = async (vestingIdx) => {
            let result = await this.call('rewardLength', [eth_wallet_1.Utils.toString(vestingIdx)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.rewardLength = rewardLength_call;
        let vesting_call = async (param1) => {
            let result = await this.call('vesting', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.vesting = vesting_call;
        let vestingLength_call = async () => {
            let result = await this.call('vestingLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.vestingLength = vestingLength_call;
        let harvestAndRedeemParams = (params) => [params.account, eth_wallet_1.Utils.toString(params.pid)];
        let harvestAndRedeem_send = async (params) => {
            let result = await this.send('harvestAndRedeem', harvestAndRedeemParams(params));
            return result;
        };
        let harvestAndRedeem_call = async (params) => {
            let result = await this.call('harvestAndRedeem', harvestAndRedeemParams(params));
            return;
        };
        this.harvestAndRedeem = Object.assign(harvestAndRedeem_send, {
            call: harvestAndRedeem_call
        });
        let putFundParams = (params) => [params.token, params.from, eth_wallet_1.Utils.toString(params.amount)];
        let putFund_send = async (params) => {
            let result = await this.send('putFund', putFundParams(params));
            return result;
        };
        let putFund_call = async (params) => {
            let result = await this.call('putFund', putFundParams(params));
            return;
        };
        this.putFund = Object.assign(putFund_send, {
            call: putFund_call
        });
        let reclaimRemainingReward_send = async () => {
            let result = await this.send('reclaimRemainingReward');
            return result;
        };
        let reclaimRemainingReward_call = async () => {
            let result = await this.call('reclaimRemainingReward');
            return;
        };
        this.reclaimRemainingReward = Object.assign(reclaimRemainingReward_send, {
            call: reclaimRemainingReward_call
        });
        let redeemParams = (params) => [params.account, eth_wallet_1.Utils.toString(params.vestingIdx)];
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
        let redeemAllAvailable_send = async (account) => {
            let result = await this.send('redeemAllAvailable', [account]);
            return result;
        };
        let redeemAllAvailable_call = async (account) => {
            let result = await this.call('redeemAllAvailable', [account]);
            return;
        };
        this.redeemAllAvailable = Object.assign(redeemAllAvailable_send, {
            call: redeemAllAvailable_call
        });
    }
}
exports.Redeeming = Redeeming;
