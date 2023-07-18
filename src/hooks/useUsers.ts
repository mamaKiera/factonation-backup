import { useEffect, useState } from 'react'

const useUserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/user/")
        const responseBody = await res.json()
        setUsers(responseBody.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return {
    users,
    setUsers,
    loading,
  }
}



export default useUserList;