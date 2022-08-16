import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    name: string;
    symbol: string;
    startReleaseBlock: number | BigNumber;
    endReleaseBlock: number | BigNumber;
    cap: number | BigNumber;
    vestingRatio: number | BigNumber;
}
export interface IAllowanceParams {
    owner: string;
    spender: string;
}
export interface IApproveParams {
    spender: string;
    amount: number | BigNumber;
}
export interface IDecreaseAllowanceParams {
    spender: string;
    subtractedValue: number | BigNumber;
}
export interface IIncreaseAllowanceParams {
    spender: string;
    addedValue: number | BigNumber;
}
export interface ILockParams {
    account: string;
    amount: number | BigNumber;
}
export interface IMintParams {
    to: string;
    amount: number | BigNumber;
}
export interface IRedeemParams {
    account: string;
    amount: number | BigNumber;
}
export interface ITransferParams {
    recipient: string;
    amount: number | BigNumber;
}
export interface ITransferFromParams {
    sender: string;
    recipient: string;
    amount: number | BigNumber;
}
export declare class VestingToken extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): VestingToken.ApprovalEvent[];
    decodeApprovalEvent(event: Event): VestingToken.ApprovalEvent;
    parseLockEvent(receipt: TransactionReceipt): VestingToken.LockEvent[];
    decodeLockEvent(event: Event): VestingToken.LockEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): VestingToken.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): VestingToken.OwnershipTransferredEvent;
    parseRedeemEvent(receipt: TransactionReceipt): VestingToken.RedeemEvent[];
    decodeRedeemEvent(event: Event): VestingToken.RedeemEvent;
    parseTransferEvent(receipt: TransactionReceipt): VestingToken.TransferEvent[];
    decodeTransferEvent(event: Event): VestingToken.TransferEvent;
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    };
    balanceOf: {
        (account: string): Promise<BigNumber>;
    };
    canUnlockAmount: {
        (account: string): Promise<BigNumber>;
    };
    cap: {
        (): Promise<BigNumber>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
    };
    endReleaseBlock: {
        (): Promise<BigNumber>;
    };
    farming: {
        (): Promise<string>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
    };
    lastUnlockBlock: {
        (account: string): Promise<BigNumber>;
    };
    lock: {
        (params: ILockParams): Promise<TransactionReceipt>;
        call: (params: ILockParams) => Promise<void>;
    };
    lockOf: {
        (account: string): Promise<BigNumber>;
    };
    mint: {
        (params: IMintParams): Promise<TransactionReceipt>;
        call: (params: IMintParams) => Promise<void>;
    };
    name: {
        (): Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    redeem: {
        (params: IRedeemParams): Promise<TransactionReceipt>;
        call: (params: IRedeemParams) => Promise<void>;
    };
    redeeming: {
        (): Promise<string>;
    };
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    setFarming: {
        (farming: string): Promise<TransactionReceipt>;
        call: (farming: string) => Promise<void>;
    };
    setRedeeming: {
        (redeeming: string): Promise<TransactionReceipt>;
        call: (redeeming: string) => Promise<void>;
    };
    startReleaseBlock: {
        (): Promise<BigNumber>;
    };
    symbol: {
        (): Promise<string>;
    };
    totalAvailableAmount: {
        (account: string): Promise<BigNumber>;
    };
    totalBalanceOf: {
        (account: string): Promise<BigNumber>;
    };
    totalLock: {
        (): Promise<BigNumber>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    };
    transferAll: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<void>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    unlock: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    unlockedSupply: {
        (): Promise<BigNumber>;
    };
    vestingRatio: {
        (): Promise<BigNumber>;
    };
    private assign;
}
export declare module VestingToken {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface LockEvent {
        account: string;
        direct: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface RedeemEvent {
        account: string;
        amount: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
