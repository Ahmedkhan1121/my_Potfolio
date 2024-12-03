import React from 'react'
import { ListItems } from '@/utils/helper'
import Link from 'next/link'
import { ListItemType } from '@/Types/Types'


function ListItem() {
  return (

        <>
        <ul>
          {
            ListItems.map((e:ListItemType)=>{
              return(
                <>
                <li className='flex flex-col text-center py-[18px] px-[20px] rounded-lg shadow-lg font-bold hover:cursor-pointer capitalize  '><Link href={`${e.id}`}>{e.List}</Link> </li>
                </>
              )
            })
          }
        </ul>
        </>
  )
}

export default ListItem
