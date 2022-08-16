import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./VestingToken.json";

export interface IDeployParams {name:string;symbol:string;startReleaseBlock:number|BigNumber;endReleaseBlock:number|BigNumber;cap:number|BigNumber;vestingRatio:number|BigNumber}
export interface IAllowanceParams {owner:string;spender:string}
export interface IApproveParams {spender:string;amount:number|BigNumber}
export interface IDecreaseAllowanceParams {spender:string;subtractedValue:number|BigNumber}
export interface IIncreaseAllowanceParams {spender:string;addedValue:number|BigNumber}
export interface ILockParams {account:string;amount:number|BigNumber}
export interface IMintParams {to:string;amount:number|BigNumber}
export interface IRedeemParams {account:string;amount:number|BigNumber}
export interface ITransferParams {recipient:string;amount:number|BigNumber}
export interface ITransferFromParams {sender:string;recipient:string;amount:number|BigNumber}
export class VestingToken extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.name,params.symbol,Utils.toString(params.startReleaseBlock),Utils.toString(params.endReleaseBlock),Utils.toString(params.cap),Utils.toString(params.vestingRatio)]);
    }
    parseApprovalEvent(receipt: TransactionReceipt): VestingToken.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): VestingToken.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseLockEvent(receipt: TransactionReceipt): VestingToken.LockEvent[]{
        return this.parseEvents(receipt, "Lock").map(e=>this.decodeLockEvent(e));
    }
    decodeLockEvent(event: Event): VestingToken.LockEvent{
        let result = event.data;
        return {
            account: result.account,
            direct: new BigNumber(result.direct),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): VestingToken.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): VestingToken.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseRedeemEvent(receipt: TransactionReceipt): VestingToken.RedeemEvent[]{
        return this.parseEvents(receipt, "Redeem").map(e=>this.decodeRedeemEvent(e));
    }
    decodeRedeemEvent(event: Event): VestingToken.RedeemEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): VestingToken.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): VestingToken.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    }
    balanceOf: {
        (account:string): Promise<BigNumber>;
    }
    canUnlockAmount: {
        (account:string): Promise<BigNumber>;
    }
    cap: {
        (): Promise<BigNumber>;
    }
    decimals: {
        (): Promise<BigNumber>;
    }
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
    }
    endReleaseBlock: {
        (): Promise<BigNumber>;
    }
    farming: {
        (): Promise<string>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
    }
    lastUnlockBlock: {
        (account:string): Promise<BigNumber>;
    }
    lock: {
        (params: ILockParams): Promise<TransactionReceipt>;
        call: (params: ILockParams) => Promise<void>;
    }
    lockOf: {
        (account:string): Promise<BigNumber>;
    }
    mint: {
        (params: IMintParams): Promise<TransactionReceipt>;
        call: (params: IMintParams) => Promise<void>;
    }
    name: {
        (): Promise<string>;
    }
    owner: {
        (): Promise<string>;
    }
    redeem: {
        (params: IRedeemParams): Promise<TransactionReceipt>;
        call: (params: IRedeemParams) => Promise<void>;
    }
    redeeming: {
        (): Promise<string>;
    }
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    setFarming: {
        (farming:string): Promise<TransactionReceipt>;
        call: (farming:string) => Promise<void>;
    }
    setRedeeming: {
        (redeeming:string): Promise<TransactionReceipt>;
        call: (redeeming:string) => Promise<void>;
    }
    startReleaseBlock: {
        (): Promise<BigNumber>;
    }
    symbol: {
        (): Promise<string>;
    }
    totalAvailableAmount: {
        (account:string): Promise<BigNumber>;
    }
    totalBalanceOf: {
        (account:string): Promise<BigNumber>;
    }
    totalLock: {
        (): Promise<BigNumber>;
    }
    totalSupply: {
        (): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    }
    transferAll: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<void>;
    }
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    unlock: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    unlockedSupply: {
        (): Promise<BigNumber>;
    }
    vestingRatio: {
        (): Promise<BigNumber>;
    }
    private assign(){
        let allowanceParams = (params: IAllowanceParams) => [params.owner,params.spender];
        let allowance_call = async (params: IAllowanceParams): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params));
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let balanceOf_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[account]);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let canUnlockAmount_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('canUnlockAmount',[account]);
            return new BigNumber(result);
        }
        this.canUnlockAmount = canUnlockAmount_call
        let cap_call = async (): Promise<BigNumber> => {
            let result = await this.call('cap');
            return new BigNumber(result);
        }
        this.cap = cap_call
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let endReleaseBlock_call = async (): Promise<BigNumber> => {
            let result = await this.call('endReleaseBlock');
            return new BigNumber(result);
        }
        this.endReleaseBlock = endReleaseBlock_call
        let farming_call = async (): Promise<string> => {
            let result = await this.call('farming');
            return result;
        }
        this.farming = farming_call
        let lastUnlockBlock_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('lastUnlockBlock',[account]);
            return new BigNumber(result);
        }
        this.lastUnlockBlock = lastUnlockBlock_call
        let lockOf_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('lockOf',[account]);
            return new BigNumber(result);
        }
        this.lockOf = lockOf_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let redeeming_call = async (): Promise<string> => {
            let result = await this.call('redeeming');
            return result;
        }
        this.redeeming = redeeming_call
        let startReleaseBlock_call = async (): Promise<BigNumber> => {
            let result = await this.call('startReleaseBlock');
            return new BigNumber(result);
        }
        this.startReleaseBlock = startReleaseBlock_call
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
        let totalAvailableAmount_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('totalAvailableAmount',[account]);
            return new BigNumber(result);
        }
        this.totalAvailableAmount = totalAvailableAmount_call
        let totalBalanceOf_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('totalBalanceOf',[account]);
            return new BigNumber(result);
        }
        this.totalBalanceOf = totalBalanceOf_call
        let totalLock_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalLock');
            return new BigNumber(result);
        }
        this.totalLock = totalLock_call
        let totalSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalSupply');
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let unlockedSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('unlockedSupply');
            return new BigNumber(result);
        }
        this.unlockedSupply = unlockedSupply_call
        let vestingRatio_call = async (): Promise<BigNumber> => {
            let result = await this.call('vestingRatio');
            return new BigNumber(result);
        }
        this.vestingRatio = vestingRatio_call
        let approveParams = (params: IApproveParams) => [params.spender,Utils.toString(params.amount)];
        let approve_send = async (params: IApproveParams): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params));
            return result;
        }
        let approve_call = async (params: IApproveParams): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params));
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let decreaseAllowanceParams = (params: IDecreaseAllowanceParams) => [params.spender,Utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params: IDecreaseAllowanceParams): Promise<TransactionReceipt> => {
            let result = await this.send('decreaseAllowance',decreaseAllowanceParams(params));
            return result;
        }
        let decreaseAllowance_call = async (params: IDecreaseAllowanceParams): Promise<boolean> => {
            let result = await this.call('decreaseAllowance',decreaseAllowanceParams(params));
            return result;
        }
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call:decreaseAllowance_call
        });
        let increaseAllowanceParams = (params: IIncreaseAllowanceParams) => [params.spender,Utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params: IIncreaseAllowanceParams): Promise<TransactionReceipt> => {
            let result = await this.send('increaseAllowance',increaseAllowanceParams(params));
            return result;
        }
        let increaseAllowance_call = async (params: IIncreaseAllowanceParams): Promise<boolean> => {
            let result = await this.call('increaseAllowance',increaseAllowanceParams(params));
            return result;
        }
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call:increaseAllowance_call
        });
        let lockParams = (params: ILockParams) => [params.account,Utils.toString(params.amount)];
        let lock_send = async (params: ILockParams): Promise<TransactionReceipt> => {
            let result = await this.send('lock',lockParams(params));
            return result;
        }
        let lock_call = async (params: ILockParams): Promise<void> => {
            let result = await this.call('lock',lockParams(params));
            return;
        }
        this.lock = Object.assign(lock_send, {
            call:lock_call
        });
        let mintParams = (params: IMintParams) => [params.to,Utils.toString(params.amount)];
        let mint_send = async (params: IMintParams): Promise<TransactionReceipt> => {
            let result = await this.send('mint',mintParams(params));
            return result;
        }
        let mint_call = async (params: IMintParams): Promise<void> => {
            let result = await this.call('mint',mintParams(params));
            return;
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let redeemParams = (params: IRedeemParams) => [params.account,Utils.toString(params.amount)];
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
        let renounceOwnership_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('renounceOwnership');
            return result;
        }
        let renounceOwnership_call = async (): Promise<void> => {
            let result = await this.call('renounceOwnership');
            return;
        }
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call:renounceOwnership_call
        });
        let setFarming_send = async (farming:string): Promise<TransactionReceipt> => {
            let result = await this.send('setFarming',[farming]);
            return result;
        }
        let setFarming_call = async (farming:string): Promise<void> => {
            let result = await this.call('setFarming',[farming]);
            return;
        }
        this.setFarming = Object.assign(setFarming_send, {
            call:setFarming_call
        });
        let setRedeeming_send = async (redeeming:string): Promise<TransactionReceipt> => {
            let result = await this.send('setRedeeming',[redeeming]);
            return result;
        }
        let setRedeeming_call = async (redeeming:string): Promise<void> => {
            let result = await this.call('setRedeeming',[redeeming]);
            return;
        }
        this.setRedeeming = Object.assign(setRedeeming_send, {
            call:setRedeeming_call
        });
        let transferParams = (params: ITransferParams) => [params.recipient,Utils.toString(params.amount)];
        let transfer_send = async (params: ITransferParams): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params));
            return result;
        }
        let transfer_call = async (params: ITransferParams): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params));
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferAll_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferAll',[to]);
            return result;
        }
        let transferAll_call = async (to:string): Promise<void> => {
            let result = await this.call('transferAll',[to]);
            return;
        }
        this.transferAll = Object.assign(transferAll_send, {
            call:transferAll_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.sender,params.recipient,Utils.toString(params.amount)];
        let transferFrom_send = async (params: ITransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params));
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params));
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
        let transferOwnership_send = async (newOwner:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner]);
            return result;
        }
        let transferOwnership_call = async (newOwner:string): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner]);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let unlock_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('unlock');
            return result;
        }
        let unlock_call = async (): Promise<void> => {
            let result = await this.call('unlock');
            return;
        }
        this.unlock = Object.assign(unlock_send, {
            call:unlock_call
        });
    }
}
export module VestingToken{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface LockEvent {account:string,direct:BigNumber,amount:BigNumber,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface RedeemEvent {account:string,amount:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}