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
          className="w-6 h-6 fill-ghost cursor-pointer stroke-grey-15"
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
      <td className="">$880</td>
      <td className="hidden md:table-cell">+1</td>
      <td className="hidden md:table-cell">789</td>
      <td className="rounded-lg px-1 hover:bg-primary hover:text-abs-white cursor-pointer border border-primary hover:bg-opacity-50 ">
        Trade
      </td>
    </tr>
  );
}

export default CoinRow;
