// import React from 'react'
// import Day from '~/componets/reports/day';
// import Week from '~/componets/reports/week';
// import Month from '~/componets/reports/month';
import Card from '~/componets/card';
import { Select } from '@material-tailwind/react';
import CardHead from '~/componets/cardHead';
import CardBody from '~/componets/cardBody';
import PageTitle from '~/componets/pagetitle';

// const tabHead = [
//     {
//       label: "Day",
//       route: "day",
//     },
//     {
//       label: "Week",
//       route: "week",
//     },
//     {
//       label: "Month",
//       route: "month",
//     },
//   ];

//   const ReportsComponets = [
//     {
//       label:"day",
//       component:Day
//     },
//     {
//       label:"week",
//       component:Week
//     },
//     {
//       label:"month",
//       component:Month
//     }
//   ]


function reports() {
  return (
    <div className='relative flex flex-col p-6 top-28 mx-auto md:ml-6 md:mr-6 mb-6 gap-y-[40px]'>
        <PageTitle title="Reports"/>
        <div className='grid grid-flow-row md:grid-flow-col md:grid-cols-3 gap-4'>
            <Card>
               <CardHead text="Total Sales"></CardHead>
               <CardBody value="400" percentage="20%"></CardBody>
            </Card>
            <Card>
               <CardHead text="Total Customers"></CardHead>
               <CardBody value="400" percentage="15%"></CardBody>
            </Card>
            <Card>
               <CardHead text="Profit"></CardHead>
               <CardBody value="1,400" percentage="40%"></CardBody>
            </Card>
        </div>

        <div className='grid grid-flow-row bg-white rounded-lg border-[1px] border-gray-300 p-4'>
            <div>

            </div>

        </div>



        {/* <Tabs>
            <TabData tab_header={tabHead} tab_body={ReportsComponets} className='p-1 border-b-[1px] border-gray-500 mx-auto'>
            </TabData>
        </Tabs> */}

    </div>
  )
}

export default reports