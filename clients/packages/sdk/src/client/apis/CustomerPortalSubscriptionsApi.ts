/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 * Read the docs at https://docs.polar.sh/api
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
  AlreadyCanceledSubscription,
  CustomerSubscription,
  CustomerSubscriptionSortProperty,
  CustomerSubscriptionUpdate,
  HTTPValidationError,
  ListResourceCustomerSubscription,
  OrganizationIDFilter,
  ProductIDFilter,
  ResourceNotFound,
} from '../models/index';

export interface CustomerPortalSubscriptionsApiCancelRequest {
    id: string;
}

export interface CustomerPortalSubscriptionsApiGetRequest {
    id: string;
}

export interface CustomerPortalSubscriptionsApiListRequest {
    organizationId?: OrganizationIDFilter;
    productId?: ProductIDFilter;
    active?: boolean;
    query?: string;
    page?: number;
    limit?: number;
    sorting?: Array<CustomerSubscriptionSortProperty>;
}

export interface CustomerPortalSubscriptionsApiUpdateRequest {
    id: string;
    body: CustomerSubscriptionUpdate;
}

/**
 * 
 */
export class CustomerPortalSubscriptionsApi extends runtime.BaseAPI {

    /**
     * Cancel a subscription of the authenticated customer or user.
     * Cancel Subscription
     */
    async cancelRaw(requestParameters: CustomerPortalSubscriptionsApiCancelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerSubscription>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling cancel().'
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
            const tokenString = await token("customer_session", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/customer-portal/subscriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Cancel a subscription of the authenticated customer or user.
     * Cancel Subscription
     */
    async cancel(requestParameters: CustomerPortalSubscriptionsApiCancelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerSubscription> {
        const response = await this.cancelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a subscription for the authenticated customer or user.
     * Get Subscription
     */
    async getRaw(requestParameters: CustomerPortalSubscriptionsApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerSubscription>> {
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
            const tokenString = await token("customer_session", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/customer-portal/subscriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a subscription for the authenticated customer or user.
     * Get Subscription
     */
    async get(requestParameters: CustomerPortalSubscriptionsApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerSubscription> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List subscriptions of the authenticated customer or user.
     * List Subscriptions
     */
    async listRaw(requestParameters: CustomerPortalSubscriptionsApiListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceCustomerSubscription>> {
        const queryParameters: any = {};

        if (requestParameters['organizationId'] != null) {
            queryParameters['organization_id'] = requestParameters['organizationId'];
        }

        if (requestParameters['productId'] != null) {
            queryParameters['product_id'] = requestParameters['productId'];
        }

        if (requestParameters['active'] != null) {
            queryParameters['active'] = requestParameters['active'];
        }

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
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
            const tokenString = await token("customer_session", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/customer-portal/subscriptions/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List subscriptions of the authenticated customer or user.
     * List Subscriptions
     */
    async list(requestParameters: CustomerPortalSubscriptionsApiListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceCustomerSubscription> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a subscription of the authenticated customer or user.
     * Update Subscription
     */
    async updateRaw(requestParameters: CustomerPortalSubscriptionsApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerSubscription>> {
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
            const tokenString = await token("customer_session", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/customer-portal/subscriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a subscription of the authenticated customer or user.
     * Update Subscription
     */
    async update(requestParameters: CustomerPortalSubscriptionsApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerSubscription> {
        const response = await this.updateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}