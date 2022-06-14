import React,{useEffect} from 'react'

const ClientItem = ({clients,setSelectedClient,selectedClient}) => {
  
  return (
    <> {clients.map((client, index) => (
      <tr
        className=" hover:bg-gray-800 bg-gray-600 "
        key={index}
        onClick={() => setSelectedClient(client)}
      >
        <td className="p-4 w-4 ">
          <div className="flex items-center">
            <input
              htmlFor="checkbox-table-1"
              id="checkbox-table-1"
              type="checkbox"
              onChange={() => setSelectedClient(client)}
              checked={selectedClient === client}
              className="w-4 h-4 bg-gray-100 rounded border-gray-300"
            />
          </div>
        </td>
        <td className="py-4 px-6 text-sm font-medium text-white text-center">
          {client.name}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-white text-center">
          {client.firstname}
        </td>
      </tr>
    ))}</>
  )
}

export default ClientItem