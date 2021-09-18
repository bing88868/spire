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
import { ModelsFactionListMod } from '../models';
/**
 * FactionListModApi - axios parameter creator
 * @export
 */
export const FactionListModApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates FactionListMod
         * @param {ModelsFactionListMod} factionListMod FactionListMod
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFactionListMod: async (factionListMod: ModelsFactionListMod, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'factionListMod' is not null or undefined
            if (factionListMod === null || factionListMod === undefined) {
                throw new RequiredError('factionListMod','Required parameter factionListMod was null or undefined when calling createFactionListMod.');
            }
            const localVarPath = `/faction_list_mod`;
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
            const nonString = typeof factionListMod !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(factionListMod !== undefined ? factionListMod : {})
                : (factionListMod || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes FactionListMod
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFactionListMod: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteFactionListMod.');
            }
            const localVarPath = `/faction_list_mod/{id}`
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
         * @summary Gets FactionListMod
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFactionListMod: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getFactionListMod.');
            }
            const localVarPath = `/faction_list_mod/{id}`
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
         * @summary Lists FactionListMods
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFactionListMods: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/faction_list_mods`;
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
         * @summary Updates FactionListMod
         * @param {number} id Id
         * @param {ModelsFactionListMod} factionListMod FactionListMod
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFactionListMod: async (id: number, factionListMod: ModelsFactionListMod, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateFactionListMod.');
            }
            // verify required parameter 'factionListMod' is not null or undefined
            if (factionListMod === null || factionListMod === undefined) {
                throw new RequiredError('factionListMod','Required parameter factionListMod was null or undefined when calling updateFactionListMod.');
            }
            const localVarPath = `/faction_list_mod/{id}`
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
            const nonString = typeof factionListMod !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(factionListMod !== undefined ? factionListMod : {})
                : (factionListMod || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FactionListModApi - functional programming interface
 * @export
 */
export const FactionListModApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates FactionListMod
         * @param {ModelsFactionListMod} factionListMod FactionListMod
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFactionListMod(factionListMod: ModelsFactionListMod, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsFactionListMod>>> {
            const localVarAxiosArgs = await FactionListModApiAxiosParamCreator(configuration).createFactionListMod(factionListMod, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes FactionListMod
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFactionListMod(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await FactionListModApiAxiosParamCreator(configuration).deleteFactionListMod(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets FactionListMod
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFactionListMod(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsFactionListMod>>> {
            const localVarAxiosArgs = await FactionListModApiAxiosParamCreator(configuration).getFactionListMod(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists FactionListMods
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFactionListMods(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsFactionListMod>>> {
            const localVarAxiosArgs = await FactionListModApiAxiosParamCreator(configuration).listFactionListMods(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates FactionListMod
         * @param {number} id Id
         * @param {ModelsFactionListMod} factionListMod FactionListMod
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFactionListMod(id: number, factionListMod: ModelsFactionListMod, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsFactionListMod>>> {
            const localVarAxiosArgs = await FactionListModApiAxiosParamCreator(configuration).updateFactionListMod(id, factionListMod, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * FactionListModApi - factory interface
 * @export
 */
export const FactionListModApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates FactionListMod
         * @param {ModelsFactionListMod} factionListMod FactionListMod
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFactionListMod(factionListMod: ModelsFactionListMod, options?: any): AxiosPromise<Array<ModelsFactionListMod>> {
            return FactionListModApiFp(configuration).createFactionListMod(factionListMod, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes FactionListMod
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFactionListMod(id: number, options?: any): AxiosPromise<string> {
            return FactionListModApiFp(configuration).deleteFactionListMod(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets FactionListMod
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFactionListMod(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsFactionListMod>> {
            return FactionListModApiFp(configuration).getFactionListMod(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists FactionListMods
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFactionListMods(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsFactionListMod>> {
            return FactionListModApiFp(configuration).listFactionListMods(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates FactionListMod
         * @param {number} id Id
         * @param {ModelsFactionListMod} factionListMod FactionListMod
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFactionListMod(id: number, factionListMod: ModelsFactionListMod, options?: any): AxiosPromise<Array<ModelsFactionListMod>> {
            return FactionListModApiFp(configuration).updateFactionListMod(id, factionListMod, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createFactionListMod operation in FactionListModApi.
 * @export
 * @interface FactionListModApiCreateFactionListModRequest
 */
export interface FactionListModApiCreateFactionListModRequest {
    /**
     * FactionListMod
     * @type {ModelsFactionListMod}
     * @memberof FactionListModApiCreateFactionListMod
     */
    readonly factionListMod: ModelsFactionListMod
}

/**
 * Request parameters for deleteFactionListMod operation in FactionListModApi.
 * @export
 * @interface FactionListModApiDeleteFactionListModRequest
 */
export interface FactionListModApiDeleteFactionListModRequest {
    /**
     * Id
     * @type {number}
     * @memberof FactionListModApiDeleteFactionListMod
     */
    readonly id: number
}

/**
 * Request parameters for getFactionListMod operation in FactionListModApi.
 * @export
 * @interface FactionListModApiGetFactionListModRequest
 */
export interface FactionListModApiGetFactionListModRequest {
    /**
     * Id
     * @type {number}
     * @memberof FactionListModApiGetFactionListMod
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof FactionListModApiGetFactionListMod
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof FactionListModApiGetFactionListMod
     */
    readonly select?: string
}

/**
 * Request parameters for listFactionListMods operation in FactionListModApi.
 * @export
 * @interface FactionListModApiListFactionListModsRequest
 */
export interface FactionListModApiListFactionListModsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof FactionListModApiListFactionListMods
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof FactionListModApiListFactionListMods
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof FactionListModApiListFactionListMods
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof FactionListModApiListFactionListMods
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof FactionListModApiListFactionListMods
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof FactionListModApiListFactionListMods
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof FactionListModApiListFactionListMods
     */
    readonly select?: string
}

/**
 * Request parameters for updateFactionListMod operation in FactionListModApi.
 * @export
 * @interface FactionListModApiUpdateFactionListModRequest
 */
export interface FactionListModApiUpdateFactionListModRequest {
    /**
     * Id
     * @type {number}
     * @memberof FactionListModApiUpdateFactionListMod
     */
    readonly id: number

    /**
     * FactionListMod
     * @type {ModelsFactionListMod}
     * @memberof FactionListModApiUpdateFactionListMod
     */
    readonly factionListMod: ModelsFactionListMod
}

/**
 * FactionListModApi - object-oriented interface
 * @export
 * @class FactionListModApi
 * @extends {BaseAPI}
 */
export class FactionListModApi extends BaseAPI {
    /**
     * 
     * @summary Creates FactionListMod
     * @param {FactionListModApiCreateFactionListModRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionListModApi
     */
    public createFactionListMod(requestParameters: FactionListModApiCreateFactionListModRequest, options?: any) {
        return FactionListModApiFp(this.configuration).createFactionListMod(requestParameters.factionListMod, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes FactionListMod
     * @param {FactionListModApiDeleteFactionListModRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionListModApi
     */
    public deleteFactionListMod(requestParameters: FactionListModApiDeleteFactionListModRequest, options?: any) {
        return FactionListModApiFp(this.configuration).deleteFactionListMod(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets FactionListMod
     * @param {FactionListModApiGetFactionListModRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionListModApi
     */
    public getFactionListMod(requestParameters: FactionListModApiGetFactionListModRequest, options?: any) {
        return FactionListModApiFp(this.configuration).getFactionListMod(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists FactionListMods
     * @param {FactionListModApiListFactionListModsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionListModApi
     */
    public listFactionListMods(requestParameters: FactionListModApiListFactionListModsRequest = {}, options?: any) {
        return FactionListModApiFp(this.configuration).listFactionListMods(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates FactionListMod
     * @param {FactionListModApiUpdateFactionListModRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionListModApi
     */
    public updateFactionListMod(requestParameters: FactionListModApiUpdateFactionListModRequest, options?: any) {
        return FactionListModApiFp(this.configuration).updateFactionListMod(requestParameters.id, requestParameters.factionListMod, options).then((request) => request(this.axios, this.basePath));
    }
}
