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
import { ModelsTaskActivity } from '../models';
/**
 * TaskActivityApi - axios parameter creator
 * @export
 */
export const TaskActivityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates TaskActivity
         * @param {ModelsTaskActivity} taskActivity TaskActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTaskActivity: async (taskActivity: ModelsTaskActivity, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskActivity' is not null or undefined
            if (taskActivity === null || taskActivity === undefined) {
                throw new RequiredError('taskActivity','Required parameter taskActivity was null or undefined when calling createTaskActivity.');
            }
            const localVarPath = `/task_activity`;
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
            const nonString = typeof taskActivity !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(taskActivity !== undefined ? taskActivity : {})
                : (taskActivity || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes TaskActivity
         * @param {number} id taskid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTaskActivity: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteTaskActivity.');
            }
            const localVarPath = `/task_activity/{id}`
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
         * @summary Gets TaskActivities in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskActivitiesBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getTaskActivitiesBulk.');
            }
            const localVarPath = `/task_activities/bulk`;
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
         * @summary Gets TaskActivity
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskActivity: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getTaskActivity.');
            }
            const localVarPath = `/task_activity/{id}`
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
         * @summary Lists TaskActivities
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
        listTaskActivities: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/task_activities`;
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
         * @summary Updates TaskActivity
         * @param {number} id Id
         * @param {ModelsTaskActivity} taskActivity TaskActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTaskActivity: async (id: number, taskActivity: ModelsTaskActivity, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateTaskActivity.');
            }
            // verify required parameter 'taskActivity' is not null or undefined
            if (taskActivity === null || taskActivity === undefined) {
                throw new RequiredError('taskActivity','Required parameter taskActivity was null or undefined when calling updateTaskActivity.');
            }
            const localVarPath = `/task_activity/{id}`
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
            const nonString = typeof taskActivity !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(taskActivity !== undefined ? taskActivity : {})
                : (taskActivity || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TaskActivityApi - functional programming interface
 * @export
 */
export const TaskActivityApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates TaskActivity
         * @param {ModelsTaskActivity} taskActivity TaskActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTaskActivity(taskActivity: ModelsTaskActivity, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsTaskActivity>>> {
            const localVarAxiosArgs = await TaskActivityApiAxiosParamCreator(configuration).createTaskActivity(taskActivity, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes TaskActivity
         * @param {number} id taskid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTaskActivity(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await TaskActivityApiAxiosParamCreator(configuration).deleteTaskActivity(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets TaskActivities in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTaskActivitiesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsTaskActivity>>> {
            const localVarAxiosArgs = await TaskActivityApiAxiosParamCreator(configuration).getTaskActivitiesBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets TaskActivity
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTaskActivity(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsTaskActivity>>> {
            const localVarAxiosArgs = await TaskActivityApiAxiosParamCreator(configuration).getTaskActivity(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists TaskActivities
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
        async listTaskActivities(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsTaskActivity>>> {
            const localVarAxiosArgs = await TaskActivityApiAxiosParamCreator(configuration).listTaskActivities(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates TaskActivity
         * @param {number} id Id
         * @param {ModelsTaskActivity} taskActivity TaskActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTaskActivity(id: number, taskActivity: ModelsTaskActivity, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsTaskActivity>>> {
            const localVarAxiosArgs = await TaskActivityApiAxiosParamCreator(configuration).updateTaskActivity(id, taskActivity, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TaskActivityApi - factory interface
 * @export
 */
export const TaskActivityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates TaskActivity
         * @param {ModelsTaskActivity} taskActivity TaskActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTaskActivity(taskActivity: ModelsTaskActivity, options?: any): AxiosPromise<Array<ModelsTaskActivity>> {
            return TaskActivityApiFp(configuration).createTaskActivity(taskActivity, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes TaskActivity
         * @param {number} id taskid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTaskActivity(id: number, options?: any): AxiosPromise<string> {
            return TaskActivityApiFp(configuration).deleteTaskActivity(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets TaskActivities in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskActivitiesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsTaskActivity>> {
            return TaskActivityApiFp(configuration).getTaskActivitiesBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets TaskActivity
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskActivity(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsTaskActivity>> {
            return TaskActivityApiFp(configuration).getTaskActivity(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists TaskActivities
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
        listTaskActivities(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsTaskActivity>> {
            return TaskActivityApiFp(configuration).listTaskActivities(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates TaskActivity
         * @param {number} id Id
         * @param {ModelsTaskActivity} taskActivity TaskActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTaskActivity(id: number, taskActivity: ModelsTaskActivity, options?: any): AxiosPromise<Array<ModelsTaskActivity>> {
            return TaskActivityApiFp(configuration).updateTaskActivity(id, taskActivity, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createTaskActivity operation in TaskActivityApi.
 * @export
 * @interface TaskActivityApiCreateTaskActivityRequest
 */
export interface TaskActivityApiCreateTaskActivityRequest {
    /**
     * TaskActivity
     * @type {ModelsTaskActivity}
     * @memberof TaskActivityApiCreateTaskActivity
     */
    readonly taskActivity: ModelsTaskActivity
}

/**
 * Request parameters for deleteTaskActivity operation in TaskActivityApi.
 * @export
 * @interface TaskActivityApiDeleteTaskActivityRequest
 */
export interface TaskActivityApiDeleteTaskActivityRequest {
    /**
     * taskid
     * @type {number}
     * @memberof TaskActivityApiDeleteTaskActivity
     */
    readonly id: number
}

/**
 * Request parameters for getTaskActivitiesBulk operation in TaskActivityApi.
 * @export
 * @interface TaskActivityApiGetTaskActivitiesBulkRequest
 */
export interface TaskActivityApiGetTaskActivitiesBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof TaskActivityApiGetTaskActivitiesBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for getTaskActivity operation in TaskActivityApi.
 * @export
 * @interface TaskActivityApiGetTaskActivityRequest
 */
export interface TaskActivityApiGetTaskActivityRequest {
    /**
     * Id
     * @type {number}
     * @memberof TaskActivityApiGetTaskActivity
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof TaskActivityApiGetTaskActivity
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof TaskActivityApiGetTaskActivity
     */
    readonly select?: string
}

/**
 * Request parameters for listTaskActivities operation in TaskActivityApi.
 * @export
 * @interface TaskActivityApiListTaskActivitiesRequest
 */
export interface TaskActivityApiListTaskActivitiesRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof TaskActivityApiListTaskActivities
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof TaskActivityApiListTaskActivities
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof TaskActivityApiListTaskActivities
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof TaskActivityApiListTaskActivities
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof TaskActivityApiListTaskActivities
     */
    readonly limit?: string

    /**
     * Pagination page
     * @type {number}
     * @memberof TaskActivityApiListTaskActivities
     */
    readonly page?: number

    /**
     * Order by [field]
     * @type {string}
     * @memberof TaskActivityApiListTaskActivities
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof TaskActivityApiListTaskActivities
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof TaskActivityApiListTaskActivities
     */
    readonly select?: string
}

/**
 * Request parameters for updateTaskActivity operation in TaskActivityApi.
 * @export
 * @interface TaskActivityApiUpdateTaskActivityRequest
 */
export interface TaskActivityApiUpdateTaskActivityRequest {
    /**
     * Id
     * @type {number}
     * @memberof TaskActivityApiUpdateTaskActivity
     */
    readonly id: number

    /**
     * TaskActivity
     * @type {ModelsTaskActivity}
     * @memberof TaskActivityApiUpdateTaskActivity
     */
    readonly taskActivity: ModelsTaskActivity
}

/**
 * TaskActivityApi - object-oriented interface
 * @export
 * @class TaskActivityApi
 * @extends {BaseAPI}
 */
export class TaskActivityApi extends BaseAPI {
    /**
     * 
     * @summary Creates TaskActivity
     * @param {TaskActivityApiCreateTaskActivityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskActivityApi
     */
    public createTaskActivity(requestParameters: TaskActivityApiCreateTaskActivityRequest, options?: any) {
        return TaskActivityApiFp(this.configuration).createTaskActivity(requestParameters.taskActivity, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes TaskActivity
     * @param {TaskActivityApiDeleteTaskActivityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskActivityApi
     */
    public deleteTaskActivity(requestParameters: TaskActivityApiDeleteTaskActivityRequest, options?: any) {
        return TaskActivityApiFp(this.configuration).deleteTaskActivity(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets TaskActivities in bulk
     * @param {TaskActivityApiGetTaskActivitiesBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskActivityApi
     */
    public getTaskActivitiesBulk(requestParameters: TaskActivityApiGetTaskActivitiesBulkRequest, options?: any) {
        return TaskActivityApiFp(this.configuration).getTaskActivitiesBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets TaskActivity
     * @param {TaskActivityApiGetTaskActivityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskActivityApi
     */
    public getTaskActivity(requestParameters: TaskActivityApiGetTaskActivityRequest, options?: any) {
        return TaskActivityApiFp(this.configuration).getTaskActivity(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists TaskActivities
     * @param {TaskActivityApiListTaskActivitiesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskActivityApi
     */
    public listTaskActivities(requestParameters: TaskActivityApiListTaskActivitiesRequest = {}, options?: any) {
        return TaskActivityApiFp(this.configuration).listTaskActivities(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.page, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates TaskActivity
     * @param {TaskActivityApiUpdateTaskActivityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskActivityApi
     */
    public updateTaskActivity(requestParameters: TaskActivityApiUpdateTaskActivityRequest, options?: any) {
        return TaskActivityApiFp(this.configuration).updateTaskActivity(requestParameters.id, requestParameters.taskActivity, options).then((request) => request(this.axios, this.basePath));
    }
}
