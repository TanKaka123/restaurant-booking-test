import { FC } from "react";
import Text from "../../components/text";
import { fontsize } from "../../constants/style";

const Transaction: FC = () => {
  return (
    <div className="grid grid-cols-10   ">
      <div className="col-start-2 col-span-8 bg-white p-6">
        <form> 
        <Text size={fontsize.XLARGE}>thông tin giao dịch</Text>
          <div>
            Input
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
    
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transaction;
