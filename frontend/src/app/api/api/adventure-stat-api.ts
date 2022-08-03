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
import { ModelsAdventureStat } from '../models';
/**
 * AdventureStatApi - axios parameter creator
 * @export
 */
export const AdventureStatApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates AdventureStat
         * @param {ModelsAdventureStat} adventureStat AdventureStat
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAdventureStat: async (adventureStat: ModelsAdventureStat, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'adventureStat' is not null or undefined
            if (adventureStat === null || adventureStat === undefined) {
                throw new RequiredError('adventureStat','Required parameter adventureStat was null or undefined when calling createAdventureStat.');
            }
            const localVarPath = `/adventure_stat`;
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
            const nonString = typeof adventureStat !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(adventureStat !== undefined ? adventureStat : {})
                : (adventureStat || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes AdventureStat
         * @param {number} id playerId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAdventureStat: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAdventureStat.');
            }
            const localVarPath = `/adventure_stat/{id}`
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
         * @summary Gets AdventureStat
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdventureStat: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getAdventureStat.');
            }
            const localVarPath = `/adventure_stat/{id}`
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
         * @summary Gets AdventureStats in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdventureStatsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getAdventureStatsBulk.');
            }
            const localVarPath = `/adventure_stats/bulk`;
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
         * @summary Lists AdventureStats
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
        listAdventureStats: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/adventure_stats`;
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
         * @summary Updates AdventureStat
         * @param {number} id Id
         * @param {ModelsAdventureStat} adventureStat AdventureStat
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAdventureStat: async (id: number, adventureStat: ModelsAdventureStat, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateAdventureStat.');
            }
            // verify required parameter 'adventureStat' is not null or undefined
            if (adventureStat === null || adventureStat === undefined) {
                throw new RequiredError('adventureStat','Required parameter adventureStat was null or undefined when calling updateAdventureStat.');
            }
            const localVarPath = `/adventure_stat/{id}`
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
            const nonString = typeof adventureStat !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(adventureStat !== undefined ? adventureStat : {})
                : (adventureStat || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdventureStatApi - functional programming interface
 * @export
 */
export const AdventureStatApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates AdventureStat
         * @param {ModelsAdventureStat} adventureStat AdventureStat
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAdventureStat(adventureStat: ModelsAdventureStat, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAdventureStat>>> {
            const localVarAxiosArgs = await AdventureStatApiAxiosParamCreator(configuration).createAdventureStat(adventureStat, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes AdventureStat
         * @param {number} id playerId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAdventureStat(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await AdventureStatApiAxiosParamCreator(configuration).deleteAdventureStat(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets AdventureStat
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAdventureStat(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAdventureStat>>> {
            const localVarAxiosArgs = await AdventureStatApiAxiosParamCreator(configuration).getAdventureStat(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets AdventureStats in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAdventureStatsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAdventureStat>>> {
            const localVarAxiosArgs = await AdventureStatApiAxiosParamCreator(configuration).getAdventureStatsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists AdventureStats
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
        async listAdventureStats(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAdventureStat>>> {
            const localVarAxiosArgs = await AdventureStatApiAxiosParamCreator(configuration).listAdventureStats(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates AdventureStat
         * @param {number} id Id
         * @param {ModelsAdventureStat} adventureStat AdventureStat
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAdventureStat(id: number, adventureStat: ModelsAdventureStat, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAdventureStat>>> {
            const localVarAxiosArgs = await AdventureStatApiAxiosParamCreator(configuration).updateAdventureStat(id, adventureStat, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AdventureStatApi - factory interface
 * @export
 */
export const AdventureStatApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates AdventureStat
         * @param {ModelsAdventureStat} adventureStat AdventureStat
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAdventureStat(adventureStat: ModelsAdventureStat, options?: any): AxiosPromise<Array<ModelsAdventureStat>> {
            return AdventureStatApiFp(configuration).createAdventureStat(adventureStat, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes AdventureStat
         * @param {number} id playerId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAdventureStat(id: number, options?: any): AxiosPromise<string> {
            return AdventureStatApiFp(configuration).deleteAdventureStat(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets AdventureStat
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdventureStat(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsAdventureStat>> {
            return AdventureStatApiFp(configuration).getAdventureStat(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets AdventureStats in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdventureStatsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsAdventureStat>> {
            return AdventureStatApiFp(configuration).getAdventureStatsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists AdventureStats
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
        listAdventureStats(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsAdventureStat>> {
            return AdventureStatApiFp(configuration).listAdventureStats(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates AdventureStat
         * @param {number} id Id
         * @param {ModelsAdventureStat} adventureStat AdventureStat
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAdventureStat(id: number, adventureStat: ModelsAdventureStat, options?: any): AxiosPromise<Array<ModelsAdventureStat>> {
            return AdventureStatApiFp(configuration).updateAdventureStat(id, adventureStat, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAdventureStat operation in AdventureStatApi.
 * @export
 * @interface AdventureStatApiCreateAdventureStatRequest
 */
export interface AdventureStatApiCreateAdventureStatRequest {
    /**
     * AdventureStat
     * @type {ModelsAdventureStat}
     * @memberof AdventureStatApiCreateAdventureStat
     */
    readonly adventureStat: ModelsAdventureStat
}

/**
 * Request parameters for deleteAdventureStat operation in AdventureStatApi.
 * @export
 * @interface AdventureStatApiDeleteAdventureStatRequest
 */
export interface AdventureStatApiDeleteAdventureStatRequest {
    /**
     * playerId
     * @type {number}
     * @memberof AdventureStatApiDeleteAdventureStat
     */
    readonly id: number
}

/**
 * Request parameters for getAdventureStat operation in AdventureStatApi.
 * @export
 * @interface AdventureStatApiGetAdventureStatRequest
 */
export interface AdventureStatApiGetAdventureStatRequest {
    /**
     * Id
     * @type {number}
     * @memberof AdventureStatApiGetAdventureStat
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof AdventureStatApiGetAdventureStat
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof AdventureStatApiGetAdventureStat
     */
    readonly select?: string
}

/**
 * Request parameters for getAdventureStatsBulk operation in AdventureStatApi.
 * @export
 * @interface AdventureStatApiGetAdventureStatsBulkRequest
 */
export interface AdventureStatApiGetAdventureStatsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof AdventureStatApiGetAdventureStatsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listAdventureStats operation in AdventureStatApi.
 * @export
 * @interface AdventureStatApiListAdventureStatsRequest
 */
export interface AdventureStatApiListAdventureStatsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof AdventureStatApiListAdventureStats
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof AdventureStatApiListAdventureStats
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof AdventureStatApiListAdventureStats
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof AdventureStatApiListAdventureStats
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof AdventureStatApiListAdventureStats
     */
    readonly limit?: string

    /**
     * Pagination page
     * @type {number}
     * @memberof AdventureStatApiListAdventureStats
     */
    readonly page?: number

    /**
     * Order by [field]
     * @type {string}
     * @memberof AdventureStatApiListAdventureStats
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof AdventureStatApiListAdventureStats
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof AdventureStatApiListAdventureStats
     */
    readonly select?: string
}

/**
 * Request parameters for updateAdventureStat operation in AdventureStatApi.
 * @export
 * @interface AdventureStatApiUpdateAdventureStatRequest
 */
export interface AdventureStatApiUpdateAdventureStatRequest {
    /**
     * Id
     * @type {number}
     * @memberof AdventureStatApiUpdateAdventureStat
     */
    readonly id: number

    /**
     * AdventureStat
     * @type {ModelsAdventureStat}
     * @memberof AdventureStatApiUpdateAdventureStat
     */
    readonly adventureStat: ModelsAdventureStat
}

/**
 * AdventureStatApi - object-oriented interface
 * @export
 * @class AdventureStatApi
 * @extends {BaseAPI}
 */
export class AdventureStatApi extends BaseAPI {
    /**
     * 
     * @summary Creates AdventureStat
     * @param {AdventureStatApiCreateAdventureStatRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureStatApi
     */
    public createAdventureStat(requestParameters: AdventureStatApiCreateAdventureStatRequest, options?: any) {
        return AdventureStatApiFp(this.configuration).createAdventureStat(requestParameters.adventureStat, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes AdventureStat
     * @param {AdventureStatApiDeleteAdventureStatRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureStatApi
     */
    public deleteAdventureStat(requestParameters: AdventureStatApiDeleteAdventureStatRequest, options?: any) {
        return AdventureStatApiFp(this.configuration).deleteAdventureStat(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets AdventureStat
     * @param {AdventureStatApiGetAdventureStatRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureStatApi
     */
    public getAdventureStat(requestParameters: AdventureStatApiGetAdventureStatRequest, options?: any) {
        return AdventureStatApiFp(this.configuration).getAdventureStat(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets AdventureStats in bulk
     * @param {AdventureStatApiGetAdventureStatsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureStatApi
     */
    public getAdventureStatsBulk(requestParameters: AdventureStatApiGetAdventureStatsBulkRequest, options?: any) {
        return AdventureStatApiFp(this.configuration).getAdventureStatsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists AdventureStats
     * @param {AdventureStatApiListAdventureStatsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureStatApi
     */
    public listAdventureStats(requestParameters: AdventureStatApiListAdventureStatsRequest = {}, options?: any) {
        return AdventureStatApiFp(this.configuration).listAdventureStats(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.page, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates AdventureStat
     * @param {AdventureStatApiUpdateAdventureStatRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdventureStatApi
     */
    public updateAdventureStat(requestParameters: AdventureStatApiUpdateAdventureStatRequest, options?: any) {
        return AdventureStatApiFp(this.configuration).updateAdventureStat(requestParameters.id, requestParameters.adventureStat, options).then((request) => request(this.axios, this.basePath));
    }
}
