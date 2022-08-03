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
import { ModelsRaidMember } from '../models';
/**
 * RaidMemberApi - axios parameter creator
 * @export
 */
export const RaidMemberApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates RaidMember
         * @param {ModelsRaidMember} raidMember RaidMember
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRaidMember: async (raidMember: ModelsRaidMember, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'raidMember' is not null or undefined
            if (raidMember === null || raidMember === undefined) {
                throw new RequiredError('raidMember','Required parameter raidMember was null or undefined when calling createRaidMember.');
            }
            const localVarPath = `/raid_member`;
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
            const nonString = typeof raidMember !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(raidMember !== undefined ? raidMember : {})
                : (raidMember || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes RaidMember
         * @param {number} id charid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRaidMember: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteRaidMember.');
            }
            const localVarPath = `/raid_member/{id}`
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
         * @summary Gets RaidMember
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRaidMember: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getRaidMember.');
            }
            const localVarPath = `/raid_member/{id}`
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
         * @summary Gets RaidMembers in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRaidMembersBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getRaidMembersBulk.');
            }
            const localVarPath = `/raid_members/bulk`;
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
         * @summary Lists RaidMembers
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
        listRaidMembers: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/raid_members`;
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
         * @summary Updates RaidMember
         * @param {number} id Id
         * @param {ModelsRaidMember} raidMember RaidMember
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRaidMember: async (id: number, raidMember: ModelsRaidMember, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateRaidMember.');
            }
            // verify required parameter 'raidMember' is not null or undefined
            if (raidMember === null || raidMember === undefined) {
                throw new RequiredError('raidMember','Required parameter raidMember was null or undefined when calling updateRaidMember.');
            }
            const localVarPath = `/raid_member/{id}`
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
            const nonString = typeof raidMember !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(raidMember !== undefined ? raidMember : {})
                : (raidMember || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RaidMemberApi - functional programming interface
 * @export
 */
export const RaidMemberApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates RaidMember
         * @param {ModelsRaidMember} raidMember RaidMember
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRaidMember(raidMember: ModelsRaidMember, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsRaidMember>>> {
            const localVarAxiosArgs = await RaidMemberApiAxiosParamCreator(configuration).createRaidMember(raidMember, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes RaidMember
         * @param {number} id charid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRaidMember(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await RaidMemberApiAxiosParamCreator(configuration).deleteRaidMember(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets RaidMember
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRaidMember(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsRaidMember>>> {
            const localVarAxiosArgs = await RaidMemberApiAxiosParamCreator(configuration).getRaidMember(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets RaidMembers in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRaidMembersBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsRaidMember>>> {
            const localVarAxiosArgs = await RaidMemberApiAxiosParamCreator(configuration).getRaidMembersBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists RaidMembers
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
        async listRaidMembers(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsRaidMember>>> {
            const localVarAxiosArgs = await RaidMemberApiAxiosParamCreator(configuration).listRaidMembers(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates RaidMember
         * @param {number} id Id
         * @param {ModelsRaidMember} raidMember RaidMember
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRaidMember(id: number, raidMember: ModelsRaidMember, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsRaidMember>>> {
            const localVarAxiosArgs = await RaidMemberApiAxiosParamCreator(configuration).updateRaidMember(id, raidMember, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RaidMemberApi - factory interface
 * @export
 */
export const RaidMemberApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates RaidMember
         * @param {ModelsRaidMember} raidMember RaidMember
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRaidMember(raidMember: ModelsRaidMember, options?: any): AxiosPromise<Array<ModelsRaidMember>> {
            return RaidMemberApiFp(configuration).createRaidMember(raidMember, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes RaidMember
         * @param {number} id charid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRaidMember(id: number, options?: any): AxiosPromise<string> {
            return RaidMemberApiFp(configuration).deleteRaidMember(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets RaidMember
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRaidMember(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsRaidMember>> {
            return RaidMemberApiFp(configuration).getRaidMember(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets RaidMembers in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRaidMembersBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsRaidMember>> {
            return RaidMemberApiFp(configuration).getRaidMembersBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists RaidMembers
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
        listRaidMembers(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsRaidMember>> {
            return RaidMemberApiFp(configuration).listRaidMembers(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates RaidMember
         * @param {number} id Id
         * @param {ModelsRaidMember} raidMember RaidMember
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRaidMember(id: number, raidMember: ModelsRaidMember, options?: any): AxiosPromise<Array<ModelsRaidMember>> {
            return RaidMemberApiFp(configuration).updateRaidMember(id, raidMember, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createRaidMember operation in RaidMemberApi.
 * @export
 * @interface RaidMemberApiCreateRaidMemberRequest
 */
export interface RaidMemberApiCreateRaidMemberRequest {
    /**
     * RaidMember
     * @type {ModelsRaidMember}
     * @memberof RaidMemberApiCreateRaidMember
     */
    readonly raidMember: ModelsRaidMember
}

/**
 * Request parameters for deleteRaidMember operation in RaidMemberApi.
 * @export
 * @interface RaidMemberApiDeleteRaidMemberRequest
 */
export interface RaidMemberApiDeleteRaidMemberRequest {
    /**
     * charid
     * @type {number}
     * @memberof RaidMemberApiDeleteRaidMember
     */
    readonly id: number
}

/**
 * Request parameters for getRaidMember operation in RaidMemberApi.
 * @export
 * @interface RaidMemberApiGetRaidMemberRequest
 */
export interface RaidMemberApiGetRaidMemberRequest {
    /**
     * Id
     * @type {number}
     * @memberof RaidMemberApiGetRaidMember
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof RaidMemberApiGetRaidMember
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof RaidMemberApiGetRaidMember
     */
    readonly select?: string
}

/**
 * Request parameters for getRaidMembersBulk operation in RaidMemberApi.
 * @export
 * @interface RaidMemberApiGetRaidMembersBulkRequest
 */
export interface RaidMemberApiGetRaidMembersBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof RaidMemberApiGetRaidMembersBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listRaidMembers operation in RaidMemberApi.
 * @export
 * @interface RaidMemberApiListRaidMembersRequest
 */
export interface RaidMemberApiListRaidMembersRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof RaidMemberApiListRaidMembers
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof RaidMemberApiListRaidMembers
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof RaidMemberApiListRaidMembers
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof RaidMemberApiListRaidMembers
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof RaidMemberApiListRaidMembers
     */
    readonly limit?: string

    /**
     * Pagination page
     * @type {number}
     * @memberof RaidMemberApiListRaidMembers
     */
    readonly page?: number

    /**
     * Order by [field]
     * @type {string}
     * @memberof RaidMemberApiListRaidMembers
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof RaidMemberApiListRaidMembers
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof RaidMemberApiListRaidMembers
     */
    readonly select?: string
}

/**
 * Request parameters for updateRaidMember operation in RaidMemberApi.
 * @export
 * @interface RaidMemberApiUpdateRaidMemberRequest
 */
export interface RaidMemberApiUpdateRaidMemberRequest {
    /**
     * Id
     * @type {number}
     * @memberof RaidMemberApiUpdateRaidMember
     */
    readonly id: number

    /**
     * RaidMember
     * @type {ModelsRaidMember}
     * @memberof RaidMemberApiUpdateRaidMember
     */
    readonly raidMember: ModelsRaidMember
}

/**
 * RaidMemberApi - object-oriented interface
 * @export
 * @class RaidMemberApi
 * @extends {BaseAPI}
 */
export class RaidMemberApi extends BaseAPI {
    /**
     * 
     * @summary Creates RaidMember
     * @param {RaidMemberApiCreateRaidMemberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RaidMemberApi
     */
    public createRaidMember(requestParameters: RaidMemberApiCreateRaidMemberRequest, options?: any) {
        return RaidMemberApiFp(this.configuration).createRaidMember(requestParameters.raidMember, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes RaidMember
     * @param {RaidMemberApiDeleteRaidMemberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RaidMemberApi
     */
    public deleteRaidMember(requestParameters: RaidMemberApiDeleteRaidMemberRequest, options?: any) {
        return RaidMemberApiFp(this.configuration).deleteRaidMember(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets RaidMember
     * @param {RaidMemberApiGetRaidMemberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RaidMemberApi
     */
    public getRaidMember(requestParameters: RaidMemberApiGetRaidMemberRequest, options?: any) {
        return RaidMemberApiFp(this.configuration).getRaidMember(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets RaidMembers in bulk
     * @param {RaidMemberApiGetRaidMembersBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RaidMemberApi
     */
    public getRaidMembersBulk(requestParameters: RaidMemberApiGetRaidMembersBulkRequest, options?: any) {
        return RaidMemberApiFp(this.configuration).getRaidMembersBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists RaidMembers
     * @param {RaidMemberApiListRaidMembersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RaidMemberApi
     */
    public listRaidMembers(requestParameters: RaidMemberApiListRaidMembersRequest = {}, options?: any) {
        return RaidMemberApiFp(this.configuration).listRaidMembers(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.page, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates RaidMember
     * @param {RaidMemberApiUpdateRaidMemberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RaidMemberApi
     */
    public updateRaidMember(requestParameters: RaidMemberApiUpdateRaidMemberRequest, options?: any) {
        return RaidMemberApiFp(this.configuration).updateRaidMember(requestParameters.id, requestParameters.raidMember, options).then((request) => request(this.axios, this.basePath));
    }
}
