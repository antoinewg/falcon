import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import React, { useState } from 'react'

import { IRebelsPosition } from './types'

interface Message {
  status: AlertProps['severity']
  message: string
}

interface Props {
  onUpload: (content: IRebelsPosition) => void
}

export const Upload: React.FC<Props> = ({ onUpload }) => {
  const [uploadMessage, setUploadMessage] = useState<Message | null>(null)
  let fileReader = new FileReader()

  const handleClose = () => setUploadMessage(null)

  const handleFileRead = () => {
    try {
      if (fileReader.result && typeof fileReader.result === 'string') {
        onUpload(JSON.parse(fileReader.result))
        setUploadMessage({ status: 'success', message: 'Upload successful' })
      }
    } catch {
      setUploadMessage({ status: 'error', message: 'Upload failed' })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChosen = (file: any) => {
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(file)
  }

  return (
    <React.Fragment>
      <Button color="primary" component="label">
        Upload File
        <input
          type="file"
          hidden
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => handleFileChosen(e.target.files[0])}
          accept="application/json"
        />
      </Button>

      <Snackbar open={!!uploadMessage} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={uploadMessage?.status}>
          {uploadMessage?.message}
        </MuiAlert>
      </Snackbar>
    </React.Fragment>
  )
}
