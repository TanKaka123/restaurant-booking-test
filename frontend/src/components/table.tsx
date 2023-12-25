interface TableProps {
  head: string[];
  body: string[][];
}

const Table: React.FC<TableProps> = ({ head, body }) => {
  return (
    <div className="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12">
      <section className="mb-20 text-gray-800">
        <div className="block rounded-lg shadow-lg bg-white">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full mb-0">
                    <thead className="border-b bg-gray-50 rounded-t-lg text-left">
                      <tr>
                        {head &&
                          head.map((item, index) => {
                            return (
                              <th
                                scope="col"
                                className="rounded-tl-lg text-sm font-medium px-6 py-4"
                              >
                                {item}
                              </th>
                            );
                          })}
                      </tr>
                    </thead>
                    <tbody>
                      {body &&
                        body.map((itemParent, index) => {
                          return (
                            <tr className="border-b">
                              {itemParent &&
                                itemParent.map((itemChildren, index) => {
                                  return (
                                    <th
                                      scope="row"
                                      className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left"
                                    >
                                      <div className="flex flex-row items-center">
                                        <div className="ml-4">
                                          <p className="mb-0.5 font-medium">
                                            {itemChildren}
                                          </p>
                                        </div>
                                      </div>
                                    </th>
                                  );
                                })}
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Table;
