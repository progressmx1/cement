import React from 'react'
import { Input,Button} from '@material-tailwind/react'

function NewStock() {
  return (
    <div className='flex flex-col gap-3 mt-9'>
        <div>
            <span>Add new stock item</span>
        </div>
        <div className='flex flex-col gap-y-4 md:w-1/4 gap-x-4 md:flex-row'>
            <Input type='text' label="Product Name"></Input>
            <Input type='text' label="Product Code"></Input>
            <Input type='text' label="Product Manufacturer"></Input>
            <Input type='text' label="Quantity"></Input>
            <Button>Add</Button>
        </div>
    </div>
  )
}

export default NewStock