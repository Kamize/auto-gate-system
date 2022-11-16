export default function Tables({data}) {
  console.log(data)
  return (
    <>
      <div className="overflow-x-auto relative shadow-md ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Nama Depan
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                birthdate
              </th>
              <th scope="col" className="py-3 px-6">
                  No Telepon
                </th>
              {/* <th scope="col" className="py-3 px-6">
                <span className="sr-only">Edit</span>
              </th> */}
            </tr>
          </thead>
          <tbody>
          {/* data[1].data[0].jumlah */}
            {data && data[0].data.map((obj,index) => {
              return (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {obj.namadepan}
                  </th>
                  <td className="py-4 px-6">{obj.email}</td>
                  <td className="py-4 px-6">{obj.birthdate}</td>
                  <td className="py-4 px-6">{obj.nomor_telepon}</td>
                  {/* <td className="py-4 px-6 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </td> */}
                </tr>
              )})}
          </tbody>
        </table>
      </div>
    </>
  );
}
