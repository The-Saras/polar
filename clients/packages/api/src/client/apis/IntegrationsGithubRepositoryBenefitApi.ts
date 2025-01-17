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
  GitHubInvitesBenefitRepositories,
  HTTPValidationError,
} from '../models/index';

export interface IntegrationsGithubRepositoryBenefitApiIntegrationsGithubRepositoryBenefitUserAuthorizeRequest {
    returnTo?: string | null;
}

export interface IntegrationsGithubRepositoryBenefitApiIntegrationsGithubRepositoryBenefitUserCallbackRequest {
    code?: string | null;
    codeVerifier?: string | null;
    state?: string | null;
    error?: string | null;
}

/**
 * 
 */
export class IntegrationsGithubRepositoryBenefitApi extends runtime.BaseAPI {

    /**
     * Integrations.Github Repository Benefit.Installation Callback
     */
    async integrationsGithubRepositoryBenefitInstallationCallbackRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/integrations/github_repository_benefit/installation/callback`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Integrations.Github Repository Benefit.Installation Callback
     */
    async integrationsGithubRepositoryBenefitInstallationCallback(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.integrationsGithubRepositoryBenefitInstallationCallbackRaw(initOverrides);
        return await response.value();
    }

    /**
     * Integrations.Github Repository Benefit.Installation Install
     */
    async integrationsGithubRepositoryBenefitInstallationInstallRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/integrations/github_repository_benefit/installation/install`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Integrations.Github Repository Benefit.Installation Install
     */
    async integrationsGithubRepositoryBenefitInstallationInstall(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.integrationsGithubRepositoryBenefitInstallationInstallRaw(initOverrides);
        return await response.value();
    }

    /**
     * Integrations.Github Repository Benefit.User Authorize
     */
    async integrationsGithubRepositoryBenefitUserAuthorizeRaw(requestParameters: IntegrationsGithubRepositoryBenefitApiIntegrationsGithubRepositoryBenefitUserAuthorizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters['returnTo'] != null) {
            queryParameters['return_to'] = requestParameters['returnTo'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/integrations/github_repository_benefit/user/authorize`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Integrations.Github Repository Benefit.User Authorize
     */
    async integrationsGithubRepositoryBenefitUserAuthorize(requestParameters: IntegrationsGithubRepositoryBenefitApiIntegrationsGithubRepositoryBenefitUserAuthorizeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.integrationsGithubRepositoryBenefitUserAuthorizeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Integrations.Github Repository Benefit.User Callback
     */
    async integrationsGithubRepositoryBenefitUserCallbackRaw(requestParameters: IntegrationsGithubRepositoryBenefitApiIntegrationsGithubRepositoryBenefitUserCallbackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters['code'] != null) {
            queryParameters['code'] = requestParameters['code'];
        }

        if (requestParameters['codeVerifier'] != null) {
            queryParameters['code_verifier'] = requestParameters['codeVerifier'];
        }

        if (requestParameters['state'] != null) {
            queryParameters['state'] = requestParameters['state'];
        }

        if (requestParameters['error'] != null) {
            queryParameters['error'] = requestParameters['error'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/integrations/github_repository_benefit/user/callback`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Integrations.Github Repository Benefit.User Callback
     */
    async integrationsGithubRepositoryBenefitUserCallback(requestParameters: IntegrationsGithubRepositoryBenefitApiIntegrationsGithubRepositoryBenefitUserCallbackRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.integrationsGithubRepositoryBenefitUserCallbackRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists available repositories for this user
     * Integrations.Github Repository Benefit.User Repositories
     */
    async integrationsGithubRepositoryBenefitUserRepositoriesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GitHubInvitesBenefitRepositories>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/integrations/github_repository_benefit/user/repositories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Lists available repositories for this user
     * Integrations.Github Repository Benefit.User Repositories
     */
    async integrationsGithubRepositoryBenefitUserRepositories(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GitHubInvitesBenefitRepositories> {
        const response = await this.integrationsGithubRepositoryBenefitUserRepositoriesRaw(initOverrides);
        return await response.value();
    }

}