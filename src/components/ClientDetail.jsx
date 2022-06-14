import React, { useEffect, useState } from "react";

const ClientDetail = ({ client }) => {
  const [clientDetail, setClientDetail] = useState(null);
  useEffect(() => {
    setClientDetail(client);
  }, [client]);
  return (
    <>
      {clientDetail && (
        <div className="my-10 max-h-full mx-auto border-2 rounded-2xl border-gray-800">
          <h2 className="flex justify-center text-2xl">Adress:</h2>
          <div className="flex ga- justify-center py-10">
            <div className="grid justify-items-center py-2 text-lg font-bold">
              <p> {clientDetail.adress}</p>
              <p>{clientDetail.zipCode}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientDetail;
