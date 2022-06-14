import React, { useState, useEffect } from "react";
import ClientDetail from "./ClientDetail";
import client from "../client";
const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(false);
  useEffect(() => {
    setClients(client);
  }, []);
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="flex justify-center text-gray-800 text-4xl font-semibold py-2 ">
        Liste des clients
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full overflow-scroll ">
                <thead className="bg-gray-800 ">
                  <tr>
                    <th className="p-4"></th>
                    <th className="py-3 px-6 text-md font-medium  text-center text-gray-100">
                      Nom
                    </th>
                    <th className="py-3 px-6 text-md font-medium text-center text-gray-100">
                      Prenom
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200 ">
                  {clients.map((client, index) => (
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {selectedClient ? (
        <ClientDetail key={client.id} client={selectedClient} />
      ) : (
        <p className="flex  text-md  font-semibold py-20 justify-center">
          Veuillez selctionner un client pour afficher son adress
        </p>
      )}
    </div>
  );
};

export default ClientList;
