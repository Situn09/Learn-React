import React from "react";
// you can also give default value to props
function Card({userName,btnText="visite me"}) { // destruct help you to avoid props.usename you can access direct .username
  console.log(props);// here you find  4(due to strict mode) empty object
  let userName= 'kcr'
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />  {/* here you must close your img tag*/} 
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{userName}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold ">
          {btnText || "visti me"} &rarr;{/* || use for default value this is less preferable */}
        </button>
      </div>
    </div>

    )
}

export default Card