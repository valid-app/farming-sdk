import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    rewardToken: string[];
    rewardsPerBlock: number | BigNumber;
    startBlock: number | BigNumber;
    endBlock: number | BigNumber;
    bonusEndBlock: number | BigNumber;
}
export interface IAddParams {
    allocPoint: number | BigNumber;
    lpToken: string;
    withUpdate: boolean;
}
export interface IDepositParams {
    pid: number | BigNumber;
    amount: number | BigNumber;
}
export interface IGetMultiplierParams {
    from: number | BigNumber;
    to: number | BigNumber;
}
export interface IHarvestParams {
    pid: number | BigNumber;
    user: string;
}
export interface IPendingRewardsParams {
    pid: number | BigNumber;
    user: string;
}
export interface ISetParams {
    pid: number | BigNumber;
    allocPoint: number | BigNumber;
    withUpdate: boolean;
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
}
export declare class MasterChef extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseAuthChangedEvent(receipt: TransactionReceipt): MasterChef.AuthChangedEvent[];
    decodeAuthChangedEvent(event: Event): MasterChef.AuthChangedEvent;
    parseDepositEvent(receipt: TransactionReceipt): MasterChef.DepositEvent[];
    decodeDepositEvent(event: Event): MasterChef.DepositEvent;
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): MasterChef.EmergencyWithdrawEvent[];
    decodeEmergencyWithdrawEvent(event: Event): MasterChef.EmergencyWithdrawEvent;
    parseHarvestEvent(receipt: TransactionReceipt): MasterChef.HarvestEvent[];
    decodeHarvestEvent(event: Event): MasterChef.HarvestEvent;
    parseLogInitEvent(receipt: TransactionReceipt): MasterChef.LogInitEvent[];
    decodeLogInitEvent(event: Event): MasterChef.LogInitEvent;
    parseLogPoolAdditionEvent(receipt: TransactionReceipt): MasterChef.LogPoolAdditionEvent[];
    decodeLogPoolAdditionEvent(event: Event): MasterChef.LogPoolAdditionEvent;
    parseLogSetPoolEvent(receipt: TransactionReceipt): MasterChef.LogSetPoolEvent[];
    decodeLogSetPoolEvent(event: Event): MasterChef.LogSetPoolEvent;
    parseLogUpdatePoolEvent(receipt: TransactionReceipt): MasterChef.LogUpdatePoolEvent[];
    decodeLogUpdatePoolEvent(event: Event): MasterChef.LogUpdatePoolEvent;
    parseWithdrawEvent(receipt: TransactionReceipt): MasterChef.WithdrawEvent[];
    decodeWithdrawEvent(event: Event): MasterChef.WithdrawEvent;
    BONUS_MULTIPLIER: {
        (): Promise<BigNumber>;
    };
    add: {
        (params: IAddParams): Promise<TransactionReceipt>;
        call: (params: IAddParams) => Promise<void>;
    };
    bonusEndBlock: {
        (): Promise<BigNumber>;
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
    getMultiplier: {
        (params: IGetMultiplierParams): Promise<BigNumber>;
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
    pause: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    pendingRewards: {
        (params: IPendingRewardsParams): Promise<BigNumber>;
    };
    poolInfo: {
        (param1: number | BigNumber): Promise<{
            lpToken: string;
            allocPoint: BigNumber;
            lastRewardBlock: BigNumber;
            accRewardsPerShare: BigNumber;
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
    rewardTokenLength: {
        (): Promise<BigNumber>;
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
    totalPendingRewards: {
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
    whitelisted: {
        (param1: string): Promise<boolean>;
    };
    withdraw: {
        (params: IWithdrawParams): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams) => Promise<void>;
    };
    private assign;
}
export declare module MasterChef {
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
        accSushiPerShare: BigNumber;
        _event: Event;
    }
    interface WithdrawEvent {
        user: string;
        pid: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
}
