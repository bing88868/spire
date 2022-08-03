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
import { ModelsGroupId } from '../models';
/**
 * GroupIdApi - axios parameter creator
 * @export
 */
export const GroupIdApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates GroupId
         * @param {ModelsGroupId} groupId GroupId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGroupId: async (groupId: ModelsGroupId, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling createGroupId.');
            }
            const localVarPath = `/group_id`;
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
            const nonString = typeof groupId !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(groupId !== undefined ? groupId : {})
                : (groupId || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes GroupId
         * @param {number} id groupid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroupId: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteGroupId.');
            }
            const localVarPath = `/group_id/{id}`
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
         * @summary Gets GroupId
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupId: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getGroupId.');
            }
            const localVarPath = `/group_id/{id}`
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
         * @summary Gets GroupIds in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupIdsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getGroupIdsBulk.');
            }
            const localVarPath = `/group_ids/bulk`;
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
         * @summary Lists GroupIds
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
        listGroupIds: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/group_ids`;
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
         * @summary Updates GroupId
         * @param {number} id Id
         * @param {ModelsGroupId} groupId GroupId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGroupId: async (id: number, groupId: ModelsGroupId, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateGroupId.');
            }
            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateGroupId.');
            }
            const localVarPath = `/group_id/{id}`
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
            const nonString = typeof groupId !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(groupId !== undefined ? groupId : {})
                : (groupId || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupIdApi - functional programming interface
 * @export
 */
export const GroupIdApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates GroupId
         * @param {ModelsGroupId} groupId GroupId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGroupId(groupId: ModelsGroupId, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGroupId>>> {
            const localVarAxiosArgs = await GroupIdApiAxiosParamCreator(configuration).createGroupId(groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes GroupId
         * @param {number} id groupid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroupId(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await GroupIdApiAxiosParamCreator(configuration).deleteGroupId(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets GroupId
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupId(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGroupId>>> {
            const localVarAxiosArgs = await GroupIdApiAxiosParamCreator(configuration).getGroupId(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets GroupIds in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupIdsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGroupId>>> {
            const localVarAxiosArgs = await GroupIdApiAxiosParamCreator(configuration).getGroupIdsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists GroupIds
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
        async listGroupIds(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGroupId>>> {
            const localVarAxiosArgs = await GroupIdApiAxiosParamCreator(configuration).listGroupIds(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates GroupId
         * @param {number} id Id
         * @param {ModelsGroupId} groupId GroupId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGroupId(id: number, groupId: ModelsGroupId, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGroupId>>> {
            const localVarAxiosArgs = await GroupIdApiAxiosParamCreator(configuration).updateGroupId(id, groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * GroupIdApi - factory interface
 * @export
 */
export const GroupIdApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates GroupId
         * @param {ModelsGroupId} groupId GroupId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGroupId(groupId: ModelsGroupId, options?: any): AxiosPromise<Array<ModelsGroupId>> {
            return GroupIdApiFp(configuration).createGroupId(groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes GroupId
         * @param {number} id groupid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroupId(id: number, options?: any): AxiosPromise<string> {
            return GroupIdApiFp(configuration).deleteGroupId(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets GroupId
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupId(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsGroupId>> {
            return GroupIdApiFp(configuration).getGroupId(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets GroupIds in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupIdsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsGroupId>> {
            return GroupIdApiFp(configuration).getGroupIdsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists GroupIds
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
        listGroupIds(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsGroupId>> {
            return GroupIdApiFp(configuration).listGroupIds(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates GroupId
         * @param {number} id Id
         * @param {ModelsGroupId} groupId GroupId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGroupId(id: number, groupId: ModelsGroupId, options?: any): AxiosPromise<Array<ModelsGroupId>> {
            return GroupIdApiFp(configuration).updateGroupId(id, groupId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createGroupId operation in GroupIdApi.
 * @export
 * @interface GroupIdApiCreateGroupIdRequest
 */
export interface GroupIdApiCreateGroupIdRequest {
    /**
     * GroupId
     * @type {ModelsGroupId}
     * @memberof GroupIdApiCreateGroupId
     */
    readonly groupId: ModelsGroupId
}

/**
 * Request parameters for deleteGroupId operation in GroupIdApi.
 * @export
 * @interface GroupIdApiDeleteGroupIdRequest
 */
export interface GroupIdApiDeleteGroupIdRequest {
    /**
     * groupid
     * @type {number}
     * @memberof GroupIdApiDeleteGroupId
     */
    readonly id: number
}

/**
 * Request parameters for getGroupId operation in GroupIdApi.
 * @export
 * @interface GroupIdApiGetGroupIdRequest
 */
export interface GroupIdApiGetGroupIdRequest {
    /**
     * Id
     * @type {number}
     * @memberof GroupIdApiGetGroupId
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof GroupIdApiGetGroupId
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof GroupIdApiGetGroupId
     */
    readonly select?: string
}

/**
 * Request parameters for getGroupIdsBulk operation in GroupIdApi.
 * @export
 * @interface GroupIdApiGetGroupIdsBulkRequest
 */
export interface GroupIdApiGetGroupIdsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof GroupIdApiGetGroupIdsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listGroupIds operation in GroupIdApi.
 * @export
 * @interface GroupIdApiListGroupIdsRequest
 */
export interface GroupIdApiListGroupIdsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof GroupIdApiListGroupIds
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof GroupIdApiListGroupIds
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof GroupIdApiListGroupIds
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof GroupIdApiListGroupIds
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof GroupIdApiListGroupIds
     */
    readonly limit?: string

    /**
     * Pagination page
     * @type {number}
     * @memberof GroupIdApiListGroupIds
     */
    readonly page?: number

    /**
     * Order by [field]
     * @type {string}
     * @memberof GroupIdApiListGroupIds
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof GroupIdApiListGroupIds
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof GroupIdApiListGroupIds
     */
    readonly select?: string
}

/**
 * Request parameters for updateGroupId operation in GroupIdApi.
 * @export
 * @interface GroupIdApiUpdateGroupIdRequest
 */
export interface GroupIdApiUpdateGroupIdRequest {
    /**
     * Id
     * @type {number}
     * @memberof GroupIdApiUpdateGroupId
     */
    readonly id: number

    /**
     * GroupId
     * @type {ModelsGroupId}
     * @memberof GroupIdApiUpdateGroupId
     */
    readonly groupId: ModelsGroupId
}

/**
 * GroupIdApi - object-oriented interface
 * @export
 * @class GroupIdApi
 * @extends {BaseAPI}
 */
export class GroupIdApi extends BaseAPI {
    /**
     * 
     * @summary Creates GroupId
     * @param {GroupIdApiCreateGroupIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupIdApi
     */
    public createGroupId(requestParameters: GroupIdApiCreateGroupIdRequest, options?: any) {
        return GroupIdApiFp(this.configuration).createGroupId(requestParameters.groupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes GroupId
     * @param {GroupIdApiDeleteGroupIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupIdApi
     */
    public deleteGroupId(requestParameters: GroupIdApiDeleteGroupIdRequest, options?: any) {
        return GroupIdApiFp(this.configuration).deleteGroupId(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets GroupId
     * @param {GroupIdApiGetGroupIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupIdApi
     */
    public getGroupId(requestParameters: GroupIdApiGetGroupIdRequest, options?: any) {
        return GroupIdApiFp(this.configuration).getGroupId(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets GroupIds in bulk
     * @param {GroupIdApiGetGroupIdsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupIdApi
     */
    public getGroupIdsBulk(requestParameters: GroupIdApiGetGroupIdsBulkRequest, options?: any) {
        return GroupIdApiFp(this.configuration).getGroupIdsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists GroupIds
     * @param {GroupIdApiListGroupIdsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupIdApi
     */
    public listGroupIds(requestParameters: GroupIdApiListGroupIdsRequest = {}, options?: any) {
        return GroupIdApiFp(this.configuration).listGroupIds(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.page, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates GroupId
     * @param {GroupIdApiUpdateGroupIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupIdApi
     */
    public updateGroupId(requestParameters: GroupIdApiUpdateGroupIdRequest, options?: any) {
        return GroupIdApiFp(this.configuration).updateGroupId(requestParameters.id, requestParameters.groupId, options).then((request) => request(this.axios, this.basePath));
    }
}
