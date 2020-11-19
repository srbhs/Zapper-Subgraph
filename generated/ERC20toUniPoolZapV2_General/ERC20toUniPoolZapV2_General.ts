// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class details extends ethereum.Event {
  get params(): details__Params {
    return new details__Params(this);
  }
}

export class details__Params {
  _event: details;

  constructor(event: details) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get toWhomIssued(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get IncomingTokenAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get UniPoolUnderlyingTokenAddressTokenAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class residualETH extends ethereum.Event {
  get params(): residualETH__Params {
    return new residualETH__Params(this);
  }
}

export class residualETH__Params {
  _event: residualETH;

  constructor(event: residualETH) {
    this._event = event;
  }

  get residualETHtransferred(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ERC20toUniPoolZapV2_General extends ethereum.SmartContract {
  static bind(address: Address): ERC20toUniPoolZapV2_General {
    return new ERC20toUniPoolZapV2_General(
      "ERC20toUniPoolZapV2_General",
      address
    );
  }

  LetsInvest(
    _toWhomToIssue: Address,
    _IncomingTokenContractAddress: Address,
    _IncomingTokenQty: BigInt,
    _UniPoolsUnderlyingTokenAddress: Address
  ): boolean {
    let result = super.call(
      "LetsInvest",
      "LetsInvest(address,address,uint256,address):(bool)",
      [
        ethereum.Value.fromAddress(_toWhomToIssue),
        ethereum.Value.fromAddress(_IncomingTokenContractAddress),
        ethereum.Value.fromUnsignedBigInt(_IncomingTokenQty),
        ethereum.Value.fromAddress(_UniPoolsUnderlyingTokenAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_LetsInvest(
    _toWhomToIssue: Address,
    _IncomingTokenContractAddress: Address,
    _IncomingTokenQty: BigInt,
    _UniPoolsUnderlyingTokenAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "LetsInvest",
      "LetsInvest(address,address,uint256,address):(bool)",
      [
        ethereum.Value.fromAddress(_toWhomToIssue),
        ethereum.Value.fromAddress(_IncomingTokenContractAddress),
        ethereum.Value.fromUnsignedBigInt(_IncomingTokenQty),
        ethereum.Value.fromAddress(_UniPoolsUnderlyingTokenAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  UniSwapFactoryAddress(): Address {
    let result = super.call(
      "UniSwapFactoryAddress",
      "UniSwapFactoryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_UniSwapFactoryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "UniSwapFactoryAddress",
      "UniSwapFactoryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class LetsInvestCall extends ethereum.Call {
  get inputs(): LetsInvestCall__Inputs {
    return new LetsInvestCall__Inputs(this);
  }

  get outputs(): LetsInvestCall__Outputs {
    return new LetsInvestCall__Outputs(this);
  }
}

export class LetsInvestCall__Inputs {
  _call: LetsInvestCall;

  constructor(call: LetsInvestCall) {
    this._call = call;
  }

  get _toWhomToIssue(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _IncomingTokenContractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _IncomingTokenQty(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _UniPoolsUnderlyingTokenAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class LetsInvestCall__Outputs {
  _call: LetsInvestCall;

  constructor(call: LetsInvestCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InCaseTokengetsStuckCall extends ethereum.Call {
  get inputs(): InCaseTokengetsStuckCall__Inputs {
    return new InCaseTokengetsStuckCall__Inputs(this);
  }

  get outputs(): InCaseTokengetsStuckCall__Outputs {
    return new InCaseTokengetsStuckCall__Outputs(this);
  }
}

export class InCaseTokengetsStuckCall__Inputs {
  _call: InCaseTokengetsStuckCall;

  constructor(call: InCaseTokengetsStuckCall) {
    this._call = call;
  }

  get _TokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InCaseTokengetsStuckCall__Outputs {
  _call: InCaseTokengetsStuckCall;

  constructor(call: InCaseTokengetsStuckCall) {
    this._call = call;
  }
}

export class ToggleContractActiveCall extends ethereum.Call {
  get inputs(): ToggleContractActiveCall__Inputs {
    return new ToggleContractActiveCall__Inputs(this);
  }

  get outputs(): ToggleContractActiveCall__Outputs {
    return new ToggleContractActiveCall__Outputs(this);
  }
}

export class ToggleContractActiveCall__Inputs {
  _call: ToggleContractActiveCall;

  constructor(call: ToggleContractActiveCall) {
    this._call = call;
  }
}

export class ToggleContractActiveCall__Outputs {
  _call: ToggleContractActiveCall;

  constructor(call: ToggleContractActiveCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
