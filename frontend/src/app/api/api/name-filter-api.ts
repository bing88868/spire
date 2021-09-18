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
import { ModelsNameFilter } from '../models';
/**
 * NameFilterApi - axios parameter creator
 * @export
 */
export const NameFilterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates NameFilter
         * @param {ModelsNameFilter} nameFilter NameFilter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNameFilter: async (nameFilter: ModelsNameFilter, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'nameFilter' is not null or undefined
            if (nameFilter === null || nameFilter === undefined) {
                throw new RequiredError('nameFilter','Required parameter nameFilter was null or undefined when calling createNameFilter.');
            }
            const localVarPath = `/name_filter`;
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
            const nonString = typeof nameFilter !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(nameFilter !== undefined ? nameFilter : {})
                : (nameFilter || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes NameFilter
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNameFilter: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteNameFilter.');
            }
            const localVarPath = `/name_filter/{id}`
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
         * @summary Gets NameFilter
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNameFilter: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getNameFilter.');
            }
            const localVarPath = `/name_filter/{id}`
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
         * @summary Lists NameFilters
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
        listNameFilters: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/name_filters`;
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
         * @summary Updates NameFilter
         * @param {number} id Id
         * @param {ModelsNameFilter} nameFilter NameFilter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNameFilter: async (id: number, nameFilter: ModelsNameFilter, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateNameFilter.');
            }
            // verify required parameter 'nameFilter' is not null or undefined
            if (nameFilter === null || nameFilter === undefined) {
                throw new RequiredError('nameFilter','Required parameter nameFilter was null or undefined when calling updateNameFilter.');
            }
            const localVarPath = `/name_filter/{id}`
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
            const nonString = typeof nameFilter !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(nameFilter !== undefined ? nameFilter : {})
                : (nameFilter || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NameFilterApi - functional programming interface
 * @export
 */
export const NameFilterApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates NameFilter
         * @param {ModelsNameFilter} nameFilter NameFilter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNameFilter(nameFilter: ModelsNameFilter, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNameFilter>>> {
            const localVarAxiosArgs = await NameFilterApiAxiosParamCreator(configuration).createNameFilter(nameFilter, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes NameFilter
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNameFilter(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await NameFilterApiAxiosParamCreator(configuration).deleteNameFilter(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets NameFilter
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNameFilter(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNameFilter>>> {
            const localVarAxiosArgs = await NameFilterApiAxiosParamCreator(configuration).getNameFilter(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists NameFilters
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
        async listNameFilters(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNameFilter>>> {
            const localVarAxiosArgs = await NameFilterApiAxiosParamCreator(configuration).listNameFilters(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates NameFilter
         * @param {number} id Id
         * @param {ModelsNameFilter} nameFilter NameFilter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNameFilter(id: number, nameFilter: ModelsNameFilter, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsNameFilter>>> {
            const localVarAxiosArgs = await NameFilterApiAxiosParamCreator(configuration).updateNameFilter(id, nameFilter, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NameFilterApi - factory interface
 * @export
 */
export const NameFilterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates NameFilter
         * @param {ModelsNameFilter} nameFilter NameFilter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNameFilter(nameFilter: ModelsNameFilter, options?: any): AxiosPromise<Array<ModelsNameFilter>> {
            return NameFilterApiFp(configuration).createNameFilter(nameFilter, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes NameFilter
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNameFilter(id: number, options?: any): AxiosPromise<string> {
            return NameFilterApiFp(configuration).deleteNameFilter(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets NameFilter
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNameFilter(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsNameFilter>> {
            return NameFilterApiFp(configuration).getNameFilter(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists NameFilters
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
        listNameFilters(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsNameFilter>> {
            return NameFilterApiFp(configuration).listNameFilters(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates NameFilter
         * @param {number} id Id
         * @param {ModelsNameFilter} nameFilter NameFilter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNameFilter(id: number, nameFilter: ModelsNameFilter, options?: any): AxiosPromise<Array<ModelsNameFilter>> {
            return NameFilterApiFp(configuration).updateNameFilter(id, nameFilter, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNameFilter operation in NameFilterApi.
 * @export
 * @interface NameFilterApiCreateNameFilterRequest
 */
export interface NameFilterApiCreateNameFilterRequest {
    /**
     * NameFilter
     * @type {ModelsNameFilter}
     * @memberof NameFilterApiCreateNameFilter
     */
    readonly nameFilter: ModelsNameFilter
}

/**
 * Request parameters for deleteNameFilter operation in NameFilterApi.
 * @export
 * @interface NameFilterApiDeleteNameFilterRequest
 */
export interface NameFilterApiDeleteNameFilterRequest {
    /**
     * Id
     * @type {number}
     * @memberof NameFilterApiDeleteNameFilter
     */
    readonly id: number
}

/**
 * Request parameters for getNameFilter operation in NameFilterApi.
 * @export
 * @interface NameFilterApiGetNameFilterRequest
 */
export interface NameFilterApiGetNameFilterRequest {
    /**
     * Id
     * @type {number}
     * @memberof NameFilterApiGetNameFilter
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof NameFilterApiGetNameFilter
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof NameFilterApiGetNameFilter
     */
    readonly select?: string
}

/**
 * Request parameters for listNameFilters operation in NameFilterApi.
 * @export
 * @interface NameFilterApiListNameFiltersRequest
 */
export interface NameFilterApiListNameFiltersRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof NameFilterApiListNameFilters
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof NameFilterApiListNameFilters
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof NameFilterApiListNameFilters
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof NameFilterApiListNameFilters
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof NameFilterApiListNameFilters
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof NameFilterApiListNameFilters
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof NameFilterApiListNameFilters
     */
    readonly select?: string
}

/**
 * Request parameters for updateNameFilter operation in NameFilterApi.
 * @export
 * @interface NameFilterApiUpdateNameFilterRequest
 */
export interface NameFilterApiUpdateNameFilterRequest {
    /**
     * Id
     * @type {number}
     * @memberof NameFilterApiUpdateNameFilter
     */
    readonly id: number

    /**
     * NameFilter
     * @type {ModelsNameFilter}
     * @memberof NameFilterApiUpdateNameFilter
     */
    readonly nameFilter: ModelsNameFilter
}

/**
 * NameFilterApi - object-oriented interface
 * @export
 * @class NameFilterApi
 * @extends {BaseAPI}
 */
export class NameFilterApi extends BaseAPI {
    /**
     * 
     * @summary Creates NameFilter
     * @param {NameFilterApiCreateNameFilterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NameFilterApi
     */
    public createNameFilter(requestParameters: NameFilterApiCreateNameFilterRequest, options?: any) {
        return NameFilterApiFp(this.configuration).createNameFilter(requestParameters.nameFilter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes NameFilter
     * @param {NameFilterApiDeleteNameFilterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NameFilterApi
     */
    public deleteNameFilter(requestParameters: NameFilterApiDeleteNameFilterRequest, options?: any) {
        return NameFilterApiFp(this.configuration).deleteNameFilter(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets NameFilter
     * @param {NameFilterApiGetNameFilterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NameFilterApi
     */
    public getNameFilter(requestParameters: NameFilterApiGetNameFilterRequest, options?: any) {
        return NameFilterApiFp(this.configuration).getNameFilter(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists NameFilters
     * @param {NameFilterApiListNameFiltersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NameFilterApi
     */
    public listNameFilters(requestParameters: NameFilterApiListNameFiltersRequest = {}, options?: any) {
        return NameFilterApiFp(this.configuration).listNameFilters(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates NameFilter
     * @param {NameFilterApiUpdateNameFilterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NameFilterApi
     */
    public updateNameFilter(requestParameters: NameFilterApiUpdateNameFilterRequest, options?: any) {
        return NameFilterApiFp(this.configuration).updateNameFilter(requestParameters.id, requestParameters.nameFilter, options).then((request) => request(this.axios, this.basePath));
    }
}
