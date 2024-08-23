import React from 'react'
import { Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'


function Firebase() {
    const toast = useToast()

  return (
    <div> 
        <Button
    onClick={() => {
      // Create an example promise that resolves in 5s
      const examplePromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(200), 1000)
      })

      // Will display the loading toast until the promise is either resolved
      // or rejected.
      toast.promise(examplePromise, {
        success: { title: 'Sumbmited', description: 'Thank You' },
        error: { title: 'Promise rejected', description: 'Something wrong' },
        loading: { title: 'Submiting.....', description: 'Please wait' },
      })
    }}
  >
    Show Toast
  </Button>
    </div>
  )
}

export default Firebase