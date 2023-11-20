import { displayContent } from "@/types/content"
import { create } from "zustand"

interface state {
 BookmarksData: displayContent[]
}

interface Actions {
 setBookmarksData: (updatedBookmarksData: displayContent[]) => void
}

const INITIAL_STATE: state = {
 BookmarksData: []
}


export const useStore = create<state & Actions>((set) => ({
 BookmarksData: INITIAL_STATE.BookmarksData,
 setBookmarksData:(updatedBookmarksData) =>{
    set(state => ({
     BookmarksData: updatedBookmarksData
    }))
 },
}))