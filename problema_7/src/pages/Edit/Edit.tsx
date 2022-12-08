import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TaskServiceContext } from '../../common/services/TaskServiceProvider'

function Edit() {
  const id = useParams()
  const [task, setTask] = React.useState()
  const taskService = React.useContext(TaskServiceContext)
  useEffect(() => {
    //tslint:disable-next-line
    taskService.getTask(id).then((task) => {
      if(task) setTask(task)
    })
  }, [])
  return (
    <div>Edit</div>
  )
}

export default Edit