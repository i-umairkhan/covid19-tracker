import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const InfoBox = ({title,cases,total}) => {
  return (
      <Card>
          <CardContent className='infobox'>
              <Typography color='textSeondary' className='infobox__title'>{title}</Typography>
              <h2 className='infobox__cases'>{cases}</h2>
              <Typography color='textSeondary' className='infobox__total'>{total} Total</Typography>
          </CardContent>
      </Card>
  )
}

export default InfoBox