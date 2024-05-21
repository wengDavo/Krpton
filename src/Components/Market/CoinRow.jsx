import { useRef } from "react";

function CoinRow() {
  let ref = useRef(null);
  return (
    <tr className="">
      <td>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          ref={ref}
          stroke="currentColor"
          className="w-6 h-6 fill-neutral-15 cursor-pointer stroke-neutral-15"
          onClick={() => (ref.current.style.fill = "#EF443B")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </td>
      <td>1</td>
      <td>Bitcoin</td>
      <td>56</td>
      <td className="hidden md:table-cell">$880</td>
      <td className="hidden md:table-cell">+1</td>
      <td className="hidden md:table-cell">789</td>
      <td className="hidden md:table-cell">45</td>
      <td className="hidden md:table-cell">89</td>
      <td className="hidden md:table-cell">12.7m</td>
      <td className="hidden md:table-cell">19.09m</td>
      <td className="hidden md:table-cell">73974</td>
      <td className="hidden md:table-cell">7397</td>
      <td className="hidden md:table-cell">7397</td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-6"
          onClick={() => (ref.current.style.fill = "#262626")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </td>
      <td className="rounded-lg px-1 hover:bg-warning-300 hover:text-abs-white cursor-pointer border border-primary hover:bg-opacity-50 ">
        Trade
      </td>
    </tr>
  );
}

export default CoinRow;
