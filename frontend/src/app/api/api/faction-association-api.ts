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
import { ModelsFactionAssociation } from '../models';
/**
 * FactionAssociationApi - axios parameter creator
 * @export
 */
export const FactionAssociationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates FactionAssociation
         * @param {ModelsFactionAssociation} factionAssociation FactionAssociation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFactionAssociation: async (factionAssociation: ModelsFactionAssociation, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'factionAssociation' is not null or undefined
            if (factionAssociation === null || factionAssociation === undefined) {
                throw new RequiredError('factionAssociation','Required parameter factionAssociation was null or undefined when calling createFactionAssociation.');
            }
            const localVarPath = `/faction_association`;
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
            const nonString = typeof factionAssociation !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(factionAssociation !== undefined ? factionAssociation : {})
                : (factionAssociation || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes FactionAssociation
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFactionAssociation: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteFactionAssociation.');
            }
            const localVarPath = `/faction_association/{id}`
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
         * @summary Gets FactionAssociation
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFactionAssociation: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getFactionAssociation.');
            }
            const localVarPath = `/faction_association/{id}`
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
         * @summary Gets FactionAssociations in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFactionAssociationsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getFactionAssociationsBulk.');
            }
            const localVarPath = `/faction_associations/bulk`;
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
         * @summary Lists FactionAssociations
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
        listFactionAssociations: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/faction_associations`;
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
         * @summary Updates FactionAssociation
         * @param {number} id Id
         * @param {ModelsFactionAssociation} factionAssociation FactionAssociation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFactionAssociation: async (id: number, factionAssociation: ModelsFactionAssociation, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateFactionAssociation.');
            }
            // verify required parameter 'factionAssociation' is not null or undefined
            if (factionAssociation === null || factionAssociation === undefined) {
                throw new RequiredError('factionAssociation','Required parameter factionAssociation was null or undefined when calling updateFactionAssociation.');
            }
            const localVarPath = `/faction_association/{id}`
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
            const nonString = typeof factionAssociation !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(factionAssociation !== undefined ? factionAssociation : {})
                : (factionAssociation || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FactionAssociationApi - functional programming interface
 * @export
 */
export const FactionAssociationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates FactionAssociation
         * @param {ModelsFactionAssociation} factionAssociation FactionAssociation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFactionAssociation(factionAssociation: ModelsFactionAssociation, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsFactionAssociation>>> {
            const localVarAxiosArgs = await FactionAssociationApiAxiosParamCreator(configuration).createFactionAssociation(factionAssociation, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes FactionAssociation
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFactionAssociation(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await FactionAssociationApiAxiosParamCreator(configuration).deleteFactionAssociation(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets FactionAssociation
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFactionAssociation(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsFactionAssociation>>> {
            const localVarAxiosArgs = await FactionAssociationApiAxiosParamCreator(configuration).getFactionAssociation(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets FactionAssociations in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFactionAssociationsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsFactionAssociation>>> {
            const localVarAxiosArgs = await FactionAssociationApiAxiosParamCreator(configuration).getFactionAssociationsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists FactionAssociations
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
        async listFactionAssociations(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsFactionAssociation>>> {
            const localVarAxiosArgs = await FactionAssociationApiAxiosParamCreator(configuration).listFactionAssociations(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates FactionAssociation
         * @param {number} id Id
         * @param {ModelsFactionAssociation} factionAssociation FactionAssociation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFactionAssociation(id: number, factionAssociation: ModelsFactionAssociation, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsFactionAssociation>>> {
            const localVarAxiosArgs = await FactionAssociationApiAxiosParamCreator(configuration).updateFactionAssociation(id, factionAssociation, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * FactionAssociationApi - factory interface
 * @export
 */
export const FactionAssociationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates FactionAssociation
         * @param {ModelsFactionAssociation} factionAssociation FactionAssociation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFactionAssociation(factionAssociation: ModelsFactionAssociation, options?: any): AxiosPromise<Array<ModelsFactionAssociation>> {
            return FactionAssociationApiFp(configuration).createFactionAssociation(factionAssociation, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes FactionAssociation
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFactionAssociation(id: number, options?: any): AxiosPromise<string> {
            return FactionAssociationApiFp(configuration).deleteFactionAssociation(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets FactionAssociation
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFactionAssociation(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsFactionAssociation>> {
            return FactionAssociationApiFp(configuration).getFactionAssociation(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets FactionAssociations in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFactionAssociationsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsFactionAssociation>> {
            return FactionAssociationApiFp(configuration).getFactionAssociationsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists FactionAssociations
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
        listFactionAssociations(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsFactionAssociation>> {
            return FactionAssociationApiFp(configuration).listFactionAssociations(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates FactionAssociation
         * @param {number} id Id
         * @param {ModelsFactionAssociation} factionAssociation FactionAssociation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFactionAssociation(id: number, factionAssociation: ModelsFactionAssociation, options?: any): AxiosPromise<Array<ModelsFactionAssociation>> {
            return FactionAssociationApiFp(configuration).updateFactionAssociation(id, factionAssociation, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createFactionAssociation operation in FactionAssociationApi.
 * @export
 * @interface FactionAssociationApiCreateFactionAssociationRequest
 */
export interface FactionAssociationApiCreateFactionAssociationRequest {
    /**
     * FactionAssociation
     * @type {ModelsFactionAssociation}
     * @memberof FactionAssociationApiCreateFactionAssociation
     */
    readonly factionAssociation: ModelsFactionAssociation
}

/**
 * Request parameters for deleteFactionAssociation operation in FactionAssociationApi.
 * @export
 * @interface FactionAssociationApiDeleteFactionAssociationRequest
 */
export interface FactionAssociationApiDeleteFactionAssociationRequest {
    /**
     * id
     * @type {number}
     * @memberof FactionAssociationApiDeleteFactionAssociation
     */
    readonly id: number
}

/**
 * Request parameters for getFactionAssociation operation in FactionAssociationApi.
 * @export
 * @interface FactionAssociationApiGetFactionAssociationRequest
 */
export interface FactionAssociationApiGetFactionAssociationRequest {
    /**
     * Id
     * @type {number}
     * @memberof FactionAssociationApiGetFactionAssociation
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof FactionAssociationApiGetFactionAssociation
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof FactionAssociationApiGetFactionAssociation
     */
    readonly select?: string
}

/**
 * Request parameters for getFactionAssociationsBulk operation in FactionAssociationApi.
 * @export
 * @interface FactionAssociationApiGetFactionAssociationsBulkRequest
 */
export interface FactionAssociationApiGetFactionAssociationsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof FactionAssociationApiGetFactionAssociationsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listFactionAssociations operation in FactionAssociationApi.
 * @export
 * @interface FactionAssociationApiListFactionAssociationsRequest
 */
export interface FactionAssociationApiListFactionAssociationsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof FactionAssociationApiListFactionAssociations
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof FactionAssociationApiListFactionAssociations
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof FactionAssociationApiListFactionAssociations
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof FactionAssociationApiListFactionAssociations
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof FactionAssociationApiListFactionAssociations
     */
    readonly limit?: string

    /**
     * Pagination page
     * @type {number}
     * @memberof FactionAssociationApiListFactionAssociations
     */
    readonly page?: number

    /**
     * Order by [field]
     * @type {string}
     * @memberof FactionAssociationApiListFactionAssociations
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof FactionAssociationApiListFactionAssociations
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof FactionAssociationApiListFactionAssociations
     */
    readonly select?: string
}

/**
 * Request parameters for updateFactionAssociation operation in FactionAssociationApi.
 * @export
 * @interface FactionAssociationApiUpdateFactionAssociationRequest
 */
export interface FactionAssociationApiUpdateFactionAssociationRequest {
    /**
     * Id
     * @type {number}
     * @memberof FactionAssociationApiUpdateFactionAssociation
     */
    readonly id: number

    /**
     * FactionAssociation
     * @type {ModelsFactionAssociation}
     * @memberof FactionAssociationApiUpdateFactionAssociation
     */
    readonly factionAssociation: ModelsFactionAssociation
}

/**
 * FactionAssociationApi - object-oriented interface
 * @export
 * @class FactionAssociationApi
 * @extends {BaseAPI}
 */
export class FactionAssociationApi extends BaseAPI {
    /**
     * 
     * @summary Creates FactionAssociation
     * @param {FactionAssociationApiCreateFactionAssociationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionAssociationApi
     */
    public createFactionAssociation(requestParameters: FactionAssociationApiCreateFactionAssociationRequest, options?: any) {
        return FactionAssociationApiFp(this.configuration).createFactionAssociation(requestParameters.factionAssociation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes FactionAssociation
     * @param {FactionAssociationApiDeleteFactionAssociationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionAssociationApi
     */
    public deleteFactionAssociation(requestParameters: FactionAssociationApiDeleteFactionAssociationRequest, options?: any) {
        return FactionAssociationApiFp(this.configuration).deleteFactionAssociation(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets FactionAssociation
     * @param {FactionAssociationApiGetFactionAssociationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionAssociationApi
     */
    public getFactionAssociation(requestParameters: FactionAssociationApiGetFactionAssociationRequest, options?: any) {
        return FactionAssociationApiFp(this.configuration).getFactionAssociation(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets FactionAssociations in bulk
     * @param {FactionAssociationApiGetFactionAssociationsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionAssociationApi
     */
    public getFactionAssociationsBulk(requestParameters: FactionAssociationApiGetFactionAssociationsBulkRequest, options?: any) {
        return FactionAssociationApiFp(this.configuration).getFactionAssociationsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists FactionAssociations
     * @param {FactionAssociationApiListFactionAssociationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionAssociationApi
     */
    public listFactionAssociations(requestParameters: FactionAssociationApiListFactionAssociationsRequest = {}, options?: any) {
        return FactionAssociationApiFp(this.configuration).listFactionAssociations(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.page, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates FactionAssociation
     * @param {FactionAssociationApiUpdateFactionAssociationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FactionAssociationApi
     */
    public updateFactionAssociation(requestParameters: FactionAssociationApiUpdateFactionAssociationRequest, options?: any) {
        return FactionAssociationApiFp(this.configuration).updateFactionAssociation(requestParameters.id, requestParameters.factionAssociation, options).then((request) => request(this.axios, this.basePath));
    }
}
