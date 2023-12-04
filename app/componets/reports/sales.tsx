import { Input,Button } from '@material-tailwind/react'
import { Form } from '@remix-run/react'
// import Button from '../button'

function Sales() {
  return (
    <div className='flex flex-row'>
        <Form>
            <Input type='text' label="Product Name / Code"></Input>
            <Input type='text' label="Quantity"></Input>
            <Button variant="gradient" className="bg-[#1F2937]">
              <span>Confirm</span>
            </Button>
            {/* <Button className="bg-[#1F2937]" name={"submit"}></Button> */}
        </Form>
    </div>
  )
}

export default Sales