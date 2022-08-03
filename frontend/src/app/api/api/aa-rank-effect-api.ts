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
import { CrudcontrollersBulkFetchByIdsGetRequest } from '../models';
// @ts-ignore
import { ModelsAaRankEffect } from '../models';
/**
 * AaRankEffectApi - axios parameter creator
 * @export
 */
export const AaRankEffectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates AaRankEffect
         * @param {ModelsAaRankEffect} aaRankEffect AaRankEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAaRankEffect: async (aaRankEffect: ModelsAaRankEffect, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'aaRankEffect' is not null or undefined
            if (aaRankEffect === null || aaRankEffect === undefined) {
                throw new RequiredError('aaRankEffect','Required parameter aaRankEffect was null or undefined when calling createAaRankEffect.');
            }
            const localVarPath = `/aa_rank_effect`;
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
            const nonString = typeof aaRankEffect !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(aaRankEffect !== undefined ? aaRankEffect : {})
                : (aaRankEffect || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes AaRankEffect
         * @param {number} id rankId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAaRankEffect: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAaRankEffect.');
            }
            const localVarPath = `/aa_rank_effect/{id}`
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
         * @summary Gets AaRankEffect
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAaRankEffect: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getAaRankEffect.');
            }
            const localVarPath = `/aa_rank_effect/{id}`
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
         * @summary Gets AaRankEffects in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAaRankEffectsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getAaRankEffectsBulk.');
            }
            const localVarPath = `/aa_rank_effects/bulk`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
            const nonString = typeof body !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(body !== undefined ? body : {})
                : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Lists AaRankEffects
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {number} [page] Pagination page
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAaRankEffects: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/aa_rank_effects`;
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

            if (groupBy !== undefined) {
                localVarQueryParameter['groupBy'] = groupBy;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
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
         * @summary Updates AaRankEffect
         * @param {number} id Id
         * @param {ModelsAaRankEffect} aaRankEffect AaRankEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAaRankEffect: async (id: number, aaRankEffect: ModelsAaRankEffect, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateAaRankEffect.');
            }
            // verify required parameter 'aaRankEffect' is not null or undefined
            if (aaRankEffect === null || aaRankEffect === undefined) {
                throw new RequiredError('aaRankEffect','Required parameter aaRankEffect was null or undefined when calling updateAaRankEffect.');
            }
            const localVarPath = `/aa_rank_effect/{id}`
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
            const nonString = typeof aaRankEffect !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(aaRankEffect !== undefined ? aaRankEffect : {})
                : (aaRankEffect || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AaRankEffectApi - functional programming interface
 * @export
 */
export const AaRankEffectApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates AaRankEffect
         * @param {ModelsAaRankEffect} aaRankEffect AaRankEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAaRankEffect(aaRankEffect: ModelsAaRankEffect, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaRankEffect>>> {
            const localVarAxiosArgs = await AaRankEffectApiAxiosParamCreator(configuration).createAaRankEffect(aaRankEffect, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes AaRankEffect
         * @param {number} id rankId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAaRankEffect(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await AaRankEffectApiAxiosParamCreator(configuration).deleteAaRankEffect(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets AaRankEffect
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAaRankEffect(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaRankEffect>>> {
            const localVarAxiosArgs = await AaRankEffectApiAxiosParamCreator(configuration).getAaRankEffect(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets AaRankEffects in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAaRankEffectsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaRankEffect>>> {
            const localVarAxiosArgs = await AaRankEffectApiAxiosParamCreator(configuration).getAaRankEffectsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists AaRankEffects
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {number} [page] Pagination page
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAaRankEffects(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaRankEffect>>> {
            const localVarAxiosArgs = await AaRankEffectApiAxiosParamCreator(configuration).listAaRankEffects(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates AaRankEffect
         * @param {number} id Id
         * @param {ModelsAaRankEffect} aaRankEffect AaRankEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAaRankEffect(id: number, aaRankEffect: ModelsAaRankEffect, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaRankEffect>>> {
            const localVarAxiosArgs = await AaRankEffectApiAxiosParamCreator(configuration).updateAaRankEffect(id, aaRankEffect, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AaRankEffectApi - factory interface
 * @export
 */
export const AaRankEffectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates AaRankEffect
         * @param {ModelsAaRankEffect} aaRankEffect AaRankEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAaRankEffect(aaRankEffect: ModelsAaRankEffect, options?: any): AxiosPromise<Array<ModelsAaRankEffect>> {
            return AaRankEffectApiFp(configuration).createAaRankEffect(aaRankEffect, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes AaRankEffect
         * @param {number} id rankId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAaRankEffect(id: number, options?: any): AxiosPromise<string> {
            return AaRankEffectApiFp(configuration).deleteAaRankEffect(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets AaRankEffect
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAaRankEffect(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsAaRankEffect>> {
            return AaRankEffectApiFp(configuration).getAaRankEffect(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets AaRankEffects in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAaRankEffectsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsAaRankEffect>> {
            return AaRankEffectApiFp(configuration).getAaRankEffectsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists AaRankEffects
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {number} [page] Pagination page
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAaRankEffects(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsAaRankEffect>> {
            return AaRankEffectApiFp(configuration).listAaRankEffects(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates AaRankEffect
         * @param {number} id Id
         * @param {ModelsAaRankEffect} aaRankEffect AaRankEffect
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAaRankEffect(id: number, aaRankEffect: ModelsAaRankEffect, options?: any): AxiosPromise<Array<ModelsAaRankEffect>> {
            return AaRankEffectApiFp(configuration).updateAaRankEffect(id, aaRankEffect, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAaRankEffect operation in AaRankEffectApi.
 * @export
 * @interface AaRankEffectApiCreateAaRankEffectRequest
 */
export interface AaRankEffectApiCreateAaRankEffectRequest {
    /**
     * AaRankEffect
     * @type {ModelsAaRankEffect}
     * @memberof AaRankEffectApiCreateAaRankEffect
     */
    readonly aaRankEffect: ModelsAaRankEffect
}

/**
 * Request parameters for deleteAaRankEffect operation in AaRankEffectApi.
 * @export
 * @interface AaRankEffectApiDeleteAaRankEffectRequest
 */
export interface AaRankEffectApiDeleteAaRankEffectRequest {
    /**
     * rankId
     * @type {number}
     * @memberof AaRankEffectApiDeleteAaRankEffect
     */
    readonly id: number
}

/**
 * Request parameters for getAaRankEffect operation in AaRankEffectApi.
 * @export
 * @interface AaRankEffectApiGetAaRankEffectRequest
 */
export interface AaRankEffectApiGetAaRankEffectRequest {
    /**
     * Id
     * @type {number}
     * @memberof AaRankEffectApiGetAaRankEffect
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof AaRankEffectApiGetAaRankEffect
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof AaRankEffectApiGetAaRankEffect
     */
    readonly select?: string
}

/**
 * Request parameters for getAaRankEffectsBulk operation in AaRankEffectApi.
 * @export
 * @interface AaRankEffectApiGetAaRankEffectsBulkRequest
 */
export interface AaRankEffectApiGetAaRankEffectsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof AaRankEffectApiGetAaRankEffectsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listAaRankEffects operation in AaRankEffectApi.
 * @export
 * @interface AaRankEffectApiListAaRankEffectsRequest
 */
export interface AaRankEffectApiListAaRankEffectsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof AaRankEffectApiListAaRankEffects
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof AaRankEffectApiListAaRankEffects
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof AaRankEffectApiListAaRankEffects
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof AaRankEffectApiListAaRankEffects
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof AaRankEffectApiListAaRankEffects
     */
    readonly limit?: string

    /**
     * Pagination page
     * @type {number}
     * @memberof AaRankEffectApiListAaRankEffects
     */
    readonly page?: number

    /**
     * Order by [field]
     * @type {string}
     * @memberof AaRankEffectApiListAaRankEffects
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof AaRankEffectApiListAaRankEffects
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof AaRankEffectApiListAaRankEffects
     */
    readonly select?: string
}

/**
 * Request parameters for updateAaRankEffect operation in AaRankEffectApi.
 * @export
 * @interface AaRankEffectApiUpdateAaRankEffectRequest
 */
export interface AaRankEffectApiUpdateAaRankEffectRequest {
    /**
     * Id
     * @type {number}
     * @memberof AaRankEffectApiUpdateAaRankEffect
     */
    readonly id: number

    /**
     * AaRankEffect
     * @type {ModelsAaRankEffect}
     * @memberof AaRankEffectApiUpdateAaRankEffect
     */
    readonly aaRankEffect: ModelsAaRankEffect
}

/**
 * AaRankEffectApi - object-oriented interface
 * @export
 * @class AaRankEffectApi
 * @extends {BaseAPI}
 */
export class AaRankEffectApi extends BaseAPI {
    /**
     * 
     * @summary Creates AaRankEffect
     * @param {AaRankEffectApiCreateAaRankEffectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankEffectApi
     */
    public createAaRankEffect(requestParameters: AaRankEffectApiCreateAaRankEffectRequest, options?: any) {
        return AaRankEffectApiFp(this.configuration).createAaRankEffect(requestParameters.aaRankEffect, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes AaRankEffect
     * @param {AaRankEffectApiDeleteAaRankEffectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankEffectApi
     */
    public deleteAaRankEffect(requestParameters: AaRankEffectApiDeleteAaRankEffectRequest, options?: any) {
        return AaRankEffectApiFp(this.configuration).deleteAaRankEffect(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets AaRankEffect
     * @param {AaRankEffectApiGetAaRankEffectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankEffectApi
     */
    public getAaRankEffect(requestParameters: AaRankEffectApiGetAaRankEffectRequest, options?: any) {
        return AaRankEffectApiFp(this.configuration).getAaRankEffect(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets AaRankEffects in bulk
     * @param {AaRankEffectApiGetAaRankEffectsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankEffectApi
     */
    public getAaRankEffectsBulk(requestParameters: AaRankEffectApiGetAaRankEffectsBulkRequest, options?: any) {
        return AaRankEffectApiFp(this.configuration).getAaRankEffectsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists AaRankEffects
     * @param {AaRankEffectApiListAaRankEffectsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankEffectApi
     */
    public listAaRankEffects(requestParameters: AaRankEffectApiListAaRankEffectsRequest = {}, options?: any) {
        return AaRankEffectApiFp(this.configuration).listAaRankEffects(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.page, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates AaRankEffect
     * @param {AaRankEffectApiUpdateAaRankEffectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaRankEffectApi
     */
    public updateAaRankEffect(requestParameters: AaRankEffectApiUpdateAaRankEffectRequest, options?: any) {
        return AaRankEffectApiFp(this.configuration).updateAaRankEffect(requestParameters.id, requestParameters.aaRankEffect, options).then((request) => request(this.axios, this.basePath));
    }
}
