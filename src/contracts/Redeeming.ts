import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./Redeeming.json";

export interface IDeployParams {farming:string;vesting:string[];rewardPerVesting:(number|BigNumber)[];reward:string[];convertingRatio:(number|BigNumber)[];admin:string}
export interface IConvertingRatioParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IHarvestAndRedeemParams {account:string;pid:number|BigNumber}
export interface IPutFundParams {token:string;from:string;amount:number|BigNumber}
export interface IRedeemParams {account:string;vestingIdx:number|BigNumber}
export interface IRewardParams {param1:number|BigNumber;param2:number|BigNumber}
export class Redeeming extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.farming,params.vesting,Utils.toString(params.rewardPerVesting),params.reward,Utils.toString(params.convertingRatio),params.admin]);
    }
    parseReclaimRemainingRewardEvent(receipt: TransactionReceipt): Redeeming.ReclaimRemainingRewardEvent[]{
        return this.parseEvents(receipt, "ReclaimRemainingReward").map(e=>this.decodeReclaimRemainingRewardEvent(e));
    }
    decodeReclaimRemainingRewardEvent(event: Event): Redeeming.ReclaimRemainingRewardEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseRedeemEvent(receipt: TransactionReceipt): Redeeming.RedeemEvent[]{
        return this.parseEvents(receipt, "Redeem").map(e=>this.decodeRedeemEvent(e));
    }
    decodeRedeemEvent(event: Event): Redeeming.RedeemEvent{
        let result = event.data;
        return {
            account: result.account,
            token: result.token,
            vesting: new BigNumber(result.vesting),
            reward: new BigNumber(result.reward),
            _event: event
        };
    }
    admin: {
        (): Promise<string>;
    }
    availableRewardAmount: {
        (account:string): Promise<{tokens:string[],availableReward:BigNumber[]}>;
    }
    convertingRatio: {
        (params: IConvertingRatioParams): Promise<BigNumber>;
    }
    farming: {
        (): Promise<string>;
    }
    harvestAndRedeem: {
        (params: IHarvestAndRedeemParams): Promise<TransactionReceipt>;
        call: (params: IHarvestAndRedeemParams) => Promise<void>;
    }
    putFund: {
        (params: IPutFundParams): Promise<TransactionReceipt>;
        call: (params: IPutFundParams) => Promise<void>;
    }
    reclaimRemainingReward: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    redeem: {
        (params: IRedeemParams): Promise<TransactionReceipt>;
        call: (params: IRedeemParams) => Promise<void>;
    }
    redeemAllAvailable: {
        (account:string): Promise<TransactionReceipt>;
        call: (account:string) => Promise<void>;
    }
    reward: {
        (params: IRewardParams): Promise<string>;
    }
    rewardLength: {
        (vestingIdx:number|BigNumber): Promise<BigNumber>;
    }
    vesting: {
        (param1:number|BigNumber): Promise<string>;
    }
    vestingLength: {
        (): Promise<BigNumber>;
    }
    private assign(){
        let admin_call = async (): Promise<string> => {
            let result = await this.call('admin');
            return result;
        }
        this.admin = admin_call
        let availableRewardAmount_call = async (account:string): Promise<{tokens:string[],availableReward:BigNumber[]}> => {
            let result = await this.call('availableRewardAmount',[account]);
            return {
                tokens: result.tokens,
                availableReward: result.availableReward.map(e=>new BigNumber(e))
            };
        }
        this.availableRewardAmount = availableRewardAmount_call
        let convertingRatioParams = (params: IConvertingRatioParams) => [Utils.toString(params.param1),Utils.toString(params.param2)];
        let convertingRatio_call = async (params: IConvertingRatioParams): Promise<BigNumber> => {
            let result = await this.call('convertingRatio',convertingRatioParams(params));
            return new BigNumber(result);
        }
        this.convertingRatio = convertingRatio_call
        let farming_call = async (): Promise<string> => {
            let result = await this.call('farming');
            return result;
        }
        this.farming = farming_call
        let rewardParams = (params: IRewardParams) => [Utils.toString(params.param1),Utils.toString(params.param2)];
        let reward_call = async (params: IRewardParams): Promise<string> => {
            let result = await this.call('reward',rewardParams(params));
            return result;
        }
        this.reward = reward_call
        let rewardLength_call = async (vestingIdx:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('rewardLength',[Utils.toString(vestingIdx)]);
            return new BigNumber(result);
        }
        this.rewardLength = rewardLength_call
        let vesting_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('vesting',[Utils.toString(param1)]);
            return result;
        }
        this.vesting = vesting_call
        let vestingLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('vestingLength');
            return new BigNumber(result);
        }
        this.vestingLength = vestingLength_call
        let harvestAndRedeemParams = (params: IHarvestAndRedeemParams) => [params.account,Utils.toString(params.pid)];
        let harvestAndRedeem_send = async (params: IHarvestAndRedeemParams): Promise<TransactionReceipt> => {
            let result = await this.send('harvestAndRedeem',harvestAndRedeemParams(params));
            return result;
        }
        let harvestAndRedeem_call = async (params: IHarvestAndRedeemParams): Promise<void> => {
            let result = await this.call('harvestAndRedeem',harvestAndRedeemParams(params));
            return;
        }
        this.harvestAndRedeem = Object.assign(harvestAndRedeem_send, {
            call:harvestAndRedeem_call
        });
        let putFundParams = (params: IPutFundParams) => [params.token,params.from,Utils.toString(params.amount)];
        let putFund_send = async (params: IPutFundParams): Promise<TransactionReceipt> => {
            let result = await this.send('putFund',putFundParams(params));
            return result;
        }
        let putFund_call = async (params: IPutFundParams): Promise<void> => {
            let result = await this.call('putFund',putFundParams(params));
            return;
        }
        this.putFund = Object.assign(putFund_send, {
            call:putFund_call
        });
        let reclaimRemainingReward_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('reclaimRemainingReward');
            return result;
        }
        let reclaimRemainingReward_call = async (): Promise<void> => {
            let result = await this.call('reclaimRemainingReward');
            return;
        }
        this.reclaimRemainingReward = Object.assign(reclaimRemainingReward_send, {
            call:reclaimRemainingReward_call
        });
        let redeemParams = (params: IRedeemParams) => [params.account,Utils.toString(params.vestingIdx)];
        let redeem_send = async (params: IRedeemParams): Promise<TransactionReceipt> => {
            let result = await this.send('redeem',redeemParams(params));
            return result;
        }
        let redeem_call = async (params: IRedeemParams): Promise<void> => {
            let result = await this.call('redeem',redeemParams(params));
            return;
        }
        this.redeem = Object.assign(redeem_send, {
            call:redeem_call
        });
        let redeemAllAvailable_send = async (account:string): Promise<TransactionReceipt> => {
            let result = await this.send('redeemAllAvailable',[account]);
            return result;
        }
        let redeemAllAvailable_call = async (account:string): Promise<void> => {
            let result = await this.call('redeemAllAvailable',[account]);
            return;
        }
        this.redeemAllAvailable = Object.assign(redeemAllAvailable_send, {
            call:redeemAllAvailable_call
        });
    }
}
export module Redeeming{
    export interface ReclaimRemainingRewardEvent {_event:Event}
    export interface RedeemEvent {account:string,token:string,vesting:BigNumber,reward:BigNumber,_event:Event}
}