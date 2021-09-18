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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ModelsNpcFaction } from '../models';
/**
 * NpcFactionApi - axios parameter creator
 * @export
 */
export const NpcFactionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates NpcFaction
         * @param {ModelsNpcFaction} npcFaction NpcFaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNpcFaction: async (npcFaction: ModelsNpcFaction, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'npcFaction' is not null or undefined
            if (npcFaction === null || npcFaction === undefined) {
                throw new RequiredError('npcFaction','Required parameter npcFaction was null or undefined when calling createNpcFaction.');
            }
            const localVarPath = `/npc_faction`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof npcFaction !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(npcFaction !== undefined ? npcFaction : {})
                : (npcFaction || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes NpcFaction
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNpcFaction: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteNpcFaction.');
            }
            const localVarPath = `/npc_faction/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets NpcFaction
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcFactionEntries
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNpcFaction: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getNpcFaction.');
            }
            const localVarPath = `/npc_faction/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Lists NpcFactions
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcFactionEntries
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNpcFactions: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/npc_factions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (where !== undefined) {
                localVarQueryParameter['where'] = where;
            }

            if (whereOr !== undefined) {
                localVarQueryParameter['whereOr'] = whereOr;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderDirection !== undefined) {
                localVarQueryParameter['orderDirection'] = orderDirection;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates NpcFaction
         * @param {number} id Id
         * @param {ModelsNpcFaction} npcFaction NpcFaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNpcFaction: async (id: number, npcFaction: ModelsNpcFaction, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateNpcFaction.');
            }
            // verify required parameter 'npcFaction' is not null or undefined
            if (npcFaction === null || npcFaction === undefined) {
                throw new RequiredError('npcFaction','Required parameter npcFaction was null or undefined when calling updateNpcFaction.');
            }
            const localVarPath = `/npc_faction/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof npcFaction !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(npcFaction !== undefined ? npcFaction : {})
                : (npcFaction || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NpcFactionApi - functional programming interface
 * @export
 */
export const NpcFactionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates NpcFaction
         * @param {ModelsNpcFaction} npcFaction NpcFaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNpcFaction(npcFaction: ModelsNpcFaction, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcFaction>>> {
            const localVarAxiosArgs = await NpcFactionApiAxiosParamCreator(configuration).createNpcFaction(npcFaction, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes NpcFaction
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNpcFaction(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await NpcFactionApiAxiosParamCreator(configuration).deleteNpcFaction(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets NpcFaction
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcFactionEntries
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNpcFaction(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcFaction>>> {
            const localVarAxiosArgs = await NpcFactionApiAxiosParamCreator(configuration).getNpcFaction(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists NpcFactions
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcFactionEntries
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listNpcFactions(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcFaction>>> {
            const localVarAxiosArgs = await NpcFactionApiAxiosParamCreator(configuration).listNpcFactions(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates NpcFaction
         * @param {number} id Id
         * @param {ModelsNpcFaction} npcFaction NpcFaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNpcFaction(id: number, npcFaction: ModelsNpcFaction, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNpcFaction>>> {
            const localVarAxiosArgs = await NpcFactionApiAxiosParamCreator(configuration).updateNpcFaction(id, npcFaction, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NpcFactionApi - factory interface
 * @export
 */
export const NpcFactionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates NpcFaction
         * @param {ModelsNpcFaction} npcFaction NpcFaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNpcFaction(npcFaction: ModelsNpcFaction, options?: any): AxiosPromise<Array<ModelsNpcFaction>> {
            return NpcFactionApiFp(configuration).createNpcFaction(npcFaction, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes NpcFaction
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNpcFaction(id: number, options?: any): AxiosPromise<string> {
            return NpcFactionApiFp(configuration).deleteNpcFaction(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets NpcFaction
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcFactionEntries
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNpcFaction(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsNpcFaction>> {
            return NpcFactionApiFp(configuration).getNpcFaction(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists NpcFactions
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcFactionEntries
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNpcFactions(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsNpcFaction>> {
            return NpcFactionApiFp(configuration).listNpcFactions(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates NpcFaction
         * @param {number} id Id
         * @param {ModelsNpcFaction} npcFaction NpcFaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNpcFaction(id: number, npcFaction: ModelsNpcFaction, options?: any): AxiosPromise<Array<ModelsNpcFaction>> {
            return NpcFactionApiFp(configuration).updateNpcFaction(id, npcFaction, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNpcFaction operation in NpcFactionApi.
 * @export
 * @interface NpcFactionApiCreateNpcFactionRequest
 */
export interface NpcFactionApiCreateNpcFactionRequest {
    /**
     * NpcFaction
     * @type {ModelsNpcFaction}
     * @memberof NpcFactionApiCreateNpcFaction
     */
    readonly npcFaction: ModelsNpcFaction
}

/**
 * Request parameters for deleteNpcFaction operation in NpcFactionApi.
 * @export
 * @interface NpcFactionApiDeleteNpcFactionRequest
 */
export interface NpcFactionApiDeleteNpcFactionRequest {
    /**
     * Id
     * @type {number}
     * @memberof NpcFactionApiDeleteNpcFaction
     */
    readonly id: number
}

/**
 * Request parameters for getNpcFaction operation in NpcFactionApi.
 * @export
 * @interface NpcFactionApiGetNpcFactionRequest
 */
export interface NpcFactionApiGetNpcFactionRequest {
    /**
     * Id
     * @type {number}
     * @memberof NpcFactionApiGetNpcFaction
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcFactionEntries
     * @type {string}
     * @memberof NpcFactionApiGetNpcFaction
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof NpcFactionApiGetNpcFaction
     */
    readonly select?: string
}

/**
 * Request parameters for listNpcFactions operation in NpcFactionApi.
 * @export
 * @interface NpcFactionApiListNpcFactionsRequest
 */
export interface NpcFactionApiListNpcFactionsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;NpcFactionEntries
     * @type {string}
     * @memberof NpcFactionApiListNpcFactions
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof NpcFactionApiListNpcFactions
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof NpcFactionApiListNpcFactions
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof NpcFactionApiListNpcFactions
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof NpcFactionApiListNpcFactions
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof NpcFactionApiListNpcFactions
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof NpcFactionApiListNpcFactions
     */
    readonly select?: string
}

/**
 * Request parameters for updateNpcFaction operation in NpcFactionApi.
 * @export
 * @interface NpcFactionApiUpdateNpcFactionRequest
 */
export interface NpcFactionApiUpdateNpcFactionRequest {
    /**
     * Id
     * @type {number}
     * @memberof NpcFactionApiUpdateNpcFaction
     */
    readonly id: number

    /**
     * NpcFaction
     * @type {ModelsNpcFaction}
     * @memberof NpcFactionApiUpdateNpcFaction
     */
    readonly npcFaction: ModelsNpcFaction
}

/**
 * NpcFactionApi - object-oriented interface
 * @export
 * @class NpcFactionApi
 * @extends {BaseAPI}
 */
export class NpcFactionApi extends BaseAPI {
    /**
     * 
     * @summary Creates NpcFaction
     * @param {NpcFactionApiCreateNpcFactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcFactionApi
     */
    public createNpcFaction(requestParameters: NpcFactionApiCreateNpcFactionRequest, options?: any) {
        return NpcFactionApiFp(this.configuration).createNpcFaction(requestParameters.npcFaction, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes NpcFaction
     * @param {NpcFactionApiDeleteNpcFactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcFactionApi
     */
    public deleteNpcFaction(requestParameters: NpcFactionApiDeleteNpcFactionRequest, options?: any) {
        return NpcFactionApiFp(this.configuration).deleteNpcFaction(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets NpcFaction
     * @param {NpcFactionApiGetNpcFactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcFactionApi
     */
    public getNpcFaction(requestParameters: NpcFactionApiGetNpcFactionRequest, options?: any) {
        return NpcFactionApiFp(this.configuration).getNpcFaction(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists NpcFactions
     * @param {NpcFactionApiListNpcFactionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcFactionApi
     */
    public listNpcFactions(requestParameters: NpcFactionApiListNpcFactionsRequest = {}, options?: any) {
        return NpcFactionApiFp(this.configuration).listNpcFactions(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates NpcFaction
     * @param {NpcFactionApiUpdateNpcFactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NpcFactionApi
     */
    public updateNpcFaction(requestParameters: NpcFactionApiUpdateNpcFactionRequest, options?: any) {
        return NpcFactionApiFp(this.configuration).updateNpcFaction(requestParameters.id, requestParameters.npcFaction, options).then((request) => request(this.axios, this.basePath));
    }
}
