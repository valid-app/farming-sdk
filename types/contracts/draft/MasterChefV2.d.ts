import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    rewardsPerBlock: number | BigNumber;
    startBlock: number | BigNumber;
    endBlock: number | BigNumber;
}
export interface IAddParams {
    allocPoint: number | BigNumber;
    lpToken: string;
}
export interface IDepositParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
    to: string;
}
export interface IEmergencyWithdrawParams {
    pid: number | BigNumber;
    to: string;
}
export interface IHarvestParams {
    pid: number | BigNumber;
    to: string;
}
export interface IPendingRewardsParams {
    pid: number | BigNumber;
    user: string;
}
export interface ISetParams {
    pid: number | BigNumber;
    allocPoint: number | BigNumber;
}
export interface ISetWhiteListParams {
    who: string;
    allowed: boolean;
}
export interface IUserInfoParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IWithdrawParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
    to: string;
}
export interface IWithdrawAndHarvestParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
    to: string;
}
export declare class MasterChefV2 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseAuthChangedEvent(receipt: TransactionReceipt): MasterChefV2.AuthChangedEvent[];
    decodeAuthChangedEvent(event: Event): MasterChefV2.AuthChangedEvent;
    parseDepositEvent(receipt: TransactionReceipt): MasterChefV2.DepositEvent[];
    decodeDepositEvent(event: Event): MasterChefV2.DepositEvent;
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): MasterChefV2.EmergencyWithdrawEvent[];
    decodeEmergencyWithdrawEvent(event: Event): MasterChefV2.EmergencyWithdrawEvent;
    parseHarvestEvent(receipt: TransactionReceipt): MasterChefV2.HarvestEvent[];
    decodeHarvestEvent(event: Event): MasterChefV2.HarvestEvent;
    parseLogInitEvent(receipt: TransactionReceipt): MasterChefV2.LogInitEvent[];
    decodeLogInitEvent(event: Event): MasterChefV2.LogInitEvent;
    parseLogPoolAdditionEvent(receipt: TransactionReceipt): MasterChefV2.LogPoolAdditionEvent[];
    decodeLogPoolAdditionEvent(event: Event): MasterChefV2.LogPoolAdditionEvent;
    parseLogSetPoolEvent(receipt: TransactionReceipt): MasterChefV2.LogSetPoolEvent[];
    decodeLogSetPoolEvent(event: Event): MasterChefV2.LogSetPoolEvent;
    parseLogUpdatePoolEvent(receipt: TransactionReceipt): MasterChefV2.LogUpdatePoolEvent[];
    decodeLogUpdatePoolEvent(event: Event): MasterChefV2.LogUpdatePoolEvent;
    parseWithdrawEvent(receipt: TransactionReceipt): MasterChefV2.WithdrawEvent[];
    decodeWithdrawEvent(event: Event): MasterChefV2.WithdrawEvent;
    add: {
        (params: IAddParams): Promise<TransactionReceipt>;
        call: (params: IAddParams) => Promise<void>;
    };
    addRewards: {
        (rewards: string[]): Promise<TransactionReceipt>;
        call: (rewards: string[]) => Promise<void>;
    };
    deny: {
        (account: string): Promise<TransactionReceipt>;
        call: (account: string) => Promise<void>;
    };
    deposit: {
        (params: IDepositParams): Promise<TransactionReceipt>;
        call: (params: IDepositParams) => Promise<void>;
    };
    emergencyWithdraw: {
        (params: IEmergencyWithdrawParams): Promise<TransactionReceipt>;
        call: (params: IEmergencyWithdrawParams) => Promise<void>;
    };
    endBlock: {
        (): Promise<BigNumber>;
    };
    harvest: {
        (params: IHarvestParams): Promise<TransactionReceipt>;
        call: (params: IHarvestParams) => Promise<void>;
    };
    lpToken: {
        (param1: number | BigNumber): Promise<string>;
    };
    massUpdatePools: {
        (pids: (number | BigNumber)[]): Promise<TransactionReceipt>;
        call: (pids: (number | BigNumber)[]) => Promise<void>;
    };
    owners: {
        (param1: string): Promise<boolean>;
    };
    pendingRewards: {
        (params: IPendingRewardsParams): Promise<BigNumber>;
    };
    poolInfo: {
        (param1: number | BigNumber): Promise<{
            accRewardsPerShare: BigNumber;
            lastRewardBlock: BigNumber;
            allocPoint: BigNumber;
        }>;
    };
    poolLength: {
        (): Promise<BigNumber>;
    };
    rely: {
        (account: string): Promise<TransactionReceipt>;
        call: (account: string) => Promise<void>;
    };
    rewardToken: {
        (param1: number | BigNumber): Promise<string>;
    };
    rewardsPerBlock: {
        (): Promise<BigNumber>;
    };
    set: {
        (params: ISetParams): Promise<TransactionReceipt>;
        call: (params: ISetParams) => Promise<void>;
    };
    setWhiteList: {
        (params: ISetWhiteListParams): Promise<TransactionReceipt>;
        call: (params: ISetWhiteListParams) => Promise<void>;
    };
    startBlock: {
        (): Promise<BigNumber>;
    };
    totalAllocPoint: {
        (): Promise<BigNumber>;
    };
    updatePool: {
        (pid: number | BigNumber): Promise<TransactionReceipt>;
        call: (pid: number | BigNumber) => Promise<void>;
    };
    userInfo: {
        (params: IUserInfoParams): Promise<{
            amount: BigNumber;
            rewardDebt: BigNumber;
        }>;
    };
    whitelisted: {
        (param1: string): Promise<boolean>;
    };
    withdraw: {
        (params: IWithdrawParams): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams) => Promise<void>;
    };
    withdrawAndHarvest: {
        (params: IWithdrawAndHarvestParams): Promise<TransactionReceipt>;
        call: (params: IWithdrawAndHarvestParams) => Promise<void>;
    };
    private assign;
}
export declare module MasterChefV2 {
    interface AuthChangedEvent {
        account: string;
        auth: boolean;
        _event: Event;
    }
    interface DepositEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        to: string;
        _event: Event;
    }
    interface EmergencyWithdrawEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        to: string;
        _event: Event;
    }
    interface HarvestEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface LogInitEvent {
        _event: Event;
    }
    interface LogPoolAdditionEvent {
        pid: BigNumber;
        allocPoint: BigNumber;
        lpToken: string;
        _event: Event;
    }
    interface LogSetPoolEvent {
        pid: BigNumber;
        allocPoint: BigNumber;
        _event: Event;
    }
    interface LogUpdatePoolEvent {
        pid: BigNumber;
        lastRewardBlock: BigNumber;
        lpSupply: BigNumber;
        accRewardsPerShare: BigNumber;
        _event: Event;
    }
    interface WithdrawEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        to: string;
        _event: Event;
    }
}
