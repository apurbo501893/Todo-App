"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../type";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: State) => state?.todo);

  const [showRemove, SetShowRemove] = useState(false);

  return (
    <div className="flex flex-col gap-4 mt-2 p-4 border border-gray-600 rounded-md">
      {todoList?.length > 0 && (
        <div>
          {" "}
          <ul className="max-h-[300px] border border-slate-600 p-2 shadow-lg shadow-gray-800 flex flex-col gap-2">
            {todoList?.length > 0 && (
              <>
                {todoList?.map((item) => (
                  <TodoItem key={item?._id} item={item} />
                ))}
              </>
            )}
          </ul>
          <motion.button
            onClick={() => SetShowRemove(true)}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" text-sm text-orange-500 text-center bg-transparent border-[1px] border-gray-600 rounded-md px-4 py-3 mt-2 hover:border-red-500 duration-200"
          >
            Remove Todo
          </motion.button>
        </div>
      )}
      {todoList?.length === 0 && (
        <p className="text-center text-base text-yellow-600 font-medium tracking-wide">
          Your todo list is Empty!!
        </p>
      )}
      {showRemove && (
        <div className="w-full h-screen fixed bg-bodyColor top-0 left-0 bg-opacity-60 ">
          <div className="absolute top:1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-bodyColor shawdow-todoShadow rounded-md">
            <p className=" text-base lg:text-xl font-medium text-red-500">
              Are you sure to{" "}
              <span className="font-semibold underline underline-offset-2 decoration-[1px]">
                remove
              </span>{" "}
              all the todos
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => SetShowRemove(false)}
                className=" text-sm text-orange-500 text-center bg-transparent border-[1px] border-gray-600 rounded-md px-4 py-3 mt-2 hover:border-red-500 duration-200 hover:text-red-500 "
              >
                No
              </button>
              <button
                onClick={() => {
                  dispatch(
                    removeTodo(),
                    toast.success("All todo remove successfully!"),
                    SetShowRemove(false)
                  );
                }}
                className=" text-sm text-orange-500 text-center bg-transparent border-[1px] border-gray-600 rounded-md px-4 py-3 mt-2 hover:border-red-500 duration-200 hover:text-green-500 "
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
