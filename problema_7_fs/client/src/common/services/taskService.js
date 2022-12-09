import httpService from "./httpService"
export const taskService = {
   getAll: async () => {
        const { data } = await httpService.get("/tasks")
        return data
   },
   get: async (id) => {
        const { data } = await httpService.get(`/tasks/${id}`)
        return data
   },
    create: async (task) => {
        const { data } = await httpService.post("/tasks", task)
        return data
    },
    update: async (task) => {
        const { data } = await httpService.put(`/tasks/${task.id}`, task)
        return data
    },
    delete: async (id) => {
        const { data } = await httpService.delete(`/tasks/${id}`)
        return data
    }


}