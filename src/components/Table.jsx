import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'



const Table = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])


    const fetchUsers = async () => {

        const url = 'https://jsonplaceholder.typicode.com/users';

        try {
            await fetch (url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setUsers(data)
                })
        } catch (error) {
            console.log(error)
        }
    }
      


    const columns = [
        {title: 'Name', field: 'name'}, 
        {title: 'Email', field: 'email'}, 
        {title: 'Username', field: 'username'}, 
        {title: 'City', field: 'address.city'}, 
        {title: 'Website', field: 'website'}, 
    ]


  return (
    <div className='table-component'>

        <MaterialTable 
            title='Users' 
            columns={columns} 
            data={users}

            editable={{
                onRowAdd: (newRow) => new Promise((resolve, reject)=>{
                    // console.log(newRow)
                    setUsers([...users, newRow])
                    resolve()
                }),
                onRowDelete: (selectedRaw) => new Promise ((resolve, reject) => {
                    // console.log(selectedRaw)
                    const updatedData=[...users]
                    updatedData.splice(selectedRaw.tableData.id, 1)
                    setUsers(updatedData)
                    resolve()
                }),
                onRowUpdate: (newRow, oldRow) => new Promise ((resolve, reject) => {
                    // console.log(newRow, oldRow)
                    const updatedData = [...users]
                    updatedData[oldRow.tableData.id] = newRow
                    setUsers(updatedData)
                    resolve()
                }),
            }}

            options={{
                rowStyle: (data, idx) => idx%2==0 ? {backgroundColor: '#f7f7f7'} : null,
                // filtering: true
                paging: true,
                // pageSizeOptions: [10, 25, 50, 100],
                // pageSize: 10,
                paginationType: 'stepped',
                showFirstLastPageButtons: false, 
                exportButton: true,
                exportAllData: true,
                addRowPosition: 'first',
                actionsColumnIndex: -1,
            }}
        
        />
    </div>
  )
}

export default Table