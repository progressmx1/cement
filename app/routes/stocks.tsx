import React from 'react'
import PageTitle from '~/componets/pagetitle'
import NewStock from '~/componets/stock/newstock'
import InStock from '~/componets/stock/instock'

function Stocks() {
  return (
    <div className='relative flex flex-col p-6 top-28 mx-auto'>
        <PageTitle title="Stock Management"/>
        <NewStock/>
        <InStock/>
    </div>
  )
}

export default Stocks