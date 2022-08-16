import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    farming: string;
    vesting: string[];
    rewardPerVesting: (number | BigNumber)[];
    reward: string[];
    convertingRatio: (number | BigNumber)[];
    admin: string;
}
export interface IConvertingRatioParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IHarvestAndRedeemParams {
    account: string;
    pid: number | BigNumber;
}
export interface IPutFundParams {
    token: string;
    from: string;
    amount: number | BigNumber;
}
export interface IRedeemParams {
    account: string;
    vestingIdx: number | BigNumber;
}
export interface IRewardParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export declare class Redeeming extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseReclaimRemainingRewardEvent(receipt: TransactionReceipt): Redeeming.ReclaimRemainingRewardEvent[];
    decodeReclaimRemainingRewardEvent(event: Event): Redeeming.ReclaimRemainingRewardEvent;
    parseRedeemEvent(receipt: TransactionReceipt): Redeeming.RedeemEvent[];
    decodeRedeemEvent(event: Event): Redeeming.RedeemEvent;
    admin: {
        (): Promise<string>;
    };
    availableRewardAmount: {
        (account: string): Promise<{
            tokens: string[];
            availableReward: BigNumber[];
        }>;
    };
    convertingRatio: {
        (params: IConvertingRatioParams): Promise<BigNumber>;
    };
    farming: {
        (): Promise<string>;
    };
    harvestAndRedeem: {
        (params: IHarvestAndRedeemParams): Promise<TransactionReceipt>;
        call: (params: IHarvestAndRedeemParams) => Promise<void>;
    };
    putFund: {
        (params: IPutFundParams): Promise<TransactionReceipt>;
        call: (params: IPutFundParams) => Promise<void>;
    };
    reclaimRemainingReward: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    redeem: {
        (params: IRedeemParams): Promise<TransactionReceipt>;
        call: (params: IRedeemParams) => Promise<void>;
    };
    redeemAllAvailable: {
        (account: string): Promise<TransactionReceipt>;
        call: (account: string) => Promise<void>;
    };
    reward: {
        (params: IRewardParams): Promise<string>;
    };
    rewardLength: {
        (vestingIdx: number | BigNumber): Promise<BigNumber>;
    };
    vesting: {
        (param1: number | BigNumber): Promise<string>;
    };
    vestingLength: {
        (): Promise<BigNumber>;
    };
    private assign;
}
export declare module Redeeming {
    interface ReclaimRemainingRewardEvent {
        _event: Event;
    }
    interface RedeemEvent {
        account: string;
        token: string;
        vesting: BigNumber;
        reward: BigNumber;
        _event: Event;
    }
}
