import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    name: string;
    symbol: string;
    start: number | BigNumber;
    end: number | BigNumber;
    cap: number | BigNumber;
    farming: string;
    redeeming: string;
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
export interface IMintParams {
    account: string;
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
export declare class AutoVestingToken extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): AutoVestingToken.ApprovalEvent[];
    decodeApprovalEvent(event: Event): AutoVestingToken.ApprovalEvent;
    parseLockEvent(receipt: TransactionReceipt): AutoVestingToken.LockEvent[];
    decodeLockEvent(event: Event): AutoVestingToken.LockEvent;
    parseRedeemEvent(receipt: TransactionReceipt): AutoVestingToken.RedeemEvent[];
    decodeRedeemEvent(event: Event): AutoVestingToken.RedeemEvent;
    parseTransferEvent(receipt: TransactionReceipt): AutoVestingToken.TransferEvent[];
    decodeTransferEvent(event: Event): AutoVestingToken.TransferEvent;
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
    duration: {
        (): Promise<BigNumber>;
    };
    end: {
        (): Promise<BigNumber>;
    };
    farming: {
        (): Promise<string>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
    };
    locked: {
        (account: string): Promise<BigNumber>;
    };
    mint: {
        (params: IMintParams): Promise<TransactionReceipt>;
        call: (params: IMintParams) => Promise<void>;
    };
    name: {
        (): Promise<string>;
    };
    redeem: {
        (params: IRedeemParams): Promise<TransactionReceipt>;
        call: (params: IRedeemParams) => Promise<void>;
    };
    redeeming: {
        (): Promise<string>;
    };
    start: {
        (): Promise<BigNumber>;
    };
    symbol: {
        (): Promise<string>;
    };
    totalLocked: {
        (): Promise<BigNumber>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    totalVestable: {
        (): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    };
    vestable: {
        (param1: string): Promise<BigNumber>;
    };
    private assign;
}
export declare module AutoVestingToken {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface LockEvent {
        account: string;
        amount: BigNumber;
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
