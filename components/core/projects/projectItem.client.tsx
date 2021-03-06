import Image from 'next/image'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

import type { Project } from 'adlenoir'
import Link from 'components/utils/link.client'

interface ProjectItemProps {
  item: Project
  onClick: () => void
}

const ProjectItem: React.FC<ProjectItemProps> = ({ item, onClick }) => {
  return (
    <ImageListItem
      key={item.title}
      className="group flex justify-center items-center drop-shadow-xl rounded-2xl xyz-in hover:cursor-pointer"
      onClick={onClick}
    >
      <Image className="rounded-2xl" src={item.img} alt={item.title} placeholder="blur" />
      <ImageListItemBar
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }}
        className="transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-b-2xl"
        title={
          <div className="flex items-center">
            <Image src={item.icon} alt={item.title} />
            <Typography className="ml-4">{item.title}</Typography>
          </div>
        }
        actionIcon={
          <IconButton
            className="bg-gray-700/40 text-white m-2"
            LinkComponent={Link}
            href={item.url}
            target="_blank noreferrer noopener"
            aria-label={`To ${item.url}`}
            size="large"
          >
            <lord-icon
              src="https://cdn.lordicon.com/udwhdpod.json"
              trigger="loop"
              delay="3000"
              stroke="100"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: 24, height: 24 }}
            />
          </IconButton>
        }
      />
    </ImageListItem>
  )
}

export default ProjectItem
