import React from 'react'
import { Typography } from '@material-tailwind/react'

type Title = {title: string}

function PageTitle(props : Title) {
  return (
    <div>
        <Typography variant="h3" className="font-bold text-xl">
            {props.title}
        </Typography>
    </div>
  )
}

export default PageTitle