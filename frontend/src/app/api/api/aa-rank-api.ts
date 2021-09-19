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
import { ModelsAaRank } from '../models';
/**
 * AaRankApi - axios parameter creator
 * @export
 */
export const AaRankApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates AaRank
         * @param {ModelsAaRank} aaRank AaRank
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAaRank: async (aaRank: ModelsAaRank, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'aaRank' is not null or undefined
            if (aaRank === null || aaRank === undefined) {
                throw new RequiredError('aaRank','Required parameter aaRank was null or undefined when calling createAaRank.');
            }
            const localVarPath = `/aa_rank`;
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
            const nonString = typeof aaRank !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(aaRank !== undefined ? aaRank : {})
                : (aaRank || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes AaRank
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAaRank: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAaRank.');
            }
            const localVarPath = `/aa_rank/{id}`
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
         * @summary Gets AaRank
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAaRank: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getAaRank.');
            }
            const localVarPath = `/aa_rank/{id}`
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
         * @summary Lists AaRanks
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
        listAaRanks: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/aa_ranks`;
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
         * @summary Updates AaRank
         * @param {number} id Id
         * @param {ModelsAaRank} aaRank AaRank
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAaRank: async (id: number, aaRank: ModelsAaRank, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateAaRank.');
            }
            // verify required parameter 'aaRank' is not null or undefined
            if (aaRank === null || aaRank === undefined) {
                throw new RequiredError('aaRank','Required parameter aaRank was null or undefined when calling updateAaRank.');
            }
            const localVarPath = `/aa_rank/{id}`
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
            const nonString = typeof aaRank !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(aaRank !== undefined ? aaRank : {})
                : (aaRank || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AaRankApi - functional programming interface
 * @export
 */
export const AaRankApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates AaRank
         * @param {ModelsAaRank} aaRank AaRank
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAaRank(aaRank: ModelsAaRank, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaRank>>> {
            const localVarAxiosArgs = await AaRankApiAxiosParamCreator(configuration).createAaRank(aaRank, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes AaRank
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAaRank(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await AaRankApiAxiosParamCreator(configuration).deleteAaRank(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets AaRank
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAaRank(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaRank>>> {
            const localVarAxiosArgs = await AaRankApiAxiosParamCreator(configuration).getAaRank(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists AaRanks
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
        async listAaRanks(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaRank>>> {
            const localVarAxiosArgs = await AaRankApiAxiosParamCreator(configuration).listAaRanks(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates AaRank
         * @param {number} id Id
         * @param {ModelsAaRank} aaRank AaRank
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAaRank(id: number, aaRank: ModelsAaRank, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaRank>>> {
            const localVarAxiosArgs = await AaRankApiAxiosParamCreator(configuration).updateAaRank(id, aaRank, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AaRankApi - factory interface
 * @export
 */
export const AaRankApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates AaRank
         * @param {ModelsAaRank} aaRank AaRank
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAaRank(aaRank: ModelsAaRank, options?: any): AxiosPromise<Array<ModelsAaRank>> {
            return AaRankApiFp(configuration).createAaRank(aaRank, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes AaRank
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAaRank(id: number, options?: any): AxiosPromise<string> {
            return AaRankApiFp(configuration).deleteAaRank(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets AaRank
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAaRank(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsAaRank>> {
            return AaRankApiFp(configuration).getAaRank(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists AaRanks
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
        listAaRanks(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsAaRank>> {
            return AaRankApiFp(configuration).listAaRanks(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates AaRank
         * @param {number} id Id
         * @param {ModelsAaRank} aaRank AaRank
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAaRank(id: number, aaRank: ModelsAaRank, options?: any): AxiosPromise<Array<ModelsAaRank>> {
            return AaRankApiFp(configuration).updateAaRank(id, aaRank, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAaRank operation in AaRankApi.
 * @export
 * @interface AaRankApiCreateAaRankRequest
 */
export interface AaRankApiCreateAaRankRequest {
    /**
     * AaRank
     * @type {ModelsAaRank}
     * @memberof AaRankApiCreateAaRank
     */
    readonly aaRank: ModelsAaRank
}

/**
 * Request parameters for deleteAaRank operation in AaRankApi.
 * @export
 * @interface AaRankApiDeleteAaRankRequest
 */
export interface AaRankApiDeleteAaRankRequest {
    /**
     * Id
     * @type {number}
     * @memberof AaRankApiDeleteAaRank
     */
    readonly id: number
}

/**
 * Request parameters for getAaRank operation in AaRankApi.
 * @export
 * @interface AaRankApiGetAaRankRequest
 */
export interface AaRankApiGetAaRankRequest {
    /**
     * Id
     * @type {number}
     * @memberof AaRankApiGetAaRank
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof AaRankApiGetAaRank
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof AaRankApiGetAaRank
     */
    readonly select?: string
}

/**
 * Request parameters for listAaRanks operation in AaRankApi.
 * @export
 * @interface AaRankApiListAaRanksRequest
 */
export interface AaRankApiListAaRanksRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof AaRankApiListAaRanks
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof AaRankApiListAaRanks
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof AaRankApiListAaRanks
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof AaRankApiListAaRanks
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof AaRankApiListAaRanks
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof AaRankApiListAaRanks
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof AaRankApiListAaRanks
     */
    readonly select?: string
}

/**
 * Request parameters for updateAaRank operation in AaRankApi.
 * @export
 * @interface AaRankApiUpdateAaRankRequest
 */
export interface AaRankApiUpdateAaRankRequest {
    /**
     * Id
     * @type {number}
     * @memberof AaRankApiUpdateAaRank
     */
    readonly id: number

    /**
     * AaRank
     * @type {ModelsAaRank}
     * @memberof AaRankApiUpdateAaRank
     */
    readonly aaRank: ModelsAaRank
}

/**
 * AaRankApi - object-oriented interface
 * @export
 * @class AaRankApi
 * @extends {BaseAPI}
 */
export class AaRankApi extends BaseAPI {
    /**
     * 
     * @summary Creates AaRank
     * @param {AaRankApiCreateAaRankRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankApi
     */
    public createAaRank(requestParameters: AaRankApiCreateAaRankRequest, options?: any) {
        return AaRankApiFp(this.configuration).createAaRank(requestParameters.aaRank, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes AaRank
     * @param {AaRankApiDeleteAaRankRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankApi
     */
    public deleteAaRank(requestParameters: AaRankApiDeleteAaRankRequest, options?: any) {
        return AaRankApiFp(this.configuration).deleteAaRank(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets AaRank
     * @param {AaRankApiGetAaRankRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankApi
     */
    public getAaRank(requestParameters: AaRankApiGetAaRankRequest, options?: any) {
        return AaRankApiFp(this.configuration).getAaRank(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists AaRanks
     * @param {AaRankApiListAaRanksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankApi
     */
    public listAaRanks(requestParameters: AaRankApiListAaRanksRequest = {}, options?: any) {
        return AaRankApiFp(this.configuration).listAaRanks(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates AaRank
     * @param {AaRankApiUpdateAaRankRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankApi
     */
    public updateAaRank(requestParameters: AaRankApiUpdateAaRankRequest, options?: any) {
        return AaRankApiFp(this.configuration).updateAaRank(requestParameters.id, requestParameters.aaRank, options).then((request) => request(this.axios, this.basePath));
    }
}