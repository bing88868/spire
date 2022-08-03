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
import { ModelsCharacterActivity } from '../models';
/**
 * CharacterActivityApi - axios parameter creator
 * @export
 */
export const CharacterActivityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates CharacterActivity
         * @param {ModelsCharacterActivity} characterActivity CharacterActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCharacterActivity: async (characterActivity: ModelsCharacterActivity, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'characterActivity' is not null or undefined
            if (characterActivity === null || characterActivity === undefined) {
                throw new RequiredError('characterActivity','Required parameter characterActivity was null or undefined when calling createCharacterActivity.');
            }
            const localVarPath = `/character_activity`;
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
            const nonString = typeof characterActivity !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(characterActivity !== undefined ? characterActivity : {})
                : (characterActivity || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes CharacterActivity
         * @param {number} id charid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCharacterActivity: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteCharacterActivity.');
            }
            const localVarPath = `/character_activity/{id}`
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
         * @summary Gets CharacterActivities in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterActivitiesBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getCharacterActivitiesBulk.');
            }
            const localVarPath = `/character_activities/bulk`;
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
         * @summary Gets CharacterActivity
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterActivity: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getCharacterActivity.');
            }
            const localVarPath = `/character_activity/{id}`
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
         * @summary Lists CharacterActivities
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
        listCharacterActivities: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/character_activities`;
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
         * @summary Updates CharacterActivity
         * @param {number} id Id
         * @param {ModelsCharacterActivity} characterActivity CharacterActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCharacterActivity: async (id: number, characterActivity: ModelsCharacterActivity, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateCharacterActivity.');
            }
            // verify required parameter 'characterActivity' is not null or undefined
            if (characterActivity === null || characterActivity === undefined) {
                throw new RequiredError('characterActivity','Required parameter characterActivity was null or undefined when calling updateCharacterActivity.');
            }
            const localVarPath = `/character_activity/{id}`
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
            const nonString = typeof characterActivity !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(characterActivity !== undefined ? characterActivity : {})
                : (characterActivity || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CharacterActivityApi - functional programming interface
 * @export
 */
export const CharacterActivityApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates CharacterActivity
         * @param {ModelsCharacterActivity} characterActivity CharacterActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCharacterActivity(characterActivity: ModelsCharacterActivity, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterActivity>>> {
            const localVarAxiosArgs = await CharacterActivityApiAxiosParamCreator(configuration).createCharacterActivity(characterActivity, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes CharacterActivity
         * @param {number} id charid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCharacterActivity(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await CharacterActivityApiAxiosParamCreator(configuration).deleteCharacterActivity(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets CharacterActivities in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharacterActivitiesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterActivity>>> {
            const localVarAxiosArgs = await CharacterActivityApiAxiosParamCreator(configuration).getCharacterActivitiesBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets CharacterActivity
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharacterActivity(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterActivity>>> {
            const localVarAxiosArgs = await CharacterActivityApiAxiosParamCreator(configuration).getCharacterActivity(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists CharacterActivities
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
        async listCharacterActivities(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterActivity>>> {
            const localVarAxiosArgs = await CharacterActivityApiAxiosParamCreator(configuration).listCharacterActivities(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates CharacterActivity
         * @param {number} id Id
         * @param {ModelsCharacterActivity} characterActivity CharacterActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCharacterActivity(id: number, characterActivity: ModelsCharacterActivity, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterActivity>>> {
            const localVarAxiosArgs = await CharacterActivityApiAxiosParamCreator(configuration).updateCharacterActivity(id, characterActivity, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CharacterActivityApi - factory interface
 * @export
 */
export const CharacterActivityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates CharacterActivity
         * @param {ModelsCharacterActivity} characterActivity CharacterActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCharacterActivity(characterActivity: ModelsCharacterActivity, options?: any): AxiosPromise<Array<ModelsCharacterActivity>> {
            return CharacterActivityApiFp(configuration).createCharacterActivity(characterActivity, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes CharacterActivity
         * @param {number} id charid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCharacterActivity(id: number, options?: any): AxiosPromise<string> {
            return CharacterActivityApiFp(configuration).deleteCharacterActivity(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets CharacterActivities in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterActivitiesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsCharacterActivity>> {
            return CharacterActivityApiFp(configuration).getCharacterActivitiesBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets CharacterActivity
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterActivity(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsCharacterActivity>> {
            return CharacterActivityApiFp(configuration).getCharacterActivity(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists CharacterActivities
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
        listCharacterActivities(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsCharacterActivity>> {
            return CharacterActivityApiFp(configuration).listCharacterActivities(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates CharacterActivity
         * @param {number} id Id
         * @param {ModelsCharacterActivity} characterActivity CharacterActivity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCharacterActivity(id: number, characterActivity: ModelsCharacterActivity, options?: any): AxiosPromise<Array<ModelsCharacterActivity>> {
            return CharacterActivityApiFp(configuration).updateCharacterActivity(id, characterActivity, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCharacterActivity operation in CharacterActivityApi.
 * @export
 * @interface CharacterActivityApiCreateCharacterActivityRequest
 */
export interface CharacterActivityApiCreateCharacterActivityRequest {
    /**
     * CharacterActivity
     * @type {ModelsCharacterActivity}
     * @memberof CharacterActivityApiCreateCharacterActivity
     */
    readonly characterActivity: ModelsCharacterActivity
}

/**
 * Request parameters for deleteCharacterActivity operation in CharacterActivityApi.
 * @export
 * @interface CharacterActivityApiDeleteCharacterActivityRequest
 */
export interface CharacterActivityApiDeleteCharacterActivityRequest {
    /**
     * charid
     * @type {number}
     * @memberof CharacterActivityApiDeleteCharacterActivity
     */
    readonly id: number
}

/**
 * Request parameters for getCharacterActivitiesBulk operation in CharacterActivityApi.
 * @export
 * @interface CharacterActivityApiGetCharacterActivitiesBulkRequest
 */
export interface CharacterActivityApiGetCharacterActivitiesBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof CharacterActivityApiGetCharacterActivitiesBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for getCharacterActivity operation in CharacterActivityApi.
 * @export
 * @interface CharacterActivityApiGetCharacterActivityRequest
 */
export interface CharacterActivityApiGetCharacterActivityRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharacterActivityApiGetCharacterActivity
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof CharacterActivityApiGetCharacterActivity
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof CharacterActivityApiGetCharacterActivity
     */
    readonly select?: string
}

/**
 * Request parameters for listCharacterActivities operation in CharacterActivityApi.
 * @export
 * @interface CharacterActivityApiListCharacterActivitiesRequest
 */
export interface CharacterActivityApiListCharacterActivitiesRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof CharacterActivityApiListCharacterActivities
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof CharacterActivityApiListCharacterActivities
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof CharacterActivityApiListCharacterActivities
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof CharacterActivityApiListCharacterActivities
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof CharacterActivityApiListCharacterActivities
     */
    readonly limit?: string

    /**
     * Pagination page
     * @type {number}
     * @memberof CharacterActivityApiListCharacterActivities
     */
    readonly page?: number

    /**
     * Order by [field]
     * @type {string}
     * @memberof CharacterActivityApiListCharacterActivities
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof CharacterActivityApiListCharacterActivities
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof CharacterActivityApiListCharacterActivities
     */
    readonly select?: string
}

/**
 * Request parameters for updateCharacterActivity operation in CharacterActivityApi.
 * @export
 * @interface CharacterActivityApiUpdateCharacterActivityRequest
 */
export interface CharacterActivityApiUpdateCharacterActivityRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharacterActivityApiUpdateCharacterActivity
     */
    readonly id: number

    /**
     * CharacterActivity
     * @type {ModelsCharacterActivity}
     * @memberof CharacterActivityApiUpdateCharacterActivity
     */
    readonly characterActivity: ModelsCharacterActivity
}

/**
 * CharacterActivityApi - object-oriented interface
 * @export
 * @class CharacterActivityApi
 * @extends {BaseAPI}
 */
export class CharacterActivityApi extends BaseAPI {
    /**
     * 
     * @summary Creates CharacterActivity
     * @param {CharacterActivityApiCreateCharacterActivityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterActivityApi
     */
    public createCharacterActivity(requestParameters: CharacterActivityApiCreateCharacterActivityRequest, options?: any) {
        return CharacterActivityApiFp(this.configuration).createCharacterActivity(requestParameters.characterActivity, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes CharacterActivity
     * @param {CharacterActivityApiDeleteCharacterActivityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterActivityApi
     */
    public deleteCharacterActivity(requestParameters: CharacterActivityApiDeleteCharacterActivityRequest, options?: any) {
        return CharacterActivityApiFp(this.configuration).deleteCharacterActivity(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets CharacterActivities in bulk
     * @param {CharacterActivityApiGetCharacterActivitiesBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterActivityApi
     */
    public getCharacterActivitiesBulk(requestParameters: CharacterActivityApiGetCharacterActivitiesBulkRequest, options?: any) {
        return CharacterActivityApiFp(this.configuration).getCharacterActivitiesBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets CharacterActivity
     * @param {CharacterActivityApiGetCharacterActivityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterActivityApi
     */
    public getCharacterActivity(requestParameters: CharacterActivityApiGetCharacterActivityRequest, options?: any) {
        return CharacterActivityApiFp(this.configuration).getCharacterActivity(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists CharacterActivities
     * @param {CharacterActivityApiListCharacterActivitiesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterActivityApi
     */
    public listCharacterActivities(requestParameters: CharacterActivityApiListCharacterActivitiesRequest = {}, options?: any) {
        return CharacterActivityApiFp(this.configuration).listCharacterActivities(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.page, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates CharacterActivity
     * @param {CharacterActivityApiUpdateCharacterActivityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterActivityApi
     */
    public updateCharacterActivity(requestParameters: CharacterActivityApiUpdateCharacterActivityRequest, options?: any) {
        return CharacterActivityApiFp(this.configuration).updateCharacterActivity(requestParameters.id, requestParameters.characterActivity, options).then((request) => request(this.axios, this.basePath));
    }
}
