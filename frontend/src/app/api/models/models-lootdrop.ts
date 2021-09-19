/* tslint:disable */
/* eslint-disable */
/**
 * Spire
 * Spire API documentation
 *
 * The version of the OpenAPI document: 3.0
 * Contact: akkadius1@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ModelsLootdropEntry } from './models-lootdrop-entry';

/**
 * 
 * @export
 * @interface ModelsLootdrop
 */
export interface ModelsLootdrop {
    /**
     * 
     * @type {string}
     * @memberof ModelsLootdrop
     */
    content_flags?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsLootdrop
     */
    content_flags_disabled?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsLootdrop
     */
    id?: number;
    /**
     * 
     * @type {Array<ModelsLootdropEntry>}
     * @memberof ModelsLootdrop
     */
    lootdrop_entries?: Array<ModelsLootdropEntry>;
    /**
     * 
     * @type {number}
     * @memberof ModelsLootdrop
     */
    max_expansion?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsLootdrop
     */
    min_expansion?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsLootdrop
     */
    name?: string;
}

