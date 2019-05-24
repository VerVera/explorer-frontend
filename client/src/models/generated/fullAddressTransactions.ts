/**
 * Ergo blockchain explorer
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { Asset } from './asset';


export interface FullAddressTransactions {
    /**
     * Total number of confirmed transactions
     */
    confirmed: number;
    /**
     * Total recieved coins
     */
    totalReceived: number;
    /**
     * Confirmed balance
     */
    confirmedBalance: number;
    /**
     * Total balance including off-chain transactions
     */
    totalBalance?: number;
    /**
     * Confirmed tokens balance
     */
    confirmedTokensBalance?: Array<Asset>;
    /**
     * Total tokens balance including off-chain transactions
     */
    totalTokensBalance?: Array<Asset>;
}