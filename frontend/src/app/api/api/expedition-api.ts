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
import { ModelsExpedition } from '../models';
/**
 * ExpeditionApi - axios parameter creator
 * @export
 */
export const ExpeditionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates Expedition
         * @param {ModelsExpedition} expedition Expedition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExpedition: async (expedition: ModelsExpedition, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'expedition' is not null or undefined
            if (expedition === null || expedition === undefined) {
                throw new RequiredError('expedition','Required parameter expedition was null or undefined when calling createExpedition.');
            }
            const localVarPath = `/expedition`;
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
            const nonString = typeof expedition !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(expedition !== undefined ? expedition : {})
                : (expedition || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes Expedition
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteExpedition: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteExpedition.');
            }
            const localVarPath = `/expedition/{id}`
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
         * @summary Gets Expedition
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExpedition: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getExpedition.');
            }
            const localVarPath = `/expedition/{id}`
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
         * @summary Lists Expeditions
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
        listExpeditions: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/expeditions`;
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
         * @summary Updates Expedition
         * @param {number} id Id
         * @param {ModelsExpedition} expedition Expedition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateExpedition: async (id: number, expedition: ModelsExpedition, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateExpedition.');
            }
            // verify required parameter 'expedition' is not null or undefined
            if (expedition === null || expedition === undefined) {
                throw new RequiredError('expedition','Required parameter expedition was null or undefined when calling updateExpedition.');
            }
            const localVarPath = `/expedition/{id}`
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
            const nonString = typeof expedition !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(expedition !== undefined ? expedition : {})
                : (expedition || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExpeditionApi - functional programming interface
 * @export
 */
export const ExpeditionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates Expedition
         * @param {ModelsExpedition} expedition Expedition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createExpedition(expedition: ModelsExpedition, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsExpedition>>> {
            const localVarAxiosArgs = await ExpeditionApiAxiosParamCreator(configuration).createExpedition(expedition, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes Expedition
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteExpedition(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await ExpeditionApiAxiosParamCreator(configuration).deleteExpedition(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets Expedition
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExpedition(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsExpedition>>> {
            const localVarAxiosArgs = await ExpeditionApiAxiosParamCreator(configuration).getExpedition(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists Expeditions
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
        async listExpeditions(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsExpedition>>> {
            const localVarAxiosArgs = await ExpeditionApiAxiosParamCreator(configuration).listExpeditions(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates Expedition
         * @param {number} id Id
         * @param {ModelsExpedition} expedition Expedition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateExpedition(id: number, expedition: ModelsExpedition, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsExpedition>>> {
            const localVarAxiosArgs = await ExpeditionApiAxiosParamCreator(configuration).updateExpedition(id, expedition, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ExpeditionApi - factory interface
 * @export
 */
export const ExpeditionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates Expedition
         * @param {ModelsExpedition} expedition Expedition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExpedition(expedition: ModelsExpedition, options?: any): AxiosPromise<Array<ModelsExpedition>> {
            return ExpeditionApiFp(configuration).createExpedition(expedition, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes Expedition
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteExpedition(id: number, options?: any): AxiosPromise<string> {
            return ExpeditionApiFp(configuration).deleteExpedition(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets Expedition
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExpedition(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsExpedition>> {
            return ExpeditionApiFp(configuration).getExpedition(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists Expeditions
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
        listExpeditions(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsExpedition>> {
            return ExpeditionApiFp(configuration).listExpeditions(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates Expedition
         * @param {number} id Id
         * @param {ModelsExpedition} expedition Expedition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateExpedition(id: number, expedition: ModelsExpedition, options?: any): AxiosPromise<Array<ModelsExpedition>> {
            return ExpeditionApiFp(configuration).updateExpedition(id, expedition, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createExpedition operation in ExpeditionApi.
 * @export
 * @interface ExpeditionApiCreateExpeditionRequest
 */
export interface ExpeditionApiCreateExpeditionRequest {
    /**
     * Expedition
     * @type {ModelsExpedition}
     * @memberof ExpeditionApiCreateExpedition
     */
    readonly expedition: ModelsExpedition
}

/**
 * Request parameters for deleteExpedition operation in ExpeditionApi.
 * @export
 * @interface ExpeditionApiDeleteExpeditionRequest
 */
export interface ExpeditionApiDeleteExpeditionRequest {
    /**
     * Id
     * @type {number}
     * @memberof ExpeditionApiDeleteExpedition
     */
    readonly id: number
}

/**
 * Request parameters for getExpedition operation in ExpeditionApi.
 * @export
 * @interface ExpeditionApiGetExpeditionRequest
 */
export interface ExpeditionApiGetExpeditionRequest {
    /**
     * Id
     * @type {number}
     * @memberof ExpeditionApiGetExpedition
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof ExpeditionApiGetExpedition
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof ExpeditionApiGetExpedition
     */
    readonly select?: string
}

/**
 * Request parameters for listExpeditions operation in ExpeditionApi.
 * @export
 * @interface ExpeditionApiListExpeditionsRequest
 */
export interface ExpeditionApiListExpeditionsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof ExpeditionApiListExpeditions
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof ExpeditionApiListExpeditions
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof ExpeditionApiListExpeditions
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof ExpeditionApiListExpeditions
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof ExpeditionApiListExpeditions
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof ExpeditionApiListExpeditions
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof ExpeditionApiListExpeditions
     */
    readonly select?: string
}

/**
 * Request parameters for updateExpedition operation in ExpeditionApi.
 * @export
 * @interface ExpeditionApiUpdateExpeditionRequest
 */
export interface ExpeditionApiUpdateExpeditionRequest {
    /**
     * Id
     * @type {number}
     * @memberof ExpeditionApiUpdateExpedition
     */
    readonly id: number

    /**
     * Expedition
     * @type {ModelsExpedition}
     * @memberof ExpeditionApiUpdateExpedition
     */
    readonly expedition: ModelsExpedition
}

/**
 * ExpeditionApi - object-oriented interface
 * @export
 * @class ExpeditionApi
 * @extends {BaseAPI}
 */
export class ExpeditionApi extends BaseAPI {
    /**
     * 
     * @summary Creates Expedition
     * @param {ExpeditionApiCreateExpeditionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpeditionApi
     */
    public createExpedition(requestParameters: ExpeditionApiCreateExpeditionRequest, options?: any) {
        return ExpeditionApiFp(this.configuration).createExpedition(requestParameters.expedition, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes Expedition
     * @param {ExpeditionApiDeleteExpeditionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpeditionApi
     */
    public deleteExpedition(requestParameters: ExpeditionApiDeleteExpeditionRequest, options?: any) {
        return ExpeditionApiFp(this.configuration).deleteExpedition(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets Expedition
     * @param {ExpeditionApiGetExpeditionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpeditionApi
     */
    public getExpedition(requestParameters: ExpeditionApiGetExpeditionRequest, options?: any) {
        return ExpeditionApiFp(this.configuration).getExpedition(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists Expeditions
     * @param {ExpeditionApiListExpeditionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpeditionApi
     */
    public listExpeditions(requestParameters: ExpeditionApiListExpeditionsRequest = {}, options?: any) {
        return ExpeditionApiFp(this.configuration).listExpeditions(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates Expedition
     * @param {ExpeditionApiUpdateExpeditionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpeditionApi
     */
    public updateExpedition(requestParameters: ExpeditionApiUpdateExpeditionRequest, options?: any) {
        return ExpeditionApiFp(this.configuration).updateExpedition(requestParameters.id, requestParameters.expedition, options).then((request) => request(this.axios, this.basePath));
    }
}
