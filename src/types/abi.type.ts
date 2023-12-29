type BasicType = 'uint' | 'int' | 'address' | 'bool' | 'fixed' | 'ufixed' | 'bytes' | 'function';
type ExtendedType = `${BasicType}${number}`; // e.g. 'uint8', 'bytes32'
type ParameterType = BasicType | ExtendedType;

export interface AbiInput {
    name: string;
    type: ParameterType;
    indexed?: boolean;
}

export interface AbiOutput {
    name: string;
    type: ParameterType;
}

export type StateMutabilityType = 'nonpayable' | 'payable' | 'view' | 'pure';
type AbiItemType = 'function' | 'constructor' | 'event' | 'fallback';

export interface AbiItem {
    constant?: boolean;
    inputs: AbiInput[];
    name?: string;
    outputs: AbiOutput[];
    payable?: boolean;
    stateMutability?: StateMutabilityType;
    type: AbiItemType;
    anonymous?: boolean;
}

export type Abi = AbiItem[];
