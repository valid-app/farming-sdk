import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./AutoVestingToken.json";

export interface IDeployParams {name:string;symbol:string;start:number|BigNumber;end:number|BigNumber;cap:number|BigNumber;farming:string;redeeming:string}
export interface IAllowanceParams {owner:string;spender:string}
export interface IApproveParams {spender:string;amount:number|BigNumber}
export interface IDecreaseAllowanceParams {spender:string;subtractedValue:number|BigNumber}
export interface IIncreaseAllowanceParams {spender:string;addedValue:number|BigNumber}
export interface IMintParams {account:string;amount:number|BigNumber}
export interface IRedeemParams {account:string;amount:number|BigNumber}
export interface ITransferParams {recipient:string;amount:number|BigNumber}
export interface ITransferFromParams {sender:string;recipient:string;amount:number|BigNumber}
export class AutoVestingToken extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.name,params.symbol,Utils.toString(params.start),Utils.toString(params.end),Utils.toString(params.cap),params.farming,params.redeeming]);
    }
    parseApprovalEvent(receipt: TransactionReceipt): AutoVestingToken.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): AutoVestingToken.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseLockEvent(receipt: TransactionReceipt): AutoVestingToken.LockEvent[]{
        return this.parseEvents(receipt, "Lock").map(e=>this.decodeLockEvent(e));
    }
    decodeLockEvent(event: Event): AutoVestingToken.LockEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseRedeemEvent(receipt: TransactionReceipt): AutoVestingToken.RedeemEvent[]{
        return this.parseEvents(receipt, "Redeem").map(e=>this.decodeRedeemEvent(e));
    }
    decodeRedeemEvent(event: Event): AutoVestingToken.RedeemEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): AutoVestingToken.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): AutoVestingToken.TransferEvent{
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
    duration: {
        (): Promise<BigNumber>;
    }
    end: {
        (): Promise<BigNumber>;
    }
    farming: {
        (): Promise<string>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
    }
    locked: {
        (account:string): Promise<BigNumber>;
    }
    mint: {
        (params: IMintParams): Promise<TransactionReceipt>;
        call: (params: IMintParams) => Promise<void>;
    }
    name: {
        (): Promise<string>;
    }
    redeem: {
        (params: IRedeemParams): Promise<TransactionReceipt>;
        call: (params: IRedeemParams) => Promise<void>;
    }
    redeeming: {
        (): Promise<string>;
    }
    start: {
        (): Promise<BigNumber>;
    }
    symbol: {
        (): Promise<string>;
    }
    totalLocked: {
        (): Promise<BigNumber>;
    }
    totalSupply: {
        (): Promise<BigNumber>;
    }
    totalVestable: {
        (): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    }
    vestable: {
        (param1:string): Promise<BigNumber>;
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
        let duration_call = async (): Promise<BigNumber> => {
            let result = await this.call('duration');
            return new BigNumber(result);
        }
        this.duration = duration_call
        let end_call = async (): Promise<BigNumber> => {
            let result = await this.call('end');
            return new BigNumber(result);
        }
        this.end = end_call
        let farming_call = async (): Promise<string> => {
            let result = await this.call('farming');
            return result;
        }
        this.farming = farming_call
        let locked_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('locked',[account]);
            return new BigNumber(result);
        }
        this.locked = locked_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let redeeming_call = async (): Promise<string> => {
            let result = await this.call('redeeming');
            return result;
        }
        this.redeeming = redeeming_call
        let start_call = async (): Promise<BigNumber> => {
            let result = await this.call('start');
            return new BigNumber(result);
        }
        this.start = start_call
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
        let totalLocked_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalLocked');
            return new BigNumber(result);
        }
        this.totalLocked = totalLocked_call
        let totalSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalSupply');
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let totalVestable_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalVestable');
            return new BigNumber(result);
        }
        this.totalVestable = totalVestable_call
        let vestable_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('vestable',[param1]);
            return new BigNumber(result);
        }
        this.vestable = vestable_call
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
        let mintParams = (params: IMintParams) => [params.account,Utils.toString(params.amount)];
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
    }
}
export module AutoVestingToken{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface LockEvent {account:string,amount:BigNumber,_event:Event}
    export interface RedeemEvent {account:string,amount:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}