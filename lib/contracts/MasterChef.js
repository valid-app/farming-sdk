"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterChef = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const MasterChef_json_1 = __importDefault(require("./MasterChef.json"));
class MasterChef extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, MasterChef_json_1.default.abi, MasterChef_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.rewardToken, eth_wallet_1.Utils.toString(params.rewardsPerBlock), eth_wallet_1.Utils.toString(params.startBlock), eth_wallet_1.Utils.toString(params.endBlock), eth_wallet_1.Utils.toString(params.bonusEndBlock)]);
    }
    parseAuthChangedEvent(receipt) {
        return this.parseEvents(receipt, "AuthChanged").map(e => this.decodeAuthChangedEvent(e));
    }
    decodeAuthChangedEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            auth: result.auth,
            _event: event
        };
    }
    parseDepositEvent(receipt) {
        return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            pid: new eth_wallet_1.BigNumber(result.pid),
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseEmergencyWithdrawEvent(receipt) {
        return this.parseEvents(receipt, "EmergencyWithdraw").map(e => this.decodeEmergencyWithdrawEvent(e));
    }
    decodeEmergencyWithdrawEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            pid: new eth_wallet_1.BigNumber(result.pid),
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseHarvestEvent(receipt) {
        return this.parseEvents(receipt, "Harvest").map(e => this.decodeHarvestEvent(e));
    }
    decodeHarvestEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            pid: new eth_wallet_1.BigNumber(result.pid),
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseLogInitEvent(receipt) {
        return this.parseEvents(receipt, "LogInit").map(e => this.decodeLogInitEvent(e));
    }
    decodeLogInitEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseLogPoolAdditionEvent(receipt) {
        return this.parseEvents(receipt, "LogPoolAddition").map(e => this.decodeLogPoolAdditionEvent(e));
    }
    decodeLogPoolAdditionEvent(event) {
        let result = event.data;
        return {
            pid: new eth_wallet_1.BigNumber(result.pid),
            allocPoint: new eth_wallet_1.BigNumber(result.allocPoint),
            lpToken: result.lpToken,
            _event: event
        };
    }
    parseLogSetPoolEvent(receipt) {
        return this.parseEvents(receipt, "LogSetPool").map(e => this.decodeLogSetPoolEvent(e));
    }
    decodeLogSetPoolEvent(event) {
        let result = event.data;
        return {
            pid: new eth_wallet_1.BigNumber(result.pid),
            allocPoint: new eth_wallet_1.BigNumber(result.allocPoint),
            _event: event
        };
    }
    parseLogUpdatePoolEvent(receipt) {
        return this.parseEvents(receipt, "LogUpdatePool").map(e => this.decodeLogUpdatePoolEvent(e));
    }
    decodeLogUpdatePoolEvent(event) {
        let result = event.data;
        return {
            pid: new eth_wallet_1.BigNumber(result.pid),
            lastRewardBlock: new eth_wallet_1.BigNumber(result.lastRewardBlock),
            lpSupply: new eth_wallet_1.BigNumber(result.lpSupply),
            accSushiPerShare: new eth_wallet_1.BigNumber(result.accSushiPerShare),
            _event: event
        };
    }
    parseWithdrawEvent(receipt) {
        return this.parseEvents(receipt, "Withdraw").map(e => this.decodeWithdrawEvent(e));
    }
    decodeWithdrawEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            pid: new eth_wallet_1.BigNumber(result.pid),
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    assign() {
        let BONUS_MULTIPLIER_call = async () => {
            let result = await this.call('BONUS_MULTIPLIER');
            return new eth_wallet_1.BigNumber(result);
        };
        this.BONUS_MULTIPLIER = BONUS_MULTIPLIER_call;
        let bonusEndBlock_call = async () => {
            let result = await this.call('bonusEndBlock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.bonusEndBlock = bonusEndBlock_call;
        let endBlock_call = async () => {
            let result = await this.call('endBlock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.endBlock = endBlock_call;
        let getMultiplierParams = (params) => [eth_wallet_1.Utils.toString(params.from), eth_wallet_1.Utils.toString(params.to)];
        let getMultiplier_call = async (params) => {
            let result = await this.call('getMultiplier', getMultiplierParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getMultiplier = getMultiplier_call;
        let owners_call = async (param1) => {
            let result = await this.call('owners', [param1]);
            return result;
        };
        this.owners = owners_call;
        let pendingRewardsParams = (params) => [eth_wallet_1.Utils.toString(params.pid), params.user];
        let pendingRewards_call = async (params) => {
            let result = await this.call('pendingRewards', pendingRewardsParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.pendingRewards = pendingRewards_call;
        let poolInfo_call = async (param1) => {
            let result = await this.call('poolInfo', [eth_wallet_1.Utils.toString(param1)]);
            return {
                lpToken: result.lpToken,
                allocPoint: new eth_wallet_1.BigNumber(result.allocPoint),
                lastRewardBlock: new eth_wallet_1.BigNumber(result.lastRewardBlock),
                accRewardsPerShare: new eth_wallet_1.BigNumber(result.accRewardsPerShare)
            };
        };
        this.poolInfo = poolInfo_call;
        let poolLength_call = async () => {
            let result = await this.call('poolLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.poolLength = poolLength_call;
        let rewardToken_call = async (param1) => {
            let result = await this.call('rewardToken', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.rewardToken = rewardToken_call;
        let rewardTokenLength_call = async () => {
            let result = await this.call('rewardTokenLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.rewardTokenLength = rewardTokenLength_call;
        let rewardsPerBlock_call = async () => {
            let result = await this.call('rewardsPerBlock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.rewardsPerBlock = rewardsPerBlock_call;
        let startBlock_call = async () => {
            let result = await this.call('startBlock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.startBlock = startBlock_call;
        let totalAllocPoint_call = async () => {
            let result = await this.call('totalAllocPoint');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalAllocPoint = totalAllocPoint_call;
        let totalPendingRewards_call = async () => {
            let result = await this.call('totalPendingRewards');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalPendingRewards = totalPendingRewards_call;
        let userInfoParams = (params) => [eth_wallet_1.Utils.toString(params.param1), params.param2];
        let userInfo_call = async (params) => {
            let result = await this.call('userInfo', userInfoParams(params));
            return {
                amount: new eth_wallet_1.BigNumber(result.amount),
                rewardDebt: new eth_wallet_1.BigNumber(result.rewardDebt)
            };
        };
        this.userInfo = userInfo_call;
        let whitelisted_call = async (param1) => {
            let result = await this.call('whitelisted', [param1]);
            return result;
        };
        this.whitelisted = whitelisted_call;
        let addParams = (params) => [eth_wallet_1.Utils.toString(params.allocPoint), params.lpToken, params.withUpdate];
        let add_send = async (params) => {
            let result = await this.send('add', addParams(params));
            return result;
        };
        let add_call = async (params) => {
            let result = await this.call('add', addParams(params));
            return;
        };
        this.add = Object.assign(add_send, {
            call: add_call
        });
        let deny_send = async (account) => {
            let result = await this.send('deny', [account]);
            return result;
        };
        let deny_call = async (account) => {
            let result = await this.call('deny', [account]);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let depositParams = (params) => [eth_wallet_1.Utils.toString(params.pid), eth_wallet_1.Utils.toString(params.amount)];
        let deposit_send = async (params) => {
            let result = await this.send('deposit', depositParams(params));
            return result;
        };
        let deposit_call = async (params) => {
            let result = await this.call('deposit', depositParams(params));
            return;
        };
        this.deposit = Object.assign(deposit_send, {
            call: deposit_call
        });
        let emergencyWithdraw_send = async (pid) => {
            let result = await this.send('emergencyWithdraw', [eth_wallet_1.Utils.toString(pid)]);
            return result;
        };
        let emergencyWithdraw_call = async (pid) => {
            let result = await this.call('emergencyWithdraw', [eth_wallet_1.Utils.toString(pid)]);
            return;
        };
        this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
            call: emergencyWithdraw_call
        });
        let harvestParams = (params) => [eth_wallet_1.Utils.toString(params.pid), params.user];
        let harvest_send = async (params) => {
            let result = await this.send('harvest', harvestParams(params));
            return result;
        };
        let harvest_call = async (params) => {
            let result = await this.call('harvest', harvestParams(params));
            return;
        };
        this.harvest = Object.assign(harvest_send, {
            call: harvest_call
        });
        let massUpdatePools_send = async () => {
            let result = await this.send('massUpdatePools');
            return result;
        };
        let massUpdatePools_call = async () => {
            let result = await this.call('massUpdatePools');
            return;
        };
        this.massUpdatePools = Object.assign(massUpdatePools_send, {
            call: massUpdatePools_call
        });
        let pause_send = async () => {
            let result = await this.send('pause');
            return result;
        };
        let pause_call = async () => {
            let result = await this.call('pause');
            return;
        };
        this.pause = Object.assign(pause_send, {
            call: pause_call
        });
        let rely_send = async (account) => {
            let result = await this.send('rely', [account]);
            return result;
        };
        let rely_call = async (account) => {
            let result = await this.call('rely', [account]);
            return;
        };
        this.rely = Object.assign(rely_send, {
            call: rely_call
        });
        let setParams = (params) => [eth_wallet_1.Utils.toString(params.pid), eth_wallet_1.Utils.toString(params.allocPoint), params.withUpdate];
        let set_send = async (params) => {
            let result = await this.send('set', setParams(params));
            return result;
        };
        let set_call = async (params) => {
            let result = await this.call('set', setParams(params));
            return;
        };
        this.set = Object.assign(set_send, {
            call: set_call
        });
        let setWhiteListParams = (params) => [params.who, params.allowed];
        let setWhiteList_send = async (params) => {
            let result = await this.send('setWhiteList', setWhiteListParams(params));
            return result;
        };
        let setWhiteList_call = async (params) => {
            let result = await this.call('setWhiteList', setWhiteListParams(params));
            return;
        };
        this.setWhiteList = Object.assign(setWhiteList_send, {
            call: setWhiteList_call
        });
        let updatePool_send = async (pid) => {
            let result = await this.send('updatePool', [eth_wallet_1.Utils.toString(pid)]);
            return result;
        };
        let updatePool_call = async (pid) => {
            let result = await this.call('updatePool', [eth_wallet_1.Utils.toString(pid)]);
            return;
        };
        this.updatePool = Object.assign(updatePool_send, {
            call: updatePool_call
        });
        let updateSelectedPools_send = async (pids) => {
            let result = await this.send('updateSelectedPools', [eth_wallet_1.Utils.toString(pids)]);
            return result;
        };
        let updateSelectedPools_call = async (pids) => {
            let result = await this.call('updateSelectedPools', [eth_wallet_1.Utils.toString(pids)]);
            return;
        };
        this.updateSelectedPools = Object.assign(updateSelectedPools_send, {
            call: updateSelectedPools_call
        });
        let withdrawParams = (params) => [eth_wallet_1.Utils.toString(params.pid), eth_wallet_1.Utils.toString(params.amount)];
        let withdraw_send = async (params) => {
            let result = await this.send('withdraw', withdrawParams(params));
            return result;
        };
        let withdraw_call = async (params) => {
            let result = await this.call('withdraw', withdrawParams(params));
            return;
        };
        this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call
        });
    }
}
exports.MasterChef = MasterChef;
