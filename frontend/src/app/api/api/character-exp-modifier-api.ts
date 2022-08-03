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
import { ModelsCharacterExpModifier } from '../models';
/**
 * CharacterExpModifierApi - axios parameter creator
 * @export
 */
export const CharacterExpModifierApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates CharacterExpModifier
         * @param {ModelsCharacterExpModifier} characterExpModifier CharacterExpModifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCharacterExpModifier: async (characterExpModifier: ModelsCharacterExpModifier, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'characterExpModifier' is not null or undefined
            if (characterExpModifier === null || characterExpModifier === undefined) {
                throw new RequiredError('characterExpModifier','Required parameter characterExpModifier was null or undefined when calling createCharacterExpModifier.');
            }
            const localVarPath = `/character_exp_modifier`;
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
            const nonString = typeof characterExpModifier !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(characterExpModifier !== undefined ? characterExpModifier : {})
                : (characterExpModifier || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes CharacterExpModifier
         * @param {number} id characterId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCharacterExpModifier: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteCharacterExpModifier.');
            }
            const localVarPath = `/character_exp_modifier/{id}`
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
         * @summary Gets CharacterExpModifier
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterExpModifier: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getCharacterExpModifier.');
            }
            const localVarPath = `/character_exp_modifier/{id}`
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
         * @summary Gets CharacterExpModifiers in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterExpModifiersBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getCharacterExpModifiersBulk.');
            }
            const localVarPath = `/character_exp_modifiers/bulk`;
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
         * @summary Lists CharacterExpModifiers
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
        listCharacterExpModifiers: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/character_exp_modifiers`;
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
         * @summary Updates CharacterExpModifier
         * @param {number} id Id
         * @param {ModelsCharacterExpModifier} characterExpModifier CharacterExpModifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCharacterExpModifier: async (id: number, characterExpModifier: ModelsCharacterExpModifier, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateCharacterExpModifier.');
            }
            // verify required parameter 'characterExpModifier' is not null or undefined
            if (characterExpModifier === null || characterExpModifier === undefined) {
                throw new RequiredError('characterExpModifier','Required parameter characterExpModifier was null or undefined when calling updateCharacterExpModifier.');
            }
            const localVarPath = `/character_exp_modifier/{id}`
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
            const nonString = typeof characterExpModifier !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(characterExpModifier !== undefined ? characterExpModifier : {})
                : (characterExpModifier || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CharacterExpModifierApi - functional programming interface
 * @export
 */
export const CharacterExpModifierApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates CharacterExpModifier
         * @param {ModelsCharacterExpModifier} characterExpModifier CharacterExpModifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCharacterExpModifier(characterExpModifier: ModelsCharacterExpModifier, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterExpModifier>>> {
            const localVarAxiosArgs = await CharacterExpModifierApiAxiosParamCreator(configuration).createCharacterExpModifier(characterExpModifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes CharacterExpModifier
         * @param {number} id characterId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCharacterExpModifier(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await CharacterExpModifierApiAxiosParamCreator(configuration).deleteCharacterExpModifier(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets CharacterExpModifier
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharacterExpModifier(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterExpModifier>>> {
            const localVarAxiosArgs = await CharacterExpModifierApiAxiosParamCreator(configuration).getCharacterExpModifier(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets CharacterExpModifiers in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharacterExpModifiersBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterExpModifier>>> {
            const localVarAxiosArgs = await CharacterExpModifierApiAxiosParamCreator(configuration).getCharacterExpModifiersBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists CharacterExpModifiers
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
        async listCharacterExpModifiers(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterExpModifier>>> {
            const localVarAxiosArgs = await CharacterExpModifierApiAxiosParamCreator(configuration).listCharacterExpModifiers(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates CharacterExpModifier
         * @param {number} id Id
         * @param {ModelsCharacterExpModifier} characterExpModifier CharacterExpModifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCharacterExpModifier(id: number, characterExpModifier: ModelsCharacterExpModifier, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterExpModifier>>> {
            const localVarAxiosArgs = await CharacterExpModifierApiAxiosParamCreator(configuration).updateCharacterExpModifier(id, characterExpModifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CharacterExpModifierApi - factory interface
 * @export
 */
export const CharacterExpModifierApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates CharacterExpModifier
         * @param {ModelsCharacterExpModifier} characterExpModifier CharacterExpModifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCharacterExpModifier(characterExpModifier: ModelsCharacterExpModifier, options?: any): AxiosPromise<Array<ModelsCharacterExpModifier>> {
            return CharacterExpModifierApiFp(configuration).createCharacterExpModifier(characterExpModifier, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes CharacterExpModifier
         * @param {number} id characterId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCharacterExpModifier(id: number, options?: any): AxiosPromise<string> {
            return CharacterExpModifierApiFp(configuration).deleteCharacterExpModifier(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets CharacterExpModifier
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterExpModifier(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsCharacterExpModifier>> {
            return CharacterExpModifierApiFp(configuration).getCharacterExpModifier(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets CharacterExpModifiers in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterExpModifiersBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsCharacterExpModifier>> {
            return CharacterExpModifierApiFp(configuration).getCharacterExpModifiersBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists CharacterExpModifiers
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
        listCharacterExpModifiers(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, page?: number, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsCharacterExpModifier>> {
            return CharacterExpModifierApiFp(configuration).listCharacterExpModifiers(includes, where, whereOr, groupBy, limit, page, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates CharacterExpModifier
         * @param {number} id Id
         * @param {ModelsCharacterExpModifier} characterExpModifier CharacterExpModifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCharacterExpModifier(id: number, characterExpModifier: ModelsCharacterExpModifier, options?: any): AxiosPromise<Array<ModelsCharacterExpModifier>> {
            return CharacterExpModifierApiFp(configuration).updateCharacterExpModifier(id, characterExpModifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCharacterExpModifier operation in CharacterExpModifierApi.
 * @export
 * @interface CharacterExpModifierApiCreateCharacterExpModifierRequest
 */
export interface CharacterExpModifierApiCreateCharacterExpModifierRequest {
    /**
     * CharacterExpModifier
     * @type {ModelsCharacterExpModifier}
     * @memberof CharacterExpModifierApiCreateCharacterExpModifier
     */
    readonly characterExpModifier: ModelsCharacterExpModifier
}

/**
 * Request parameters for deleteCharacterExpModifier operation in CharacterExpModifierApi.
 * @export
 * @interface CharacterExpModifierApiDeleteCharacterExpModifierRequest
 */
export interface CharacterExpModifierApiDeleteCharacterExpModifierRequest {
    /**
     * characterId
     * @type {number}
     * @memberof CharacterExpModifierApiDeleteCharacterExpModifier
     */
    readonly id: number
}

/**
 * Request parameters for getCharacterExpModifier operation in CharacterExpModifierApi.
 * @export
 * @interface CharacterExpModifierApiGetCharacterExpModifierRequest
 */
export interface CharacterExpModifierApiGetCharacterExpModifierRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharacterExpModifierApiGetCharacterExpModifier
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof CharacterExpModifierApiGetCharacterExpModifier
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof CharacterExpModifierApiGetCharacterExpModifier
     */
    readonly select?: string
}

/**
 * Request parameters for getCharacterExpModifiersBulk operation in CharacterExpModifierApi.
 * @export
 * @interface CharacterExpModifierApiGetCharacterExpModifiersBulkRequest
 */
export interface CharacterExpModifierApiGetCharacterExpModifiersBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof CharacterExpModifierApiGetCharacterExpModifiersBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listCharacterExpModifiers operation in CharacterExpModifierApi.
 * @export
 * @interface CharacterExpModifierApiListCharacterExpModifiersRequest
 */
export interface CharacterExpModifierApiListCharacterExpModifiersRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof CharacterExpModifierApiListCharacterExpModifiers
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof CharacterExpModifierApiListCharacterExpModifiers
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof CharacterExpModifierApiListCharacterExpModifiers
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof CharacterExpModifierApiListCharacterExpModifiers
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof CharacterExpModifierApiListCharacterExpModifiers
     */
    readonly limit?: string

    /**
     * Pagination page
     * @type {number}
     * @memberof CharacterExpModifierApiListCharacterExpModifiers
     */
    readonly page?: number

    /**
     * Order by [field]
     * @type {string}
     * @memberof CharacterExpModifierApiListCharacterExpModifiers
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof CharacterExpModifierApiListCharacterExpModifiers
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof CharacterExpModifierApiListCharacterExpModifiers
     */
    readonly select?: string
}

/**
 * Request parameters for updateCharacterExpModifier operation in CharacterExpModifierApi.
 * @export
 * @interface CharacterExpModifierApiUpdateCharacterExpModifierRequest
 */
export interface CharacterExpModifierApiUpdateCharacterExpModifierRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharacterExpModifierApiUpdateCharacterExpModifier
     */
    readonly id: number

    /**
     * CharacterExpModifier
     * @type {ModelsCharacterExpModifier}
     * @memberof CharacterExpModifierApiUpdateCharacterExpModifier
     */
    readonly characterExpModifier: ModelsCharacterExpModifier
}

/**
 * CharacterExpModifierApi - object-oriented interface
 * @export
 * @class CharacterExpModifierApi
 * @extends {BaseAPI}
 */
export class CharacterExpModifierApi extends BaseAPI {
    /**
     * 
     * @summary Creates CharacterExpModifier
     * @param {CharacterExpModifierApiCreateCharacterExpModifierRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterExpModifierApi
     */
    public createCharacterExpModifier(requestParameters: CharacterExpModifierApiCreateCharacterExpModifierRequest, options?: any) {
        return CharacterExpModifierApiFp(this.configuration).createCharacterExpModifier(requestParameters.characterExpModifier, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes CharacterExpModifier
     * @param {CharacterExpModifierApiDeleteCharacterExpModifierRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterExpModifierApi
     */
    public deleteCharacterExpModifier(requestParameters: CharacterExpModifierApiDeleteCharacterExpModifierRequest, options?: any) {
        return CharacterExpModifierApiFp(this.configuration).deleteCharacterExpModifier(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets CharacterExpModifier
     * @param {CharacterExpModifierApiGetCharacterExpModifierRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterExpModifierApi
     */
    public getCharacterExpModifier(requestParameters: CharacterExpModifierApiGetCharacterExpModifierRequest, options?: any) {
        return CharacterExpModifierApiFp(this.configuration).getCharacterExpModifier(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets CharacterExpModifiers in bulk
     * @param {CharacterExpModifierApiGetCharacterExpModifiersBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterExpModifierApi
     */
    public getCharacterExpModifiersBulk(requestParameters: CharacterExpModifierApiGetCharacterExpModifiersBulkRequest, options?: any) {
        return CharacterExpModifierApiFp(this.configuration).getCharacterExpModifiersBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists CharacterExpModifiers
     * @param {CharacterExpModifierApiListCharacterExpModifiersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterExpModifierApi
     */
    public listCharacterExpModifiers(requestParameters: CharacterExpModifierApiListCharacterExpModifiersRequest = {}, options?: any) {
        return CharacterExpModifierApiFp(this.configuration).listCharacterExpModifiers(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.page, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates CharacterExpModifier
     * @param {CharacterExpModifierApiUpdateCharacterExpModifierRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterExpModifierApi
     */
    public updateCharacterExpModifier(requestParameters: CharacterExpModifierApiUpdateCharacterExpModifierRequest, options?: any) {
        return CharacterExpModifierApiFp(this.configuration).updateCharacterExpModifier(requestParameters.id, requestParameters.characterExpModifier, options).then((request) => request(this.axios, this.basePath));
    }
}
