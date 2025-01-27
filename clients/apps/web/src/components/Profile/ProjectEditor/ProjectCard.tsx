import { organizationPageLink } from '@/utils/nav'
import { formatStarsNumber } from '@/utils/stars'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { StarIcon } from '@heroicons/react/20/solid'
import { StarIcon as StarIconOutlined } from '@heroicons/react/24/outline'
import { DragIndicatorOutlined, HiveOutlined } from '@mui/icons-material'
import { Organization, Repository } from '@polar-sh/api'
import Button from '@polar-sh/ui/components/atoms/Button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@polar-sh/ui/components/atoms/Card'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export const ProjectCard = ({
  className,
  organization,
  repository,
  disabled,
  sortable,
}: {
  className?: string
  organization: Organization
  repository: Repository
  disabled?: boolean
  sortable?: ReturnType<typeof useSortable>
}) => {
  const repositoryOrganization = repository.internal_organization
  return (
    <Card
      ref={sortable ? sortable.setNodeRef : undefined}
      style={
        sortable
          ? {
              transform: CSS.Transform.toString(sortable.transform),
              transition: sortable.transition,
            }
          : {}
      }
      className={twMerge(
        'dark:text-polar-500 transition-color dark:hover:text-polar-300 dark:hover:bg-polar-900 transition-color rounded-4xl flex flex-col gap-y-2 text-gray-500 hover:bg-gray-50 hover:text-gray-600',
        sortable?.isDragging && 'opacity-30',
        className,
      )}
    >
      <Link
        className="h-full"
        href={organizationPageLink(
          repositoryOrganization || organization,
          repository.name,
        )}
      >
        <CardHeader className="flex flex-row justify-between p-6">
          <div className="flex flex-row items-baseline gap-x-3 overflow-hidden">
            <span className="text-[20px] text-blue-500">
              <HiveOutlined fontSize="inherit" />
            </span>
            <h3 className="truncate text-lg text-gray-950 dark:text-white">
              {repositoryOrganization &&
              repositoryOrganization.id !== organization.id ? (
                <span className="flex flex-row items-baseline gap-x-1">
                  <span className="dark:text-polar-500 text-gray-500">
                    {repositoryOrganization.name}
                  </span>
                  <span className="dark:text-polar-500 text-gray-500">/</span>
                  <span>{repository.name}</span>
                </span>
              ) : (
                repository.name
              )}
            </h3>
          </div>
          {!disabled && (
            <span
              ref={
                disabled || !sortable ? undefined : sortable.setDraggableNodeRef
              }
              className="cursor-grab"
              {...sortable?.attributes}
              {...sortable?.listeners}
            >
              <DragIndicatorOutlined
                className={twMerge('dark:text-polar-600 text-gray-400')}
                fontSize="small"
              />
            </span>
          )}
        </CardHeader>
        <CardContent className="flex h-full grow flex-col flex-wrap px-6 py-0">
          {repository.description && <p>{repository.description}</p>}
        </CardContent>
      </Link>
      <CardFooter className="flex flex-row flex-wrap items-center justify-between gap-4 p-6">
        <Link
          href={`https://github.com/${repository.organization.name}/${repository.name}`}
          target="_blank"
        >
          <Button className="rounded-lg px-2.5" variant="secondary" size="sm">
            <StarIconOutlined className="mr-2 h-4 w-4" />
            <span>Star on GitHub</span>
          </Button>
        </Link>
        <span className="flex flex-row items-center gap-x-1 text-sm">
          <StarIcon className="h-4 w-4" />
          <span className="pt-.5">
            {formatStarsNumber(repository.stars ?? 0)}
          </span>
        </span>
      </CardFooter>
    </Card>
  )
}

export const DraggableProjectCard = ({
  className,
  organization,
  repository,
  disabled,
}: {
  className?: string
  organization: Organization
  repository: Repository
  disabled?: boolean
}) => {
  const sortable = useSortable({ id: repository.id })

  return (
    <ProjectCard
      className={className}
      sortable={sortable}
      repository={repository}
      disabled={disabled}
      organization={organization}
    />
  )
}
