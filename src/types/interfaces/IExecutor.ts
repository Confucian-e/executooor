/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface IExecutorInterface extends Interface {
  getFunction(
    nameOrSignature: "call_g0oyU7o" | "exec_606BaXt" | "transfer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "call_g0oyU7o",
    values: [AddressLike, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exec_606BaXt",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "call_g0oyU7o",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exec_606BaXt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
}

export interface IExecutor extends BaseContract {
  connect(runner?: ContractRunner | null): IExecutor;
  waitForDeployment(): Promise<this>;

  interface: IExecutorInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  call_g0oyU7o: TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      context: BytesLike,
      callData: BytesLike
    ],
    [void],
    "payable"
  >;

  exec_606BaXt: TypedContractMethod<[data: BytesLike[]], [void], "payable">;

  transfer: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "call_g0oyU7o"
  ): TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      context: BytesLike,
      callData: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "exec_606BaXt"
  ): TypedContractMethod<[data: BytesLike[]], [void], "payable">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [void],
    "payable"
  >;

  filters: {};
}
