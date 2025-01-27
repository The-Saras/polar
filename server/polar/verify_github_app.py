import asyncio

import polar.integrations.github.verify as github_verify
from polar.logging import configure as configure_logging


async def _main() -> None:
    configure_logging()
    await github_verify.verify_app_configuration()


if __name__ == "__main__":
    asyncio.run(_main())
