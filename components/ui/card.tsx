import * as React from "react"
import { Button } from "./button"


const Card = () => {
    return (
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="image bg-zinc-100/80 min-h-[250px] flex justify-center items-center">Image</div>
        <div className="gallery flex items-center py-2 px-3 gap-2">
            <div className="w-[50px] h-[50px] bg-zinc-100 rounded-md">IMG 1</div>
            <div className="w-[50px] h-[50px] bg-zinc-100 rounded-md">IMG 2</div>
        </div>
        <div className="card-info py-1 px-3">
            <h3>Nike Court Vision</h3>
        </div>
        <div className="card-footer flex items-start justify-between gap-3 pl-3">
            <div className="w-full border-t-2 border-zinc-200 pt-2">
                <b className="self-center place-self-center">12000,00 MT</b>
            </div>
            <Button variant="default" className="rounded-none"><i className="ri-add-line text-[18px]"></i></Button>
        </div>
      </div>
    )
  }

export { Card }
