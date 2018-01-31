export default {
  SAVE_COMPUTED_NOTES (state, data) {
    state.computedNotes = data
  },
  SAVE_COMPUTED_CATEGORIES (state, data) {
    state.computedCategories = data
  },
  ACTIVE_COMPUTED_NOTES (state, data) {
    state.activeNotes = data
  },
  ACTIVE_COMPUTED_NOTESINDEX (state, index) {
    state.activeNotesIndex = index
  }
}
