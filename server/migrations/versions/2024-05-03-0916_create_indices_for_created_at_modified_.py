"""Create indices for created_at, modified_at and deleted_at

Revision ID: eb33b3e5fc49
Revises: adf59d69f607
Create Date: 2024-05-03 09:16:51.897617

"""

import sqlalchemy as sa
from alembic import op

# Polar Custom Imports
from polar.kit.extensions.sqlalchemy import PostgresUUID

# revision identifiers, used by Alembic.
revision = "eb33b3e5fc49"
down_revision = "adf59d69f607"
branch_labels: tuple[str] | None = None
depends_on: tuple[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index(
        op.f("ix_accounts_created_at"), "accounts", ["created_at"], unique=False
    )
    op.create_index(
        op.f("ix_accounts_deleted_at"), "accounts", ["deleted_at"], unique=False
    )
    op.create_index(
        op.f("ix_accounts_modified_at"), "accounts", ["modified_at"], unique=False
    )
    op.create_index(
        op.f("ix_advertisement_campaigns_created_at"),
        "advertisement_campaigns",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_advertisement_campaigns_deleted_at"),
        "advertisement_campaigns",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_advertisement_campaigns_modified_at"),
        "advertisement_campaigns",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_article_subscriptions_created_at"),
        "article_subscriptions",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_article_subscriptions_deleted_at"),
        "article_subscriptions",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_article_subscriptions_modified_at"),
        "article_subscriptions",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_articles_created_at"), "articles", ["created_at"], unique=False
    )
    op.create_index(
        op.f("ix_articles_deleted_at"), "articles", ["deleted_at"], unique=False
    )
    op.create_index(
        op.f("ix_articles_modified_at"), "articles", ["modified_at"], unique=False
    )
    op.create_index(
        op.f("ix_benefit_grants_created_at"),
        "benefit_grants",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_benefit_grants_deleted_at"),
        "benefit_grants",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_benefit_grants_modified_at"),
        "benefit_grants",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_benefits_created_at"), "benefits", ["created_at"], unique=False
    )
    op.create_index(
        op.f("ix_benefits_deleted_at"), "benefits", ["deleted_at"], unique=False
    )
    op.create_index(
        op.f("ix_benefits_modified_at"), "benefits", ["modified_at"], unique=False
    )
    op.create_index(
        op.f("ix_donations_created_at"), "donations", ["created_at"], unique=False
    )
    op.create_index(
        op.f("ix_donations_deleted_at"), "donations", ["deleted_at"], unique=False
    )
    op.create_index(
        op.f("ix_donations_modified_at"), "donations", ["modified_at"], unique=False
    )
    op.create_index(
        op.f("ix_held_balances_created_at"),
        "held_balances",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_held_balances_deleted_at"),
        "held_balances",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_held_balances_modified_at"),
        "held_balances",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_invites_created_at"), "invites", ["created_at"], unique=False
    )
    op.create_index(
        op.f("ix_invites_deleted_at"), "invites", ["deleted_at"], unique=False
    )
    op.create_index(
        op.f("ix_invites_modified_at"), "invites", ["modified_at"], unique=False
    )
    op.create_index(
        op.f("ix_issue_dependencies_created_at"),
        "issue_dependencies",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_issue_dependencies_deleted_at"),
        "issue_dependencies",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_issue_dependencies_modified_at"),
        "issue_dependencies",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_issue_references_created_at"),
        "issue_references",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_issue_references_deleted_at"),
        "issue_references",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_issue_references_modified_at"),
        "issue_references",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_issue_rewards_created_at"),
        "issue_rewards",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_issue_rewards_deleted_at"),
        "issue_rewards",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_issue_rewards_modified_at"),
        "issue_rewards",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_issues_created_at"), "issues", ["created_at"], unique=False
    )
    op.create_index(
        op.f("ix_issues_deleted_at"), "issues", ["deleted_at"], unique=False
    )
    op.create_index(
        op.f("ix_issues_modified_at"), "issues", ["modified_at"], unique=False
    )
    op.create_index(
        op.f("ix_magic_links_created_at"), "magic_links", ["created_at"], unique=False
    )
    op.create_index(
        op.f("ix_magic_links_deleted_at"), "magic_links", ["deleted_at"], unique=False
    )
    op.create_index(
        op.f("ix_magic_links_modified_at"), "magic_links", ["modified_at"], unique=False
    )
    op.create_index(
        op.f("ix_notifications_created_at"),
        "notifications",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_notifications_deleted_at"),
        "notifications",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_notifications_modified_at"),
        "notifications",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_authorization_codes_created_at"),
        "oauth2_authorization_codes",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_authorization_codes_deleted_at"),
        "oauth2_authorization_codes",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_authorization_codes_modified_at"),
        "oauth2_authorization_codes",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_clients_created_at"),
        "oauth2_clients",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_clients_deleted_at"),
        "oauth2_clients",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_clients_modified_at"),
        "oauth2_clients",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_grants_created_at"),
        "oauth2_grants",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_grants_deleted_at"),
        "oauth2_grants",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_grants_modified_at"),
        "oauth2_grants",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_tokens_created_at"),
        "oauth2_tokens",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_tokens_deleted_at"),
        "oauth2_tokens",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth2_tokens_modified_at"),
        "oauth2_tokens",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth_accounts_created_at"),
        "oauth_accounts",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth_accounts_deleted_at"),
        "oauth_accounts",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_oauth_accounts_modified_at"),
        "oauth_accounts",
        ["modified_at"],
        unique=False,
    )
    op.drop_index("idx_deleted_at", table_name="organizations")
    op.create_index(
        op.f("ix_organizations_created_at"),
        "organizations",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_organizations_deleted_at"),
        "organizations",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_organizations_modified_at"),
        "organizations",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_personal_access_tokens_created_at"),
        "personal_access_tokens",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_personal_access_tokens_deleted_at"),
        "personal_access_tokens",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_personal_access_tokens_modified_at"),
        "personal_access_tokens",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_pledge_transactions_created_at"),
        "pledge_transactions",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_pledge_transactions_deleted_at"),
        "pledge_transactions",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_pledge_transactions_modified_at"),
        "pledge_transactions",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_pledges_created_at"), "pledges", ["created_at"], unique=False
    )
    op.create_index(
        op.f("ix_pledges_deleted_at"), "pledges", ["deleted_at"], unique=False
    )
    op.create_index(
        op.f("ix_pledges_modified_at"), "pledges", ["modified_at"], unique=False
    )
    op.create_index(
        op.f("ix_pull_requests_created_at"),
        "pull_requests",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_pull_requests_deleted_at"),
        "pull_requests",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_pull_requests_modified_at"),
        "pull_requests",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_repositories_created_at"), "repositories", ["created_at"], unique=False
    )
    op.create_index(
        op.f("ix_repositories_deleted_at"), "repositories", ["deleted_at"], unique=False
    )
    op.create_index(
        op.f("ix_repositories_modified_at"),
        "repositories",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscription_tier_benefits_created_at"),
        "subscription_tier_benefits",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscription_tier_benefits_deleted_at"),
        "subscription_tier_benefits",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscription_tier_benefits_modified_at"),
        "subscription_tier_benefits",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscription_tier_prices_created_at"),
        "subscription_tier_prices",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscription_tier_prices_deleted_at"),
        "subscription_tier_prices",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscription_tier_prices_modified_at"),
        "subscription_tier_prices",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscription_tiers_created_at"),
        "subscription_tiers",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscription_tiers_deleted_at"),
        "subscription_tiers",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscription_tiers_modified_at"),
        "subscription_tiers",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscriptions_created_at"),
        "subscriptions",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscriptions_deleted_at"),
        "subscriptions",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_subscriptions_modified_at"),
        "subscriptions",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_transactions_created_at"), "transactions", ["created_at"], unique=False
    )
    op.create_index(
        op.f("ix_transactions_deleted_at"), "transactions", ["deleted_at"], unique=False
    )
    op.create_index(
        op.f("ix_transactions_modified_at"),
        "transactions",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_user_organizations_created_at"),
        "user_organizations",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_user_organizations_deleted_at"),
        "user_organizations",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_user_organizations_modified_at"),
        "user_organizations",
        ["modified_at"],
        unique=False,
    )
    op.create_index(op.f("ix_users_created_at"), "users", ["created_at"], unique=False)
    op.create_index(op.f("ix_users_deleted_at"), "users", ["deleted_at"], unique=False)
    op.create_index(
        op.f("ix_users_modified_at"), "users", ["modified_at"], unique=False
    )
    op.create_index(
        op.f("ix_webhook_deliveries_created_at"),
        "webhook_deliveries",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_deliveries_deleted_at"),
        "webhook_deliveries",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_deliveries_modified_at"),
        "webhook_deliveries",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_endpoints_created_at"),
        "webhook_endpoints",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_endpoints_deleted_at"),
        "webhook_endpoints",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_endpoints_modified_at"),
        "webhook_endpoints",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_events_created_at"),
        "webhook_events",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_events_deleted_at"),
        "webhook_events",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_events_modified_at"),
        "webhook_events",
        ["modified_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_notifications_created_at"),
        "webhook_notifications",
        ["created_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_notifications_deleted_at"),
        "webhook_notifications",
        ["deleted_at"],
        unique=False,
    )
    op.create_index(
        op.f("ix_webhook_notifications_modified_at"),
        "webhook_notifications",
        ["modified_at"],
        unique=False,
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(
        op.f("ix_webhook_notifications_modified_at"), table_name="webhook_notifications"
    )
    op.drop_index(
        op.f("ix_webhook_notifications_deleted_at"), table_name="webhook_notifications"
    )
    op.drop_index(
        op.f("ix_webhook_notifications_created_at"), table_name="webhook_notifications"
    )
    op.drop_index(op.f("ix_webhook_events_modified_at"), table_name="webhook_events")
    op.drop_index(op.f("ix_webhook_events_deleted_at"), table_name="webhook_events")
    op.drop_index(op.f("ix_webhook_events_created_at"), table_name="webhook_events")
    op.drop_index(
        op.f("ix_webhook_endpoints_modified_at"), table_name="webhook_endpoints"
    )
    op.drop_index(
        op.f("ix_webhook_endpoints_deleted_at"), table_name="webhook_endpoints"
    )
    op.drop_index(
        op.f("ix_webhook_endpoints_created_at"), table_name="webhook_endpoints"
    )
    op.drop_index(
        op.f("ix_webhook_deliveries_modified_at"), table_name="webhook_deliveries"
    )
    op.drop_index(
        op.f("ix_webhook_deliveries_deleted_at"), table_name="webhook_deliveries"
    )
    op.drop_index(
        op.f("ix_webhook_deliveries_created_at"), table_name="webhook_deliveries"
    )
    op.drop_index(op.f("ix_users_modified_at"), table_name="users")
    op.drop_index(op.f("ix_users_deleted_at"), table_name="users")
    op.drop_index(op.f("ix_users_created_at"), table_name="users")
    op.drop_index(
        op.f("ix_user_organizations_modified_at"), table_name="user_organizations"
    )
    op.drop_index(
        op.f("ix_user_organizations_deleted_at"), table_name="user_organizations"
    )
    op.drop_index(
        op.f("ix_user_organizations_created_at"), table_name="user_organizations"
    )
    op.drop_index(op.f("ix_transactions_modified_at"), table_name="transactions")
    op.drop_index(op.f("ix_transactions_deleted_at"), table_name="transactions")
    op.drop_index(op.f("ix_transactions_created_at"), table_name="transactions")
    op.drop_index(op.f("ix_subscriptions_modified_at"), table_name="subscriptions")
    op.drop_index(op.f("ix_subscriptions_deleted_at"), table_name="subscriptions")
    op.drop_index(op.f("ix_subscriptions_created_at"), table_name="subscriptions")
    op.drop_index(
        op.f("ix_subscription_tiers_modified_at"), table_name="subscription_tiers"
    )
    op.drop_index(
        op.f("ix_subscription_tiers_deleted_at"), table_name="subscription_tiers"
    )
    op.drop_index(
        op.f("ix_subscription_tiers_created_at"), table_name="subscription_tiers"
    )
    op.drop_index(
        op.f("ix_subscription_tier_prices_modified_at"),
        table_name="subscription_tier_prices",
    )
    op.drop_index(
        op.f("ix_subscription_tier_prices_deleted_at"),
        table_name="subscription_tier_prices",
    )
    op.drop_index(
        op.f("ix_subscription_tier_prices_created_at"),
        table_name="subscription_tier_prices",
    )
    op.drop_index(
        op.f("ix_subscription_tier_benefits_modified_at"),
        table_name="subscription_tier_benefits",
    )
    op.drop_index(
        op.f("ix_subscription_tier_benefits_deleted_at"),
        table_name="subscription_tier_benefits",
    )
    op.drop_index(
        op.f("ix_subscription_tier_benefits_created_at"),
        table_name="subscription_tier_benefits",
    )
    op.drop_index(op.f("ix_repositories_modified_at"), table_name="repositories")
    op.drop_index(op.f("ix_repositories_deleted_at"), table_name="repositories")
    op.drop_index(op.f("ix_repositories_created_at"), table_name="repositories")
    op.drop_index(op.f("ix_pull_requests_modified_at"), table_name="pull_requests")
    op.drop_index(op.f("ix_pull_requests_deleted_at"), table_name="pull_requests")
    op.drop_index(op.f("ix_pull_requests_created_at"), table_name="pull_requests")
    op.drop_index(op.f("ix_pledges_modified_at"), table_name="pledges")
    op.drop_index(op.f("ix_pledges_deleted_at"), table_name="pledges")
    op.drop_index(op.f("ix_pledges_created_at"), table_name="pledges")
    op.drop_index(
        op.f("ix_pledge_transactions_modified_at"), table_name="pledge_transactions"
    )
    op.drop_index(
        op.f("ix_pledge_transactions_deleted_at"), table_name="pledge_transactions"
    )
    op.drop_index(
        op.f("ix_pledge_transactions_created_at"), table_name="pledge_transactions"
    )
    op.drop_index(
        op.f("ix_personal_access_tokens_modified_at"),
        table_name="personal_access_tokens",
    )
    op.drop_index(
        op.f("ix_personal_access_tokens_deleted_at"),
        table_name="personal_access_tokens",
    )
    op.drop_index(
        op.f("ix_personal_access_tokens_created_at"),
        table_name="personal_access_tokens",
    )
    op.drop_index(op.f("ix_organizations_modified_at"), table_name="organizations")
    op.drop_index(op.f("ix_organizations_deleted_at"), table_name="organizations")
    op.drop_index(op.f("ix_organizations_created_at"), table_name="organizations")
    op.create_index("idx_deleted_at", "organizations", ["deleted_at"], unique=False)
    op.drop_index(op.f("ix_oauth_accounts_modified_at"), table_name="oauth_accounts")
    op.drop_index(op.f("ix_oauth_accounts_deleted_at"), table_name="oauth_accounts")
    op.drop_index(op.f("ix_oauth_accounts_created_at"), table_name="oauth_accounts")
    op.drop_index(op.f("ix_oauth2_tokens_modified_at"), table_name="oauth2_tokens")
    op.drop_index(op.f("ix_oauth2_tokens_deleted_at"), table_name="oauth2_tokens")
    op.drop_index(op.f("ix_oauth2_tokens_created_at"), table_name="oauth2_tokens")
    op.drop_index(op.f("ix_oauth2_grants_modified_at"), table_name="oauth2_grants")
    op.drop_index(op.f("ix_oauth2_grants_deleted_at"), table_name="oauth2_grants")
    op.drop_index(op.f("ix_oauth2_grants_created_at"), table_name="oauth2_grants")
    op.drop_index(op.f("ix_oauth2_clients_modified_at"), table_name="oauth2_clients")
    op.drop_index(op.f("ix_oauth2_clients_deleted_at"), table_name="oauth2_clients")
    op.drop_index(op.f("ix_oauth2_clients_created_at"), table_name="oauth2_clients")
    op.drop_index(
        op.f("ix_oauth2_authorization_codes_modified_at"),
        table_name="oauth2_authorization_codes",
    )
    op.drop_index(
        op.f("ix_oauth2_authorization_codes_deleted_at"),
        table_name="oauth2_authorization_codes",
    )
    op.drop_index(
        op.f("ix_oauth2_authorization_codes_created_at"),
        table_name="oauth2_authorization_codes",
    )
    op.drop_index(op.f("ix_notifications_modified_at"), table_name="notifications")
    op.drop_index(op.f("ix_notifications_deleted_at"), table_name="notifications")
    op.drop_index(op.f("ix_notifications_created_at"), table_name="notifications")
    op.drop_index(op.f("ix_magic_links_modified_at"), table_name="magic_links")
    op.drop_index(op.f("ix_magic_links_deleted_at"), table_name="magic_links")
    op.drop_index(op.f("ix_magic_links_created_at"), table_name="magic_links")
    op.drop_index(op.f("ix_issues_modified_at"), table_name="issues")
    op.drop_index(op.f("ix_issues_deleted_at"), table_name="issues")
    op.drop_index(op.f("ix_issues_created_at"), table_name="issues")
    op.drop_index(op.f("ix_issue_rewards_modified_at"), table_name="issue_rewards")
    op.drop_index(op.f("ix_issue_rewards_deleted_at"), table_name="issue_rewards")
    op.drop_index(op.f("ix_issue_rewards_created_at"), table_name="issue_rewards")
    op.drop_index(
        op.f("ix_issue_references_modified_at"), table_name="issue_references"
    )
    op.drop_index(op.f("ix_issue_references_deleted_at"), table_name="issue_references")
    op.drop_index(op.f("ix_issue_references_created_at"), table_name="issue_references")
    op.drop_index(
        op.f("ix_issue_dependencies_modified_at"), table_name="issue_dependencies"
    )
    op.drop_index(
        op.f("ix_issue_dependencies_deleted_at"), table_name="issue_dependencies"
    )
    op.drop_index(
        op.f("ix_issue_dependencies_created_at"), table_name="issue_dependencies"
    )
    op.drop_index(op.f("ix_invites_modified_at"), table_name="invites")
    op.drop_index(op.f("ix_invites_deleted_at"), table_name="invites")
    op.drop_index(op.f("ix_invites_created_at"), table_name="invites")
    op.drop_index(op.f("ix_held_balances_modified_at"), table_name="held_balances")
    op.drop_index(op.f("ix_held_balances_deleted_at"), table_name="held_balances")
    op.drop_index(op.f("ix_held_balances_created_at"), table_name="held_balances")
    op.drop_index(op.f("ix_donations_modified_at"), table_name="donations")
    op.drop_index(op.f("ix_donations_deleted_at"), table_name="donations")
    op.drop_index(op.f("ix_donations_created_at"), table_name="donations")
    op.drop_index(op.f("ix_benefits_modified_at"), table_name="benefits")
    op.drop_index(op.f("ix_benefits_deleted_at"), table_name="benefits")
    op.drop_index(op.f("ix_benefits_created_at"), table_name="benefits")
    op.drop_index(op.f("ix_benefit_grants_modified_at"), table_name="benefit_grants")
    op.drop_index(op.f("ix_benefit_grants_deleted_at"), table_name="benefit_grants")
    op.drop_index(op.f("ix_benefit_grants_created_at"), table_name="benefit_grants")
    op.drop_index(op.f("ix_articles_modified_at"), table_name="articles")
    op.drop_index(op.f("ix_articles_deleted_at"), table_name="articles")
    op.drop_index(op.f("ix_articles_created_at"), table_name="articles")
    op.drop_index(
        op.f("ix_article_subscriptions_modified_at"), table_name="article_subscriptions"
    )
    op.drop_index(
        op.f("ix_article_subscriptions_deleted_at"), table_name="article_subscriptions"
    )
    op.drop_index(
        op.f("ix_article_subscriptions_created_at"), table_name="article_subscriptions"
    )
    op.drop_index(
        op.f("ix_advertisement_campaigns_modified_at"),
        table_name="advertisement_campaigns",
    )
    op.drop_index(
        op.f("ix_advertisement_campaigns_deleted_at"),
        table_name="advertisement_campaigns",
    )
    op.drop_index(
        op.f("ix_advertisement_campaigns_created_at"),
        table_name="advertisement_campaigns",
    )
    op.drop_index(op.f("ix_accounts_modified_at"), table_name="accounts")
    op.drop_index(op.f("ix_accounts_deleted_at"), table_name="accounts")
    op.drop_index(op.f("ix_accounts_created_at"), table_name="accounts")
    # ### end Alembic commands ###