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
import { ModelsCharacterAura } from '../models';
/**
 * CharacterAuraApi - axios parameter creator
 * @export
 */
export const CharacterAuraApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates CharacterAura
         * @param {ModelsCharacterAura} characterAura CharacterAura
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCharacterAura: async (characterAura: ModelsCharacterAura, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'characterAura' is not null or undefined
            if (characterAura === null || characterAura === undefined) {
                throw new RequiredError('characterAura','Required parameter characterAura was null or undefined when calling createCharacterAura.');
            }
            const localVarPath = `/character_aura`;
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
            const nonString = typeof characterAura !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(characterAura !== undefined ? characterAura : {})
                : (characterAura || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes CharacterAura
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCharacterAura: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteCharacterAura.');
            }
            const localVarPath = `/character_aura/{id}`
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
         * @summary Gets CharacterAura
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterAura: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getCharacterAura.');
            }
            const localVarPath = `/character_aura/{id}`
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
         * @summary Lists CharacterAuras
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
        listCharacterAuras: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/character_auras`;
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
         * @summary Updates CharacterAura
         * @param {number} id Id
         * @param {ModelsCharacterAura} characterAura CharacterAura
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCharacterAura: async (id: number, characterAura: ModelsCharacterAura, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateCharacterAura.');
            }
            // verify required parameter 'characterAura' is not null or undefined
            if (characterAura === null || characterAura === undefined) {
                throw new RequiredError('characterAura','Required parameter characterAura was null or undefined when calling updateCharacterAura.');
            }
            const localVarPath = `/character_aura/{id}`
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
            const nonString = typeof characterAura !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(characterAura !== undefined ? characterAura : {})
                : (characterAura || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CharacterAuraApi - functional programming interface
 * @export
 */
export const CharacterAuraApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates CharacterAura
         * @param {ModelsCharacterAura} characterAura CharacterAura
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCharacterAura(characterAura: ModelsCharacterAura, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterAura>>> {
            const localVarAxiosArgs = await CharacterAuraApiAxiosParamCreator(configuration).createCharacterAura(characterAura, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes CharacterAura
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCharacterAura(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await CharacterAuraApiAxiosParamCreator(configuration).deleteCharacterAura(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets CharacterAura
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharacterAura(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterAura>>> {
            const localVarAxiosArgs = await CharacterAuraApiAxiosParamCreator(configuration).getCharacterAura(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists CharacterAuras
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
        async listCharacterAuras(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterAura>>> {
            const localVarAxiosArgs = await CharacterAuraApiAxiosParamCreator(configuration).listCharacterAuras(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates CharacterAura
         * @param {number} id Id
         * @param {ModelsCharacterAura} characterAura CharacterAura
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCharacterAura(id: number, characterAura: ModelsCharacterAura, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsCharacterAura>>> {
            const localVarAxiosArgs = await CharacterAuraApiAxiosParamCreator(configuration).updateCharacterAura(id, characterAura, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CharacterAuraApi - factory interface
 * @export
 */
export const CharacterAuraApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates CharacterAura
         * @param {ModelsCharacterAura} characterAura CharacterAura
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCharacterAura(characterAura: ModelsCharacterAura, options?: any): AxiosPromise<Array<ModelsCharacterAura>> {
            return CharacterAuraApiFp(configuration).createCharacterAura(characterAura, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes CharacterAura
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCharacterAura(id: number, options?: any): AxiosPromise<string> {
            return CharacterAuraApiFp(configuration).deleteCharacterAura(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets CharacterAura
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacterAura(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsCharacterAura>> {
            return CharacterAuraApiFp(configuration).getCharacterAura(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists CharacterAuras
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
        listCharacterAuras(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsCharacterAura>> {
            return CharacterAuraApiFp(configuration).listCharacterAuras(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates CharacterAura
         * @param {number} id Id
         * @param {ModelsCharacterAura} characterAura CharacterAura
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCharacterAura(id: number, characterAura: ModelsCharacterAura, options?: any): AxiosPromise<Array<ModelsCharacterAura>> {
            return CharacterAuraApiFp(configuration).updateCharacterAura(id, characterAura, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCharacterAura operation in CharacterAuraApi.
 * @export
 * @interface CharacterAuraApiCreateCharacterAuraRequest
 */
export interface CharacterAuraApiCreateCharacterAuraRequest {
    /**
     * CharacterAura
     * @type {ModelsCharacterAura}
     * @memberof CharacterAuraApiCreateCharacterAura
     */
    readonly characterAura: ModelsCharacterAura
}

/**
 * Request parameters for deleteCharacterAura operation in CharacterAuraApi.
 * @export
 * @interface CharacterAuraApiDeleteCharacterAuraRequest
 */
export interface CharacterAuraApiDeleteCharacterAuraRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharacterAuraApiDeleteCharacterAura
     */
    readonly id: number
}

/**
 * Request parameters for getCharacterAura operation in CharacterAuraApi.
 * @export
 * @interface CharacterAuraApiGetCharacterAuraRequest
 */
export interface CharacterAuraApiGetCharacterAuraRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharacterAuraApiGetCharacterAura
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof CharacterAuraApiGetCharacterAura
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof CharacterAuraApiGetCharacterAura
     */
    readonly select?: string
}

/**
 * Request parameters for listCharacterAuras operation in CharacterAuraApi.
 * @export
 * @interface CharacterAuraApiListCharacterAurasRequest
 */
export interface CharacterAuraApiListCharacterAurasRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof CharacterAuraApiListCharacterAuras
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof CharacterAuraApiListCharacterAuras
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof CharacterAuraApiListCharacterAuras
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof CharacterAuraApiListCharacterAuras
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof CharacterAuraApiListCharacterAuras
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof CharacterAuraApiListCharacterAuras
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof CharacterAuraApiListCharacterAuras
     */
    readonly select?: string
}

/**
 * Request parameters for updateCharacterAura operation in CharacterAuraApi.
 * @export
 * @interface CharacterAuraApiUpdateCharacterAuraRequest
 */
export interface CharacterAuraApiUpdateCharacterAuraRequest {
    /**
     * Id
     * @type {number}
     * @memberof CharacterAuraApiUpdateCharacterAura
     */
    readonly id: number

    /**
     * CharacterAura
     * @type {ModelsCharacterAura}
     * @memberof CharacterAuraApiUpdateCharacterAura
     */
    readonly characterAura: ModelsCharacterAura
}

/**
 * CharacterAuraApi - object-oriented interface
 * @export
 * @class CharacterAuraApi
 * @extends {BaseAPI}
 */
export class CharacterAuraApi extends BaseAPI {
    /**
     * 
     * @summary Creates CharacterAura
     * @param {CharacterAuraApiCreateCharacterAuraRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterAuraApi
     */
    public createCharacterAura(requestParameters: CharacterAuraApiCreateCharacterAuraRequest, options?: any) {
        return CharacterAuraApiFp(this.configuration).createCharacterAura(requestParameters.characterAura, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes CharacterAura
     * @param {CharacterAuraApiDeleteCharacterAuraRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterAuraApi
     */
    public deleteCharacterAura(requestParameters: CharacterAuraApiDeleteCharacterAuraRequest, options?: any) {
        return CharacterAuraApiFp(this.configuration).deleteCharacterAura(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets CharacterAura
     * @param {CharacterAuraApiGetCharacterAuraRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterAuraApi
     */
    public getCharacterAura(requestParameters: CharacterAuraApiGetCharacterAuraRequest, options?: any) {
        return CharacterAuraApiFp(this.configuration).getCharacterAura(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists CharacterAuras
     * @param {CharacterAuraApiListCharacterAurasRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterAuraApi
     */
    public listCharacterAuras(requestParameters: CharacterAuraApiListCharacterAurasRequest = {}, options?: any) {
        return CharacterAuraApiFp(this.configuration).listCharacterAuras(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates CharacterAura
     * @param {CharacterAuraApiUpdateCharacterAuraRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharacterAuraApi
     */
    public updateCharacterAura(requestParameters: CharacterAuraApiUpdateCharacterAuraRequest, options?: any) {
        return CharacterAuraApiFp(this.configuration).updateCharacterAura(requestParameters.id, requestParameters.characterAura, options).then((request) => request(this.axios, this.basePath));
    }
}
