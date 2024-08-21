import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export const PageSelector: React.FC = () => {
  return (
    <Pagination className="hidden md:inline">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" className="bg-slate-100 w-9 h-9 text-muted-foreground">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-zinc-300/70 w-9 h-9 text-muted-foreground">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-zinc-300/70 w-9 h-9 text-muted-foreground">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-zinc-300/70 w-9 h-9 text-muted-foreground">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-zinc-300/70 w-9 h-9 text-muted-foreground">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-zinc-300/70 w-9 h-9 text-muted-foreground">
            <i className="ri-arrow-left-s-line text-[18px]"></i>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-zinc-300/70 w-9 h-9 text-muted-foreground">
            <i className="ri-arrow-right-s-line text-[18px]"></i>
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}