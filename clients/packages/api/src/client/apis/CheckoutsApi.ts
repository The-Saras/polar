/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 * Read the docs at https://docs.polar.sh/api-reference
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AlreadyActiveSubscriptionError,
  Checkout,
  CheckoutConfirmStripe,
  CheckoutCreate,
  CheckoutCreatePublic,
  CheckoutPublic,
  CheckoutPublicConfirmed,
  CheckoutSortProperty,
  CheckoutUpdate,
  CheckoutUpdatePublic,
  HTTPValidationError,
  ListResourceCheckout,
  OrganizationIDFilter1,
  ProductIDFilter,
  ResourceNotFound,
} from '../models/index';

export interface CheckoutsApiClientConfirmRequest {
    clientSecret: string;
    body: CheckoutConfirmStripe;
}

export interface CheckoutsApiClientCreateRequest {
    body: CheckoutCreatePublic;
}

export interface CheckoutsApiClientGetRequest {
    clientSecret: string;
}

export interface CheckoutsApiClientUpdateRequest {
    clientSecret: string;
    body: CheckoutUpdatePublic;
}

export interface CheckoutsApiCreateRequest {
    body: CheckoutCreate;
}

export interface CheckoutsApiGetRequest {
    id: string;
}

export interface CheckoutsApiListRequest {
    organizationId?: OrganizationIDFilter1 | null;
    productId?: ProductIDFilter | null;
    page?: number;
    limit?: number;
    sorting?: Array<CheckoutSortProperty> | null;
}

export interface CheckoutsApiUpdateRequest {
    id: string;
    body: CheckoutUpdate;
}

/**
 * 
 */
export class CheckoutsApi extends runtime.BaseAPI {

    /**
     * Confirm a checkout session by client secret.  Orders and subscriptions will be processed.
     * Confirm Checkout Session from Client
     */
    async clientConfirmRaw(requestParameters: CheckoutsApiClientConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckoutPublicConfirmed>> {
        if (requestParameters['clientSecret'] == null) {
            throw new runtime.RequiredError(
                'clientSecret',
                'Required parameter "clientSecret" was null or undefined when calling clientConfirm().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling clientConfirm().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/checkouts/client/{client_secret}/confirm`.replace(`{${"client_secret"}}`, encodeURIComponent(String(requestParameters['clientSecret']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Confirm a checkout session by client secret.  Orders and subscriptions will be processed.
     * Confirm Checkout Session from Client
     */
    async clientConfirm(requestParameters: CheckoutsApiClientConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckoutPublicConfirmed> {
        const response = await this.clientConfirmRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a checkout session from a client. Suitable to build checkout links.
     * Create Checkout Session from Client
     */
    async clientCreateRaw(requestParameters: CheckoutsApiClientCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckoutPublic>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling clientCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/checkouts/client/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a checkout session from a client. Suitable to build checkout links.
     * Create Checkout Session from Client
     */
    async clientCreate(requestParameters: CheckoutsApiClientCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckoutPublic> {
        const response = await this.clientCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a checkout session by client secret.
     * Get Checkout Session from Client
     */
    async clientGetRaw(requestParameters: CheckoutsApiClientGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckoutPublic>> {
        if (requestParameters['clientSecret'] == null) {
            throw new runtime.RequiredError(
                'clientSecret',
                'Required parameter "clientSecret" was null or undefined when calling clientGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/checkouts/client/{client_secret}`.replace(`{${"client_secret"}}`, encodeURIComponent(String(requestParameters['clientSecret']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a checkout session by client secret.
     * Get Checkout Session from Client
     */
    async clientGet(requestParameters: CheckoutsApiClientGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckoutPublic> {
        const response = await this.clientGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a checkout session by client secret.
     * Update Checkout Session from Client
     */
    async clientUpdateRaw(requestParameters: CheckoutsApiClientUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckoutPublic>> {
        if (requestParameters['clientSecret'] == null) {
            throw new runtime.RequiredError(
                'clientSecret',
                'Required parameter "clientSecret" was null or undefined when calling clientUpdate().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling clientUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/checkouts/client/{client_secret}`.replace(`{${"client_secret"}}`, encodeURIComponent(String(requestParameters['clientSecret']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a checkout session by client secret.
     * Update Checkout Session from Client
     */
    async clientUpdate(requestParameters: CheckoutsApiClientUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckoutPublic> {
        const response = await this.clientUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a checkout session.
     * Create Checkout Session
     */
    async createRaw(requestParameters: CheckoutsApiCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Checkout>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling create().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/checkouts/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a checkout session.
     * Create Checkout Session
     */
    async create(requestParameters: CheckoutsApiCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Checkout> {
        const response = await this.createRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a checkout session by ID.
     * Get Checkout Session
     */
    async getRaw(requestParameters: CheckoutsApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Checkout>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling get().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/checkouts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a checkout session by ID.
     * Get Checkout Session
     */
    async get(requestParameters: CheckoutsApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Checkout> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List checkout sessions.
     * List Checkout Sessions
     */
    async listRaw(requestParameters: CheckoutsApiListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceCheckout>> {
        const queryParameters: any = {};

        if (requestParameters['organizationId'] != null) {
            queryParameters['organization_id'] = requestParameters['organizationId'];
        }

        if (requestParameters['productId'] != null) {
            queryParameters['product_id'] = requestParameters['productId'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['sorting'] != null) {
            queryParameters['sorting'] = requestParameters['sorting'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/checkouts/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List checkout sessions.
     * List Checkout Sessions
     */
    async list(requestParameters: CheckoutsApiListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceCheckout> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a checkout session.
     * Update Checkout Session
     */
    async updateRaw(requestParameters: CheckoutsApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Checkout>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling update().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling update().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/checkouts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a checkout session.
     * Update Checkout Session
     */
    async update(requestParameters: CheckoutsApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Checkout> {
        const response = await this.updateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
