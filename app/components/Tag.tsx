import React from "react";

type Props = { 
  value: string; 
  selected?: boolean; 
  onClick?: () => void 
};

export default function Tag({value, selected = true, onClick}: Props) {
  return <div className={`border-[1px] border-bgDark transition-all text-xs rounded-lg w-fit whitespace-nowrap ${onClick ? '' : 'px-4 py-2'} ${selected ? 'hover:brightness-125' : 'hover:bg-bgDark hover:text-textLight'}  ${selected ? 'bg-bgDark text-textLight' : 'bg-bgLight text-textDark'}`}>
    {onClick ? (
       <button className="px-4 py-2" onClick={onClick}>{value}</button>) : value}
  </div>
}
