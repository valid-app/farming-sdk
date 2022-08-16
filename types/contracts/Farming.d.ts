import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    rewardPerBlock: number | BigNumber;
    startBlock: number | BigNumber;
    endBlock: number | BigNumber;
    admin: string;
}
export interface IAddPoolParams {
    allocPoint: number | BigNumber;
    lpToken: string;
    endBlock: number | BigNumber;
    bonusMultiplier: number | BigNumber;
    bonusEndBlock: number | BigNumber;
    withUpdate: boolean;
}
export interface IAddRewardsParams {
    rewardToken: string;
    multiplier: number | BigNumber;
    vestingRatio: number | BigNumber;
    vestingStartOnHarvest: boolean;
    vestingDuration: number | BigNumber;
}
export interface IClaimVestingParams {
    pid: number | BigNumber;
    rewardId: number | BigNumber;
    user: string;
}
export interface IClaimableVestingParams {
    pid: number | BigNumber;
    rewardId: number | BigNumber;
    user: string;
}
export interface IDepositParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
}
export interface IHarvestParams {
    pid: number | BigNumber;
    user: string;
}
export interface IPendingRewardParams {
    pid: number | BigNumber;
    user: string;
}
export interface ISetPoolParams {
    pid: number | BigNumber;
    allocPoint: number | BigNumber;
    endBlock: number | BigNumber;
    bonusMultiplier: number | BigNumber;
    bonusEndBlock: number | BigNumber;
    withUpdate: boolean;
}
export interface ISetRewardsParams {
    rewardId: number | BigNumber;
    multiplier: number | BigNumber;
    vestingRatio: number | BigNumber;
    vestingDuration: number | BigNumber;
}
export interface ISetWhiteListParams {
    who: string;
    allowed: boolean;
}
export interface IUserInfoParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IUserRewardsParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
    param3: string;
}
export interface IWithdrawParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
}
export declare class Farming extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseAuthChangedEvent(receipt: TransactionReceipt): Farming.AuthChangedEvent[];
    decodeAuthChangedEvent(event: Event): Farming.AuthChangedEvent;
    parseDepositEvent(receipt: TransactionReceipt): Farming.DepositEvent[];
    decodeDepositEvent(event: Event): Farming.DepositEvent;
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): Farming.EmergencyWithdrawEvent[];
    decodeEmergencyWithdrawEvent(event: Event): Farming.EmergencyWithdrawEvent;
    parseHarvestEvent(receipt: TransactionReceipt): Farming.HarvestEvent[];
    decodeHarvestEvent(event: Event): Farming.HarvestEvent;
    parseLogPoolAdditionEvent(receipt: TransactionReceipt): Farming.LogPoolAdditionEvent[];
    decodeLogPoolAdditionEvent(event: Event): Farming.LogPoolAdditionEvent;
    parseLogRewardAdditionEvent(receipt: TransactionReceipt): Farming.LogRewardAdditionEvent[];
    decodeLogRewardAdditionEvent(event: Event): Farming.LogRewardAdditionEvent;
    parseLogSetPoolEvent(receipt: TransactionReceipt): Farming.LogSetPoolEvent[];
    decodeLogSetPoolEvent(event: Event): Farming.LogSetPoolEvent;
    parseLogSetRewardEvent(receipt: TransactionReceipt): Farming.LogSetRewardEvent[];
    decodeLogSetRewardEvent(event: Event): Farming.LogSetRewardEvent;
    parseLogUpdatePoolEvent(receipt: TransactionReceipt): Farming.LogUpdatePoolEvent[];
    decodeLogUpdatePoolEvent(event: Event): Farming.LogUpdatePoolEvent;
    parseVestedEvent(receipt: TransactionReceipt): Farming.VestedEvent[];
    decodeVestedEvent(event: Event): Farming.VestedEvent;
    parseWithdrawEvent(receipt: TransactionReceipt): Farming.WithdrawEvent[];
    decodeWithdrawEvent(event: Event): Farming.WithdrawEvent;
    addPool: {
        (params: IAddPoolParams): Promise<TransactionReceipt>;
        call: (params: IAddPoolParams) => Promise<void>;
    };
    addRewards: {
        (params: IAddRewardsParams): Promise<TransactionReceipt>;
        call: (params: IAddRewardsParams) => Promise<void>;
    };
    admin: {
        (): Promise<string>;
    };
    adminWithdrawReward: {
        (rewardId: number | BigNumber): Promise<TransactionReceipt>;
        call: (rewardId: number | BigNumber) => Promise<void>;
    };
    claimVesting: {
        (params: IClaimVestingParams): Promise<TransactionReceipt>;
        call: (params: IClaimVestingParams) => Promise<void>;
    };
    claimableVesting: {
        (params: IClaimableVestingParams): Promise<BigNumber>;
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
        (pid: number | BigNumber): Promise<TransactionReceipt>;
        call: (pid: number | BigNumber) => Promise<void>;
    };
    endBlock: {
        (): Promise<BigNumber>;
    };
    getReserveReward: {
        (rewardId: number | BigNumber): Promise<BigNumber>;
    };
    harvest: {
        (params: IHarvestParams): Promise<TransactionReceipt>;
        call: (params: IHarvestParams) => Promise<void>;
    };
    massUpdatePools: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    owners: {
        (param1: string): Promise<boolean>;
    };
    pendingReward: {
        (params: IPendingRewardParams): Promise<{
            rewardToken: string[];
            availableNow: BigNumber[];
            toBeVested: BigNumber[];
            vestingStart: BigNumber[];
            vestingDuration: BigNumber[];
        }>;
    };
    poolIdx: {
        (param1: string): Promise<BigNumber>;
    };
    poolInfo: {
        (param1: number | BigNumber): Promise<{
            lpToken: string;
            allocPoint: BigNumber;
            endBlock: BigNumber;
            bonusMultiplier: BigNumber;
            bonusEndBlock: BigNumber;
            rewardDebt: BigNumber;
            lastRewardBlock: BigNumber;
            accRewardPerShare: BigNumber;
        }>;
    };
    poolLength: {
        (): Promise<BigNumber>;
    };
    rely: {
        (account: string): Promise<TransactionReceipt>;
        call: (account: string) => Promise<void>;
    };
    resetPool: {
        (pid: number | BigNumber): Promise<TransactionReceipt>;
        call: (pid: number | BigNumber) => Promise<void>;
    };
    rewardIdx: {
        (param1: string): Promise<BigNumber>;
    };
    rewardInfo: {
        (param1: number | BigNumber): Promise<{
            rewardToken: string;
            multiplier: BigNumber;
            vestingRatio: BigNumber;
            vestingStartOnHarvest: boolean;
            vestingDuration: BigNumber;
            rewarded: BigNumber;
            reserve: BigNumber;
        }>;
    };
    rewardLength: {
        (): Promise<BigNumber>;
    };
    rewardPerBlock: {
        (): Promise<BigNumber>;
    };
    setAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    setPool: {
        (params: ISetPoolParams): Promise<TransactionReceipt>;
        call: (params: ISetPoolParams) => Promise<void>;
    };
    setRewards: {
        (params: ISetRewardsParams): Promise<TransactionReceipt>;
        call: (params: ISetRewardsParams) => Promise<void>;
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
    updateSelectedPools: {
        (pids: (number | BigNumber)[]): Promise<TransactionReceipt>;
        call: (pids: (number | BigNumber)[]) => Promise<void>;
    };
    userInfo: {
        (params: IUserInfoParams): Promise<{
            amount: BigNumber;
            rewardDebt: BigNumber;
        }>;
    };
    userRewards: {
        (params: IUserRewardsParams): Promise<{
            harvested: BigNumber;
            locked: BigNumber;
            lockedTill: BigNumber;
            lastUpdate: BigNumber;
        }>;
    };
    whitelisted: {
        (param1: string): Promise<boolean>;
    };
    withdraw: {
        (params: IWithdrawParams): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams) => Promise<void>;
    };
    private assign;
}
export declare module Farming {
    interface AuthChangedEvent {
        account: string;
        auth: boolean;
        _event: Event;
    }
    interface DepositEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface EmergencyWithdrawEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface HarvestEvent {
        user: string;
        pid: BigNumber;
        rewardId: BigNumber;
        amount: BigNumber;
        locked: BigNumber;
        _event: Event;
    }
    interface LogPoolAdditionEvent {
        pid: BigNumber;
        allocPoint: BigNumber;
        lpToken: string;
        endBlock: BigNumber;
        bonusMultiplier: BigNumber;
        bonusEndBlock: BigNumber;
        _event: Event;
    }
    interface LogRewardAdditionEvent {
        rewardId: BigNumber;
        rewardToken: string;
        multiplier: BigNumber;
        vestingRatio: BigNumber;
        vestingStartOnHarvest: boolean;
        vestingDuration: BigNumber;
        _event: Event;
    }
    interface LogSetPoolEvent {
        pid: BigNumber;
        allocPoint: BigNumber;
        endBlock: BigNumber;
        bonusMultiplier: BigNumber;
        bonusEndBlock: BigNumber;
        _event: Event;
    }
    interface LogSetRewardEvent {
        rewardId: BigNumber;
        multiplier: BigNumber;
        vestingRatio: BigNumber;
        vestingDuration: BigNumber;
        _event: Event;
    }
    interface LogUpdatePoolEvent {
        pid: BigNumber;
        lastRewardBlock: BigNumber;
        lpSupply: BigNumber;
        accSushiPerShare: BigNumber;
        _event: Event;
    }
    interface VestedEvent {
        user: string;
        pid: BigNumber;
        rewardId: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface WithdrawEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
}
