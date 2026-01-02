"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from 'emoji-picker-react';

const CreateBudget = () => {
  return (
      <div>
          <Dialog>
              <DialogTrigger asChild>
                  <div className="p-10 flex flex-col justify-center items-center border-2 border-dashed border-gray-400 rounded-lg  cursor-pointer bg-slate-200 hover:border-blue-500 hover:shadow-md">
                      <h2 className="text-3xl">+</h2>
                      <h2 className="">Create New Budget</h2>
                  </div>
              </DialogTrigger>
              <DialogContent>
                  <DialogHeader>
                      <DialogTitle>Create New Budget</DialogTitle>
                      <DialogDescription>
                          <div>
                            
                          </div>
                      </DialogDescription>
                  </DialogHeader>
              </DialogContent>
          </Dialog>
      </div>
  );
}

export default CreateBudget