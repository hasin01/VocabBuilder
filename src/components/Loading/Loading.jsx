import React from 'react'
import { Grid } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  )
}

export default Loading