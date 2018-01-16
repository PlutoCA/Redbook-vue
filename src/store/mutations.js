export default {
  SAVE_COMPUTED_NOTES (state, data) {
    state.computedNotes = data
  },
  ACTIVE_COMPUTED_NOTES (state, data) {
    state.activeNotes = data
  },
  ACTIVE_COMPUTED_NOTESINDEX (state, index) {
    state.activeNotesIndex = index
  }
}
