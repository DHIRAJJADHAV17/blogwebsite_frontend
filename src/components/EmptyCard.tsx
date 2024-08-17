import React from "react";


const EmptyCard = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src="/folder.png" alt="No notes" className="w-60" />
      <p className="w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5">
        start creating your first Blog! click the 'Add' button to got down your
        task .lets Get started!.
      </p>
    </div>
  );
};

export default EmptyCard;
